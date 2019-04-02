
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Review = require("../../models/Review");
const validateReviewInput = require("../../validation/reviews");

router.get('/', (req, res) => {
    Review.find()
        .sort({ date: -1 })
        .then(reviews => res.json(reviews))
        .catch(err =>
            res.status(404).json({ noreviewsfound: "No reviews found" })
        );
});

router.get('/accomodations/:accomodation_id', (req, res) => {
    Review.find({ accomodation: req.params.accomodation_id })
        .then(reviews => res.json(reviews))
        .catch(err =>
            res
                .status(404)
                .json({ noreviewsfound: "No reviews found from that shop" })
        );
});

router.get('/:id', (req, res) => {
    Review.findById(req.params.id)
        .then(review => res.json(review))
        .catch(err =>
            res
                .status(404)
                .json({ noreviewsfound: "No review found with that ID" })
        );
});


router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateReviewInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newReview = new Review({
            // title: req.body.title,
            comment: req.body.comment,
            // link: req.body.link,
            rating: req.body.rating,
            // photoURL: req.body.photoURL,
            accomodation: req.accomodation.id
        });

        newReview.save().then(review => res.json(review));
    }
);

module.exports = router;