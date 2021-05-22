const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Session = require('../models/Sessions');
const Therapist = require('../models/Physios');
const Client = require('../models/Clients');

// This endpoint adds an order to the collection
router.post("/addSession", async (req, res) => {

  const session = new Session({
    client_id: req.body.client_id,
    physio_id: req.body.physio_id,
    session_date_time: req.body.session_date_time,
    fee: req.body.fee,
    session_duration: req.body.session_duration, 
    session_type: req.body.session_type,
    session_notes: req.body.session_notes,

  })

  try {
    const newSession = await session.save();
    res.json(newSession)
  } catch(error) {
    console.log(error)
    res.json({ message: error });
  }

});

// This endpoint gets all sessions from the collection
router.get("/getAllSessions", async function(req, res){
  try {
    const session = await Session.find();
    res.json(session);
    console.log(session);
  } catch (err) {
    console.log(err);
  }
})

// This endpoint gets a session from the collection by id
router.get("/:id", async function(req, res){
  try {
    const order = await Session.findById(req.params.id);
    res.json(order);
    console.log(order);
  } catch (err) {
    console.log(err);
  }
})

// This endpoint deletes a session from the collection by id
router.delete('/deleteOrder/:id', async (req, res) => {
  try {
    const deletedOrder = await Session.remove({ _id: req.params.id });
    res.status(200).json(deletedOrder);
    console.log("Product information successfully deleted");
  } catch (err) {
    console.log(err);
  }
  
})

// This endpoint updates a session by id
router.patch('/updateSession/:id', async (req, res) => {

  //const client = await client.findById(req.params.id)
  let id = req.params.id;
  console.log(id);
  try {
    const updatedsession= await Session.updateOne({
      _id: id },
      {
        $set: {
          'session_date_time': req.body.session_date_time,
          'fee': req.body.fee,
          'session_duration': req.body.session_duration, 
          'session_type': req.body.session_type,
          'session_notes': req.body.session_notes,
          }
        }
      );
    console.log(`Session ${id} has been updated successfully`);
    res.status(200).json(updatedsession);
  } catch (err) {
    console.log(err);
  }
})
module.exports = router;