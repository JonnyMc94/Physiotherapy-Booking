const express = require('express');
const router = express.Router();
const Client = require('../models/Clients');

// This endpoint returns all client details from the collection
router.get('/', async (req, res) => {
  
  try {
    const client = await Client.find();
    res.json(client);
    console.log(client);
  } catch (err) {
    console.log(err);
  }
  
});

// This endpoint returns a client by id
router.get('/:id', async (req, res) => {
  
  try {
    const client = await Client.findById(req.params.id);
    res.json(client);
    console.log(client);
  } catch (err) {
    console.log(err);
  }
  
});

// This endpoint adds a new client to the collection
router.post('/addClient', async (req, res) => {
  // console.log(req.body);

  const {
    title,
    first_name,
    surname,
    mobile_number,
    home_number,
    email_address,
    addressline1,
    addressline2,
    town,
    county,
    eircode,
    dob,
    guardian_name,
    message_permission,
    doctor_name,
    referred_by,
  } = req.body;

  console.log(req.body)
  
  const client = new Client({
    title,
    first_name,
    surname,
    dob,
    doctor_name,
    mobile_number,
    home_number,
    email_address, 
    addressline1,
    addressline2,
    town,
    county,
    eircode,
    guardian_name,
    message_permission,
    referred_by,
  })
  try {
    const savedClient = await client.save();
    res.status(200).json(savedClient);
    console.log("Client information added" + savedClient);
  } catch (err) {
    res.json({ message: err })
    console.log(err);
  }
  
  
})

// This endpoint deletes a client by id from the collection
router.delete('/deleteClient/:id', async (req, res) => {
  try {
    const deletedClient = await Client.remove({
      _id: req.params.id
    });
    res.status(200).json(deletedClient);
    console.log("Client information successfully deleted");
  } catch (err) {
    console.log(err);
  }
  
});

// updates a client by id
router.patch('/updateClient/:id', async (req, res) => {

  
  let id = req.params.id;
  console.log(id);
  try {
    const updatedclient = await Client.updateOne({
      _id: id },
      {
        $set: {
          'title': req.body.title,
          'first_name': req.body.first_name,
          'mobile_number': req.body.mobile_number,
          'email_address': req.body.email_address,
          'addressline1': req.body.addressline1, 
          'addressline2': req.body.addressline2,
          'town': req.body.town,
          'county': req.body.county,
          'eircode': req.body.eircode
          }
        }
      );
    console.log(`client ${id}'s information has been updated successfully`);
    res.status(200).json(updatedclient);
  } catch (err) {
    console.log(err);
  }
})



module.exports = router;