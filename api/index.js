import express from 'express';
import data from '../src/testData';

const router = express.Router();

router.get('/classifiedAds', (req, res) => {
    res.send({ classifiedAds: data.classifiedAds });
});

export default router;