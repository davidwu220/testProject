import config from './config';
import apiRouter from './api';

import express from 'express';

const server = express();

server.set('view engine', 'ejs');

server.get('/', function (req, res) {
    res.render('index', {
        content: '...'
      });
});

server.use('/api', apiRouter);

server.use(express.static('public'));

server.listen(config.port, () => {
    console.info('Node server is running on port', config.port);
});