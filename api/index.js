import express from 'express';
import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from '../config';
var moment = require('moment');

let mdb;
let listLength = 10;
let lastUpdate;
MongoClient.connect(config.mongodbUri, (err, db) => {
    
    assert.equal(null,err);

    mdb = db;
})

const router = express.Router();

router.use((req, res, next) => {
    mdb.collection('ads').findOne({ lastUpdate: { $exists: true }}, (err, lu) => {
        assert.equal(null, err);
        // then use the last update date to fetch the ads accordingly
        lastUpdate = lu.lastUpdate;
        console.log('loocking for ads on lu.lastUpdate: ', lastUpdate);
        
        next();
    });
})

router.get('/get_category_titles', (req, res) => {
    mdb.collection('categories').find({}, (err, cats) => {
        
    })
})

router.get('/get_maintenance_list', (req, res) => {
    mdb.collection('ads')
        .find({
            uploaded_manually: true
        })
        .toArray((err, manuallyUploads) => {
            console.log('manuallyuploads: ', manuallyUploads);
            assert.equal(null, err);
            res.send(manuallyUploads);
        });
})


router.get('/classifiedAds', (req, res) => {
    mdb.collection('ads')
    .find({
        date_inserted: lastUpdate,
        type: 'classified'
    })
    .toArray((err, ads) => {
        assert.equal(null, err);
        res.send(ads);
    });
    
})

router.get('/classifiedAds/all/page/:page', (req, res) => {
    mdb.collection('ads')
    .find({
        date_inserted: lastUpdate,
        type: 'classified'
    })
    .skip( (req.params.page-1) * listLength )
    .limit(listLength)
    .toArray((err, ads) => {
        assert.equal(null, err);
        res.send(ads);
    });
})

router.get('/classifiedAds/:class', (req, res) => {
    if (req.query.id) {
        mdb.collection('ads')
            .find(
                {
                    ad_id: req.query.id,
                    type: "classified",
                    date_inserted: lastUpdate, 
                    cat: req.params.class
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
                    ad_id: req.query.id,
                    type: "classified",
                    date_inserted: lastUpdate, 
                    cat: req.params.class
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
                    type: "classified",
                    date_inserted: lastUpdate, 
                    cat: req.params.class
                }
            )
            .toArray((err, docs) => {
                assert.equal(null, err);
                res.send(docs);
            });
    }
    

})

router.get('/commercialAds', (req, res) => {
    res.send({ commercialAds: [] });
})

export default router;