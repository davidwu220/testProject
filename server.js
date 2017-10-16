import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import express from 'express';

import config from './config';
import apiRouter from './api';
import serverRender from './serverRender';

const server = express();

server.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');

server.get('/' , (req, res) => {
    // TODO: Put classifiedAds for now before figuring out more data
    let type = "classifiedAds";

    let initialCat;
    serverRender({type, path})
        .then((initialData) => {
            res.render('index', {
                type: "home",
                initialCat,
                initialData
            });
        })
        .catch((error) => 
        console.error(error));
});

server.get('/classifiedAds/:cat?/:id?' , (req, res) => {
    // TODO: might need to validate category in the future
    let type = "classifiedAds";
    let path = "";
    
    if (req.params.cat) {
        path = req.params.cat;
        if (req.params.id) {
            path = req.params.cat + '/' + req.params.id
        }
    }
    serverRender({type, path})
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

server.get('/commercialAds/:cat?/:id?' , (req, res) => {
    // TODO: might need to validate category in the future
    let type = "commercialAds";
    let path = "";

    if (req.params.cat) {
        path = req.params.cat;
        if (req.params.id) {
            path = req.params.cat + '/' + req.params.id
        }
    }
    serverRender({type, path})
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

server.use('/api', apiRouter);

server.use(express.static('public'));

server.listen(config.port, config.host, () => {
    console.info('Node server is running on port', config.port);
});