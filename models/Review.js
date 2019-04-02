
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    accomodation: {
        type: Schema.Types.ObjectId,
        ref: "accomodations"
    },
    comment: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Review = mongoose.model('review', ReviewSchema);