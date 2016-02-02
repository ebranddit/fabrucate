'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SectionSchema = new Schema({
  title: String,
  type: String,
  layout: {
    height: Number, //row span
    width: Number //column span
  },
  content: String,
});

var PageSchema = new Schema({
  site: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  index: {
    type: Number,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  layout: String,
  phase: {
    type: String,
    default: 'unpublished'
  },
  sections: [SectionSchema]
});

module.exports = mongoose.model('Page', PageSchema);
