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
        .select({
            _id: 1,
            title: 1,
            start_date: 1,
            end_date: 1,
            tags: 1
        })
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
                classified_ads,
                commercial_ads
            });
        });
};

// Handle maintenance create on POST
exports.maintenance_create_post = function(req, res) {
    let data = req.body;

    async.waterfall([
        (callback) => {
            Category
                .findById(data.category, (err, category) => {
                    if (err) callback('error at finding matching category: ' + err, null);
        
                    let ad = new Ad({
                        date_inserted: moment().format('YYYYMMDD'),
                        cat: category.cat,
                        cat_title_cn: category.cat_title_cn || null,
                        cat_cn: category.cat_cn,
                        type: category.type,
                        uploaded_manually: true,
                        category: category._id,
                        title: data.title,
                        description: data.description,
                        ad_link: data.link,
                        image: "/manualUploads/images/" + req.file.filename,
                        yt_link: data.ytLink,
                        start_date: moment(data.startDate).format('YYYY-MM-DD'),
                        end_date: moment(data.endDate).format('YYYY-MM-DD'),
                        locations: data.locations,
                        tags: data.tags
                    })

                    callback(null, ad);
                })
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
        res.render('delete', {
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

            // remove image file
            fs.unlinkSync("./public" + removed.image);

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
        res.render('edit', {
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
    Ad.
        update({ ad_id: data.adId },
            { $set: {
                category: data.category,
                title: data.title,
                description: data.description,
                ad_link: data.link,
                yt_link: data.ytLink,
                start_date: moment(data.startDate).format('YYYY-MM-DD'),
                end_date: moment(data.endDate).format('YYYY-MM-DD'),
                locations: data.locations,
                tags: data.tags 
            }},
            (err) => {
                if (err) {
                    res.flash('error', "error creating ad post: " + err);
                } else {
                    res.flash('success', 'Ad information successfully updated!');
                }
                res.redirect('/maintenance/123/edit');
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