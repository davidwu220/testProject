import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';
import axios from 'axios';
import config from './config';

const serverRender = () => (
    axios.get(`${config.serverUrl}/api/classifiedAds`)
        .then(res => {
            return ReactDOMServer.renderToString(
                <App initialData={res.data} />
            );
        })
        .catch((err) => console.error(err))
)

export default serverRender;