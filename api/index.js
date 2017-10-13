import express from 'express';
import data from '../src/testData';
import { findObjsByClass } from "./extractClass";

const router = express.Router();

router.get('/classifiedAds', (req, res) => {
    res.send({ classifiedAds: data.classifiedAds });
});

router.get('/classifiedAds/:class', (req, res) => {
    let listInCat = findObjsByClass(req.params.class, data.classifiedAds);
    res.send(listInCat);
});

export default router;