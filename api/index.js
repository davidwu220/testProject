import express from 'express';
import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from '../config';

import data from '../src/testData';

let dayWithOffset = (offset) => {
    let d = new Date();
    d.setHours(d.getHours()+offset);
    return d;
};

let formatDate = (date) => {
    let d = new Date(date),
    month = (d.getMonth() + 1).toString(),
    day = d.getDate().toString(),
    year = d.getFullYear().toString();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return year+month+day;
}
console.log("date with offset: ", formatDate(dayWithOffset(-4)));

let mdb;
MongoClient.connect(config.mongodbUri, (err, db) => {
    assert.equal(null,err);

    mdb = db;
})

const router = express.Router();

router.get('/classifiedAds', (req, res) => {
    //res.send({ classifiedAds: data.classifiedAds });
    // finds documents with 4hr time offset
    mdb.collection('ads')
        .find(
            {
                "type": "classifiedAds",
                "date": formatDate(dayWithOffset(-4))
            }
        )
        .toArray((err, docs) => {
            assert.equal(null, err);
            res.send(docs);
    });
});

router.get('/classifiedAds/:class', (req, res) => {

    if (req.query.id) {
        mdb.collection('ads')
            .find(
                {
                    "id": req.query.id,
                    "type": "classifiedAds",
                    "date": formatDate(dayWithOffset(-4)), 
                    "class": req.params.class
                }
            )
            .toArray((err, docs) => {
                assert.equal(null, err);
                res.send(docs);
            });
    } else if (req.query.page) {
        // need fixing
        mdb.collection('ads')
            .find(
                {
                    "type": "classifiedAds",
                    "date": formatDate(dayWithOffset(-4)), 
                    "class": req.params.class
                }
            )
            .toArray((err, docs) => {
                assert.equal(null, err);
                res.send(docs);
            });
    } else {
        mdb.collection('ads')
            .find(
                {
                    "type": "classifiedAds",
                    "date": formatDate(dayWithOffset(-4)), 
                    "class": req.params.class
                }
            )
            .toArray((err, docs) => {
                assert.equal(null, err);
                res.send(docs);
            });
    }

});

router.get('/commercialAds', (req, res) => {
    res.send({ commercialAds: data.commercialAds || [] });
});

export default router;