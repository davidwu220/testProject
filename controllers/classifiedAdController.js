var ClassifiedAd = require('../models/classifiedAd');

// Display list of all classifiedAd
exports.classifiedAd_list = function(req, res) {
    if (req.params.id) {
        res.send('NOT IMPLEMENTED: classifiedAd detail: ' + req.params.id);
    } else {
        res.send('NOT IMPLEMENTED: classifiedAd list: ' + req.params.cat);
    }
};