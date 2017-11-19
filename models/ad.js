var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AdSchema = new Schema({
    // customer information
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    },
    // ad information
    ad_id: {
        type: String,
        required: true,
        max: 100
    },
    date_inserted: {
        type: String
    },
    cat:{
        type: String
    },
    cat_title_cn: {
        type: String
    },
    cat_cn:{
        type: String
    },
    type:{
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: Array
    },
    ad_link: {
        type: String
    },
    image: {
        type: String,
        required: true
    },
    yt_link: {
        type: String
    },
    start_date: {
        type: String
    },
    end_date: {
        type: String
    },
    locations: [
        {
            type: String,
            enum: [
                'aside-right',
                'aside-left',
                'classified',
                'commercial',
                'slider'
            ],
            required: true,
        }
    ],
    tags: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Category'
        }
    ]
});

// Virtual for Ad's URL
AdSchema
    .virtual('url')
    .get(function () {
        return '/' + this.type + '/' + this.category + '/' + this._id;
    });
AdSchema
    .virtual('customerName')
    .get(function () {
        return  this.first_name + ' ' + this.last_name;
    });

//Export model
module.exports = mongoose.model('Ad', AdSchema);