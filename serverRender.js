import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';
import axios from 'axios';
import config from './config';

export const serverRender = ({type, path}) => (
    axios.get(`${config.serverUrl}/api/${type}/${path}`)
        .then(res => {
            return res.data;
        })
        .catch((err) => console.error(err))
)

export const serverRenderPage = ({type, page}) => (
    axios.get(`${config.serverUrl}/api/${type}/all/page/${page}`)
        .then(res => {
            return res.data;
        })
        .catch((err) => console.error(err))
)

export const serverRenderSearch = ({type, path, query}) => (
    axios.get(`${config.serverUrl}/api/${type}/${path}${query}`)
        .then(res => {
            return res.data;
        })
        .catch((err) => console.error(err))
)