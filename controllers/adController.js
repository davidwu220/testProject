var Ad = require('../models/ad');
var fs = require("fs");

// Display list of all ads
exports.ad_list = function(req, res) {
    res.send('NOT IMPLEMENTED: ad list');
};

// Display detail page for a specific ad
exports.ad_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: ad detail: ' + req.params.id);
};

// Display ad create form on GET
exports.ad_create_get = function(req, res) {
    res.render('create', {
        
    });
    //res.send('NOT IMPLEMENTED: ad create GET');
};

// Handle ad create on POST
exports.ad_create_post = function(req, res) {
    let data = req.body;
    let ad = new Ad({
        ad_id: data.adId,
        category: data.category,
        title: data.title,
        description: data.description,
        ad_link: data.link,
        image: "/uploads/" + req.file.filename
    });

    ad.save(function (err) {
        if (err) { console.log("error is: ", err); }
        
        //Genre saved. Redirect to genre detail page
        res.send('NOT IMPLEMENTED: ad create POST');
    });
    console.log(req.body);
    console.log(req.file);
};

// Display ad delete form on GET
exports.ad_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: ad delete GET');
};

// Handle ad delete on POST
exports.ad_delete_post = function(req, res) {
    // Unlink the image file when deleting
    // fs.unlink("./" + req.file.path);
    res.send('NOT IMPLEMENTED: ad delete POST');
};

// Display ad update form on GET
exports.ad_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: ad update GET');
};

// Handle ad update on POST
exports.ad_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: ad update POST');
};