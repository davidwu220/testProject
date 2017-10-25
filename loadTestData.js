import { MongoClient } from 'mongodb';
import assert from 'assert';
import fs from 'fs';

import config from './config';


let formatDate = (date) => {
    let d = new Date(date),
    month = (d.getMonth() + 1).toString(),
    day = d.getDate().toString(),
    year = d.getFullYear().toString();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return year+month+day;
}

let today = formatDate(Date.now());

MongoClient.connect(config.mongodbUri, (err, db) => {
    assert.equal(null, err);

    let buf=fs.readFileSync('./public/ads/' + today + '/webclass.txt');
    let webclassArr;
    let cls;
    let textBuf;
    let textArray;
    let title;
    let descArray;
  
    let insertPromist = new Promise ((resolve, reject) => {
        buf.toString().split("\n").forEach((line) => {
            webclassArr = line.split(/^"|"$|","/).filter(text => text != '');

            if (webclassArr[0]) {
                if (webclassArr[2] == "101" || webclassArr[2] == "102") {
                    cls = "101_102";
                } else if (webclassArr[2] == "103" || webclassArr[2] == "104") {
                    cls = "103_104";
                } else if (webclassArr[2] == "802" || webclassArr[2] == "803") {
                    cls = "802_803";
                } else {
                    cls = webclassArr[2];
                }

                textBuf = fs.readFileSync("./public/ads/" + today + "/" + webclassArr[0] + ".txt");
                textArray = textBuf.toString().split(/\r|\n/).filter(text => text != '');
                if (textArray[0] != '') {
                    title = textArray[0];
                    descArray = textArray.slice(1);
                } else {
                    title = textArray[1];
                    descArray = textArray.slice(2);
                }
                db.collection('ads').insertOne({
                    "id": webclassArr[0],
                    "date": today,
                    "title": title,
                    "type": "classifiedAds",
                    "class": cls,
                    "image": "/ads/" + today + "/" + webclassArr[0] + ".jpg",
                    "description": descArray,
                    "tag": ""
                });
            }

            resolve("Data inserted!");

        });
    });

    insertPromist.then((success) => {
        console.log(success);
        db.close();
    });
    
});

