import express from 'express';
import data from '../src/testData';
import { findObjsByClass, findAdById } from "./extractClass";

const router = express.Router();

router.get('/classifiedAds', (req, res) => {
    res.send({ classifiedAds: data.classifiedAds });
});

router.get('/classifiedAds/:class/:id?', (req, res) => {
    if (req.params.id) {
        let itemInCat = findAdById(req.params.id, data.classifiedAds);
        res.send(itemInCat);
    } else {
        let listInCat = findObjsByClass(req.params.class, data.classifiedAds);
        res.send(listInCat);
    }
});

export default router;