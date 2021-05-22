const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({

  title: { type: String, required : true },
  first_name: { type: String, required : true },
  surname: { type: String, required: true },
  dob: { type: String, required: true },
  doctor_name: { type: String, required: true },
  mobile_number: { type: String, required: true },
  home_number: { type: String, required: true },
  email_address: { type: String, required : true },
  addressline1: { type: String, required: true },
  addressline2: { type: String },
  town: { type: String, required: true},
  county: { type: String, required: true },
  eircode: { type: String },
  guardian_name: { type: String, required: true },
  message_permission: { type: String, required: true },
  referred_by: { type: String, required: true },
  date_registered: { type: Date, default: Date.now }

})

module.exports = mongoose.model('Clients', ClientSchema);