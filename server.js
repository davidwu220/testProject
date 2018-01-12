import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import express from 'express';
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('express-flash-2');
var multer = require('multer');
var passport = require('passport');
var PassportLocalStrategy = require('passport-local');

import config from './config';
import apiRouter from './api';
import * as serverRender from './serverRender';
var maintenance_controller = require('./controllers/maintenanceController');
var auth_controller = require('./controllers/authController');

// Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = config.mongodbUri;
mongoose.connect(mongoDB, {
    useMongoClient: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Setup storage engine
var storageEngine = multer.diskStorage({
    destination: './public/manualUploads/images/',
    filename: (req, file, callback) => {
        callback(null, 'image-' + Date.now() + path.extname(file.originalname));
    }
});
var upload = multer({ storage: storageEngine });

const server = express();

server.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
}));

// view engine setup
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'pug');

server.use('/api', apiRouter);
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
    extended: false
}));
server.use(cookieParser());
server.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized:true}));
server.use(flash());
server.use(express.static('public'));

var User = require('./models/user');

var authStrategy = new PassportLocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, function (email, password, done) {
    User.authenticate(email, password, function(err, user) {
        // success message

        // error message
        done(err, user, err ? { message: err.message } : null);
    });
});

var authSerializer = function(user, done) {
    done(null, user.id);
};

var authDeserializer = function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
};

passport.use(authStrategy);
passport.serializeUser(authSerializer);
passport.deserializeUser(authDeserializer);

server.use(passport.initialize());

server.get('/new_user', (req, res) => {
    res.render('new_user');
});
server.post('/new_user', auth_controller.user_create_post);

server.get('/maintenance_login', (req, res) => {
    res.render('login');
});
server.post('/maintenance_login', passport.authenticate('local', {
    successRedirect: '/maintenance',
    failureRedirect: '/maintenance_login',
    failureFlash: true
}));

server.get('/maintenance:query?', maintenance_controller.maintenance_list);

server.get('/maintenance/create', maintenance_controller.maintenance_create_get);
server.post('/maintenance/create', upload.single("image"), maintenance_controller.maintenance_create_post);

server.get('/maintenance/:id/edit', maintenance_controller.maintenance_edit_get);
server.post('/maintenance/:id/edit', maintenance_controller.maintenance_edit_post);

server.post('/maintenance/:id/delete', maintenance_controller.maintenance_delete_post);

let cls_cats, com_cats, slider_ads = [], aside_right;

server.use(
    (req, res, next) => {
        serverRender.serverRenderGetCats()
            .then((cats) => {
                cls_cats = cats.filter((cat) => {
                    return cat.type === 'classified'
                });
                
                com_cats = cats.filter((cat) => {
                    return cat.type === 'commercial'
                });

                next();
            })
            .catch((error) => {
                console.error(error);

                next();
            });
    }, (req, res, next) => {
        serverRender.serverRenderSliderList()
            .then((sliders) => {
                // randomize slides
                for (var i = sliders.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = sliders[i];
                    sliders[i] = sliders[j];
                    sliders[j] = temp;
                }

                // push only 10 slides in to list to ensure performance
                for (let i = 0; i < 10; i++) {
                    slider_ads.push(sliders[i]);
                }
                //slider_ads = sliders;

                next();
            })
    }, (req, res, next) => {
        serverRender.serverRenderRightSide()
            .then((rightSideAds) => {
                aside_right = rightSideAds;

                next();
            })
    }
);

server.get('/' , (req, res) => {
    res.render('index', {
        type: "home",
        initialCat: null,
        initialData: [],
        cls_cats,
        com_cats,
        slider_ads,
        aside_right
    });

});

server.get('/classifiedAds/:cat?' , (req, res) => {
    let request = "";
    if (req.query.id) {
        request = "?id=" + req.query.id;
    } else if (req.query.page) {
        request = "?page=" + req.query.page;
    }
    serverRender.serverRender(
        {
            type: "classifiedAds", 
            path: req.params.cat ? req.params.cat : "",
            query: request
        }
    )
    .then((initialData) => {
        res.render('index', {
            type: "classifiedAds",
            initialCat: req.params.cat,
            initialData,
            cls_cats,
            com_cats,
            slider_ads,
            aside_right
        });
    })
    .catch((error) => 
        console.error(error));
});

server.get('/classifiedAds/all/page/:page' , (req, res) => {
    serverRender.serverRenderPage(
        {
            type: "classifiedAds", 
            page: req.params.page
        }
    )
    .then((initialData) => {
        res.render('index', {
            type: "classifiedAds",
            initialCat: req.params.cat,
            initialData,
            cls_cats,
            com_cats,
            slider_ads,
            aside_right
        });
    })
    .catch((error) => 
        console.error(error));
});

server.get('/commercialAds/:cat?/:id?' , (req, res) => {
    let type = "commercialAds";
    let path = "";

    if (req.params.cat) {
        path = req.params.cat;
        if (req.params.id) {
            path = req.params.cat + '/' + req.params.id
        }
    }
    serverRender.serverRender({type, path})
        .then((initialData) => {
            res.render('index', {
                type,
                initialCat: req.params.cat,
                initialData,
                cls_cats,
                com_cats,
                slider_ads,
                aside_right
            });
        })
        .catch((error) => 
        console.error(error));
});

server.get('/copyright', (req, res) => {
    res.render('copyright');
})

server.get('/privacy', (req, res) => {
    res.render('privacy');
})

server.get('/terms', (req, res) => {
    res.render('terms');
})

// server.use(function (err, req, res, next) {
//     console.error(err.stack);
//     res.status(404).send('Something broke!');
// });



server.listen(config.port, config.host, () => {
    console.info('Node server is running on port', config.port);
});