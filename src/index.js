import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import App from "./components/App";

axios.get('/api/classifiedAds')
    .then(res => {
        ReactDOM.render(
            <App initialData={res.data} />, 
            document.getElementById('root')
        );
    })
    .catch(console.error);

