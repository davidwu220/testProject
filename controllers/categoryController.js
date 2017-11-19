var Category = require('../models/category');

// Display list of all category
exports.category_list = function(req, res) {
    res.send('NOT IMPLEMENTED: category list');
};

// Display detail page for a specific category
exports.category_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: category detail: ' + req.params.id);
};