const mongoose = require('mongoose');

const PhysioSchema = mongoose.Schema({
  title: { type: String, required : true },
  first_name: { type: String, required : true },
  surname: { type: String, required: true },
  mobile_number: { type: String, required: true },
  home_number: { type: String, required: true },
  email_address: { type: String, required : true },
  addressline1: { type: String, required: true },
  addressline2: { type: String },
  town: { type: String, required: true},
  county: { type: String, required: true },
  eircode: { type: String },
})

module.exports = mongoose.model('Physios', PhysioSchema);