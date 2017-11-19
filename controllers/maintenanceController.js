var Ad = require('../models/ad');
var Category = require('../models/category');
var Customer = require('../models/customer');
var fs = require("fs");
var async = require('async');
var moment = require('moment');

// Display list of all maintenances
exports.maintenance_list = function(req, res) {
    res.send('NOT IMPLEMENTED: maintenance list');
};

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
    let ad = new Ad({
        ad_id: data.adId,
        category: data.category,
        title: data.title,
        description: data.description,
        ad_link: data.link,
        image: "/manual/uploads/images/" + req.file.filename,
        yt_link: data.ytLink,
        start_date: moment(data.startDate).format('YYYY-MM-DD'),
        end_date: moment(data.endDate).format('YYYY-MM-DD'),
        locations: data.locations,
        tags: data.tags
    });

    // look for customer by id, if not found, insert a new customer.
    Customer.
        findOne({customer_id: data.customerId}, (err, cus) => {
            if (!cus) {
                let c = new Customer({
                    customer_id: data.customerId,
                    first_name: data.firstName,
                    last_name: data.lastName,
                    phone: data.phone,
                    email: data.email,
                    address: data.address
                });

                c.save(console.log('new customer created'));
            }
        });

    ad.save(function (err) {
        if (err) { 
            res.flash('error', "error creating ad post: " + err);
        } else {
            // look for customer by id, if found, push the ad to its ads reference
            Customer.
                findOne({customer_id: data.customerId}, (err, cus) => {
                    if (cus) {
                        cus.ads.push(ad);

                        cus.save((err) => {
                            console.log('customer updated');
                            ad.customer = cus._id;
                            ad.save((err) => {
                                console.log('ad updated with new customer');
                            });
                        });
                    }
                });
            res.flash('success', 'Ad successfully created!');
        }

        res.redirect('/maintenance/create');
    });
};

// Display maintenance delete form on GET
exports.maintenance_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: maintenance delete GET');
};

// Handle maintenance delete on POST
exports.maintenance_delete_post = function(req, res) {
    // Unlink the image file when deleting
    // fs.unlink("./" + req.file.path);
    res.send('NOT IMPLEMENTED: maintenance delete POST');
};

// Display maintenance update form on GET
exports.maintenance_update_get = function(req, res) {
    async.parallel({
        ad: (callback) => {
            Ad.
                findOne({ad_id: req.params.id}).
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
        res.render('update', {
            title: 'Update',
            ad: results.ad,
            classified_ads,
            commercial_ads
        });
    });
};

// Handle maintenance update on POST
exports.maintenance_update_post = function(req, res) {
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
                res.redirect('/maintenance/123/update');
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