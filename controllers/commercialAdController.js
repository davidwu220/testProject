var CommercialAd = require('../models/manualUploadAd');

// Display list of all commercialAd
exports.commercialAd_list = function(req, res) {
    if (req.params.id) {
        res.send('NOT IMPLEMENTED: commercialAd detail: ' + req.params.id);
    } else {
        res.send('NOT IMPLEMENTED: commercialAd list: ' + req.params.cat);
    }
};