var Ad = require('../models/ad');
var Category = require('../models/category');
var Customer = require('../models/customer');
var config = require('../config');
var fs = require("fs");
var async = require('async');
var moment = require('moment');

// Display list of manually uploaded ads
exports.maintenance_list = function(req, res) {
    Ad
        .find({
            uploaded_manually: true
        })
        .populate('tags', 'cat_cn')
        .sort('start_date')
        .exec((err, ads) => {
            if (err) {
                res.flash('error', 'Error Fetching list: ' + err);
                res.render('maintenance', {
                    title: 'Maintenance',
                    ads: []
                });
            }
            res.render('maintenance', {
                title: 'Maintenance',
                ads
            });
        })
}

// Display detail page for a specific maintenance
exports.maintenance_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: maintenance detail: ' + req.params.id);
};

// Display maintenance create form on GET
exports.maintenance_create_get = function(req, res, next) {
    // load categories
    Category.
        find(function (error, categories) {
            if (error) return next(error);
            let classified_ads = [],
                commercial_ads = [];
            categories.forEach(c => {
                if (c.type == 'classified') {
                    classified_ads.push(c);
                } else if (c.type == 'commercial') {
                    commercial_ads.push(c);
                }
            });
            res.render('create', {
                title: 'Create',
                defaultStartDate: moment().format('YYYY-MM-DD'),
                classified_ads,
                commercial_ads
            });
        });
};

// Handle maintenance create on POST
exports.maintenance_create_post = function(req, res) {
    let data = req.body;
    console.log('posted request: ', data);
    let conf = {
        date_inserted: moment().format('YYYYMMDD'),
        uploaded_manually: true,
        location: data.location,
        title: data.title,
        description: data.description,
        ad_link: data.link,
        image: req.file !== undefined ? "/manualUploads/images/" + req.file.filename : "",
        yt_link: data.ytLink,
        start_date: "",
        end_date: "",
        media_format: data.mediaFormat,
        tags: data.tags
    }

    if (moment(data.startDate).isValid()) {
        conf.start_date = moment(data.startDate).format('YYYY-MM-DD');
    }

    if (moment(data.endDate).isValid()) {
        conf.end_date = moment(data.endDate).format('YYYY-MM-DD');
    }

    async.waterfall([
        (callback) => {
            if (data.category !== "") {
                Category
                    .findById(data.category, (err, category) => {
                        if (err) callback('error at finding matching category: ' + err, null);

                        conf.category = category._id;
            
                        let ad = new Ad(conf);
                        
                        console.log("[cat] ad is now:", ad);
                        callback(null, ad);
                    })
            } else {
                let ad = new Ad(conf);

                console.log("[no_cat] ad is now:", ad);
                callback(null, ad);
            }
        },
        (newAd, callback) => {
            // look for customer by id, if not found, insert a new customer.
            Customer.
                findOne({customer_id: data.customerId}, (err, cus) => {
                    if (err) callback('error at finding matching customer: ' + err, null);

                    if (!cus) {
                        let c = new Customer({
                            customer_id: data.customerId,
                            first_name: data.firstName,
                            last_name: data.lastName,
                            phone: data.phone,
                            email: data.email,
                            address: data.address
                        });

                        c.save((err) => {
                            if (err) callback('error at saving new customer: ' + err, null);
                            console.log('new customer created')
                        });
                    }
                    callback(null, newAd);
                });
        },
        (newAd, callback) => {
            newAd.save(function (err) {
                if (err) callback('error at saving: ' + err, null);
                // look for customer by id, if found, push the ad to its ads reference
                Customer.
                    findOne({customer_id: data.customerId}, (err, cus) => {
                        if (cus) {
                            cus.ads.push(newAd);
    
                            cus.save((err) => {
                                console.log('customer updated');
                                newAd.customer = cus._id;
                                newAd.save((err) => {
                                    if (err) callback('error at saving > update ad customer info: ' + err, null);
                                    console.log('ad updated with new customer');
                                });
                            });
                        }
                    });
                
                callback(null, 'saving ad done');
            });
        }
    ], (err, result) => {
        if (err) {
            res.flash('error', "error creating ad post: " + err);
            res.redirect('/maintenance');
        };

        res.flash('success', 'Ad successfully created!');
        res.redirect('/maintenance');
    })
};

// Display maintenance delete form on GET
exports.maintenance_delete_get = function(req, res) {
    async.parallel({
        ad: (callback) => {
            Ad.
                findById(req.params.id).
                populate('category').
                populate('customer').
                populate('tags').
                exec(callback);
        },
        categories: (callback) => {
            Category.find(callback);
        }
    }, (err, results) => {
        let classified_ads = [],
            commercial_ads = [];
        results.categories.forEach(c => {
            if (c.type == 'classified') {
                classified_ads.push(c);
            } else if (c.type == 'commercial') {
                commercial_ads.push(c);
            }
        });

        // for (var all_cat_iter = 0; all_cat_iter < results.categories.length; all_cat_iter++) {
        //     for (var ad_tags_iter = 0; ad_tags_iter < results.ad.tags.length; ad_tags_iter++) {
        //         if (results.categories[all_cat_iter]._id.toString()==results.ad.tags[ad_tags_iter]._id.toString()) {
        //             results.ad.tags[ad_tags_iter].checked='true';
        //             console.log(results.ad.tags[ad_tags_iter]);
        //         }
        //     }
        // }
        res.render('create', {
            title: 'Delete',
            ad: results.ad,
            classified_ads,
            commercial_ads
        });
    });
};

// Handle maintenance delete on POST
exports.maintenance_delete_post = function(req, res) {
    // Unlink the image file when deleting
    // fs.unlink("./" + req.file.path);
    Ad
        .findOneAndRemove({_id: req.params.id})
        .populate('customer')
        .exec((err, removed) => {
            if(err) {
                res.flash('error', "Error when deleting ad: " + err);
                res.redirect('/maintenance');
            }

            if (removed.image !== "") {
                // remove image file
                fs.unlinkSync("./public" + removed.image);
            }

            Customer
                .findOneAndUpdate(
                    { customer_id: removed.customer.customer_id },
                    { $pull: { ads: req.params.id } },
                    (err, removedFromCustomer) => {
                        if (err) {
                            res.flash('error', "Error when deleting customer link: " + err);
                            res.redirect('/maintenance');
                        };
                
                        res.flash('success', 'Ad successfully deleted!');
                        res.redirect('/maintenance');
                    }
                );
          
        })
};

// Display maintenance update form on GET
exports.maintenance_edit_get = function(req, res) {
    async.parallel({
        ad: (callback) => {
            Ad.
                findById(req.params.id).
                populate('category').
                populate('customer').
                populate('tags').
                exec(callback);
        },
        categories: (callback) => {
            Category.find(callback);
        }
    }, (err, results) => {
        let classified_ads = [],
            commercial_ads = [];
        results.categories.forEach(c => {
            if (c.type == 'classified') {
                classified_ads.push(c);
            } else if (c.type == 'commercial') {
                commercial_ads.push(c);
            }
        });

        // for (var all_cat_iter = 0; all_cat_iter < results.categories.length; all_cat_iter++) {
        //     for (var ad_tags_iter = 0; ad_tags_iter < results.ad.tags.length; ad_tags_iter++) {
        //         if (results.categories[all_cat_iter]._id.toString()==results.ad.tags[ad_tags_iter]._id.toString()) {
        //             results.ad.tags[ad_tags_iter].checked='true';
        //             console.log(results.ad.tags[ad_tags_iter]);
        //         }
        //     }
        // }
        res.render('create', {
            title: 'Edit',
            ad: results.ad,
            classified_ads,
            commercial_ads
        });
    });
};

// Handle maintenance update on POST
exports.maintenance_edit_post = function(req, res) {
    let data = req.body;
    let conf = {
        title: data.title,
        description: data.description,
        ad_link: data.link,
        yt_link: data.ytLink,
        start_date: "",
        end_date: "",
        location: data.location,
        tags: data.tags || [] 
    }

    if (data.category !== "") {
        conf.category = data.category
    }

    if (moment(data.startDate).isValid()) {
        conf.start_date = moment(data.startDate).format('YYYY-MM-DD');
    }

    if (moment(data.endDate).isValid()) {
        conf.end_date = moment(data.endDate).format('YYYY-MM-DD');
    }

    Ad.
        updateOne({ _id: req.params.id },
            { $set: conf },
            (err) => {
                if (err) {
                    res.flash('error', "error creating ad post: " + err);
                    res.redirect('/maintenance');
                }

                res.flash('success', 'Ad information successfully updated!');
                res.redirect('/maintenance');
            }
        );

    // Ad.findOne(req.body.adId, (err, ad) => {
    //     ad.category = req.body.category;
    //     ad.title = req.body.title;
    //     ad.description = req.body.description;
    //     ad.ad_link = req.body.link;
    //     start_date = moment(req.body.startDate).format('YYYY-MM-DD');
    //     end_date = moment(req.body.endDate).format('YYYY-MM-DD');
    //     locations = req.body.locations;
    //     tags = req.body.tags;

    //     ad.save((err) => {
    //         if (err) {
    //             res.flash('error', "error creating ad post: " + err);
    //         } else {
    //             res.flash('success', 'Ad information successfully updated!');
    //         }
    //         res.redirect('/maintenance/' + ad.ad_id + '/update');
    //     });
    // });
};