const mongoose = require('mongoose');
const Clients = require('./Clients');
const Physios = require('./Physios');

const sessionsSchema = mongoose.Schema({
  client_id: { type: mongoose.Schema.Types.ObjectId, ref: Clients },
  physio_id: { type: mongoose.Schema.Types.ObjectId, ref: Physios },
  session_date_time: { type: String, required: true},
  fee: { type: Number, required: true },
  session_duration: { type: String, required: true },
  session_type: { type: String, required: true },
  session_notes: { type: String, required: true }
})

module.exports = mongoose.model('Sessions', sessionsSchema);