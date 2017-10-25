import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';
import axios from 'axios';
import config from './config';

const serverRender = ({type, path, query}) => (
    axios.get(`${config.serverUrl}/api/${type}/${path}${query}`)
        .then(res => {
            return res.data;
        })
        .catch((err) => console.error(err))
)

export default serverRender;