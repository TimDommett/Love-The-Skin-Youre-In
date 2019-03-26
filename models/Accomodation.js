
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccomodationSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Accomodation = mongoose.model('accomodation', AccomodationSchema);