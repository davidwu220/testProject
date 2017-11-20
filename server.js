import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import express from 'express';
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('express-flash-2');
var multer = require('multer');

import config from './config';
import apiRouter from './api';
import * as serverRender from './serverRender';
var maintenance_controller = require('./controllers/maintenanceController');

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
  })
var upload = multer({ storage: storageEngine });

const server = express();

server.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
}));

// view engine setup
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'pug');
//server.set('view engine', 'ejs');

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

server.get('/' , (req, res) => {
    res.render('index', {
        type: "home",
        initialCat: null,
        initialData: []
    });

});

server.get('/maintenance', maintenance_controller.maintenance_list);
// , (req,res) => {
//     serverRender.serverRenderMaintenanceList().then((ads) => {
//         console.log('got ads: ', ads);
//         res.render('maintenance', {
//             title: 'Maintenance',
//             ads
//         });
//     });
// });

server.get('/maintenance/create', maintenance_controller.maintenance_create_get);
server.post('/maintenance/create', upload.single("image"), maintenance_controller.maintenance_create_post);

server.get('/maintenance/:id/edit', maintenance_controller.maintenance_edit_get);
server.post('/maintenance/:id/edit', maintenance_controller.maintenance_edit_post);

server.get('/maintenance/:id/delete', maintenance_controller.maintenance_delete_get);
server.post('/maintenance/:id/delete', maintenance_controller.maintenance_delete_post);

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
            initialData
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
            initialData
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
                initialData
            });
        })
        .catch((error) => 
        console.error(error));
});

// server.use(function (err, req, res, next) {
//     console.error(err.stack);
//     res.status(404).send('Something broke!');
// });



server.listen(config.port, config.host, () => {
    console.info('Node server is running on port', config.port);
});