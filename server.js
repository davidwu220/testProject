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

server.get('/', (req, res) => {
    serverRender()
        .then(content => {
            res.render('index', {
                content
            });
        })
        .catch(console.error);
});

server.use('/api', apiRouter);

server.use(express.static('public'));

server.listen(config.port, config.host, () => {
    console.info('Node server is running on port', config.port);
});