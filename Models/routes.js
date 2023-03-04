'use strict';

const mongoose = require('mongoose');

const beerSchema = new mongoose.Schema({
    yelpData: { type: Array, require: true},
    directions: { type: Array, require: true},
});

const BeerModel = mongoose.model('bikes-brew', beerSchema);

module.exports = BeerModel;