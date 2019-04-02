
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Accomodation = require("../../models/Accomodation");
const validateAccomodationInput = require("../../validation/accomodations");

router.get('/', (req, res) => {
    Accomodation.find()
      .sort({ date: -1 })
      .then(accomodations => res.json(accomodations))
      .catch(err =>
        res.status(404).json({ noaccomodationsfound: "No accomodations found" })
      );
});

router.get('/user/:user_id', (req, res) => {
    Accomodation.find({ user: req.params.user_id })
      .then(accomodations => res.json(accomodations))
      .catch(err =>
        res
          .status(404)
          .json({ noaccomodationsfound: "No accomodations found from that user" })
      );
});

router.get('/:id', (req, res) => {
    Accomodation.findById(req.params.id)
      .then(accomodation => res.json(accomodation))
      .catch(err =>
        res
          .status(404)
          .json({ noaccomodationsfound: "No accomodation found with that ID" })
      );
});


router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateAccomodationInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newAccomodation = new Accomodation({
          title: req.body.title,
          text: req.body.text,
          link: req.body.link,
          price: req.body.price,
          photoURL: req.body.photoURL,
          lat: req.body.lat,
          lng: req.body.lng,
          user: req.user.id
        });

        newAccomodation.save().then(accomodation => res.json(accomodation));
    }
);

module.exports = router;