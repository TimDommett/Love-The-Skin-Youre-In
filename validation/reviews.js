
const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateReviewInput(data) {
    let errors = {};

    data.text = validText(data.comment) ? data.comment : '';

    // if (!Validator.isLength(data.text, { min: 5, max: 140 })) {
    //     errors.text = 'Tweet must be between 5 and 140 characters';
    // }

    if (Validator.isEmpty(data.comment)) {
        errors.comment = 'Text field is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};