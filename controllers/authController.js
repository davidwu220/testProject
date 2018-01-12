var passport = require('passport');

var User = require('../models/user');

exports.user_create_post = function (req, res) {
    if (req.body.password === req.body.passwordConf) {
        var userData = {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        }
    
        //use schema.create to insert data into the db
        User.create(userData, function (err, user) {
            if (err) {
                return next(err)
            } else {
                return res.redirect('/maintenance');
            }
        });
    } else {
        res.flash('error', 'Passwords do not match.');
        res.render('new_user', {
            flash: {
                error: "Passwords do not match."
            },
            sentData: req.body
        })
    }
}