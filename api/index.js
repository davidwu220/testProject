import express from 'express';
import data from '../src/testData';

function compareClass(ad) {
    return ad.class === this;
}

function compareid(ad) {
    return ad.id === this;
}

const findObjsByClass = (cls, arrayOfObjs) => {
    return arrayOfObjs.filter(compareClass, cls);
}

const findAdById = (id, arrayOfObjs) => {
    return arrayOfObjs.find(compareid, id);
}

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

router.get('/commercialAds', (req, res) => {
    res.send({ commercialAds: data.commercialAds || [] });
});

export default router;