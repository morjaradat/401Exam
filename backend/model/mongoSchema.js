'use strict'
const mongoose = require('mongoose');

const charactersSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true
  },
  slug: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true
  },
  gender: String,
  img: String,
  psiPowers: [{ img: String, name: String }]
})
const charactersModel = mongoose.model('Characters', charactersSchema)

module.exports = charactersModel;