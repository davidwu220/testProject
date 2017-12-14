var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AdSchema = new Schema({
    // customer information
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    },
    // ad information
    uploaded_manually: {
        type: Boolean
    },
    ad_id: {
        type: String,
        required: true,
        max: 100
    },
    date_inserted: {
        type: String
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
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
        type: String
    },
    yt_short_link: {
        type: String
    },
    yt_full_link: {
        type: String
    },
    start_date: {
        type: String
    },
    end_date: {
        type: String
    },
    media_format: {
        type: String
    },
    location: {
        type: String,
        enum: [
            'aside-right',
            'aside-left',
            'classified',
            'commercial',
            'slider'
        ],
        required: true,
    },
    tags: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Category'
        }
    ]
}, { strict: false });

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