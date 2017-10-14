import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';
import axios from 'axios';
import config from './config';

const serverRender = (path) => (
    axios.get(`${config.serverUrl}/api/classifiedAds/${path}`)
        .then(res => {
            return { 
                initialMarkup: ReactDOMServer.renderToString( <App initialData={res.data} /> ),
                initialData: res.data
            };
        })
        .catch((err) => {})
)

export default serverRender;