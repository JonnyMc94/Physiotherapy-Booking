const express = require('express');
const router = express.Router();
const Client = require('../models/Clients');
const Therapist = require('../models/Physios')


// This endpoint gets all therapists from the Therapists collection
router.get('/', async (req, res) => {
  try {
    const products = await Therapist.find();
    res.json(products);
    console.log(products);
  } catch (err) {
    res.json({ message: err })
    console.log(err);
  }
});

// This endpoint gets a therapist by id
router.get('/:id', async (req, res) => {
  try {
    const product = await Therapist.findById(req.params.id);
    res.status(200).json(product);
    console.log(product);
  } catch (err) {
    console.log(err);
  }
});

// This endpoint adds a therapist to the collection
router.post('/addTherapist', async (req, res) => {
  console.log(req.body);

  // Initialising variables from request body
  let {
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
  } = req.body;

  const therapist = new Therapist({
    
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
  })
  try {
    const savedTherapist = await therapist.save();
    res.status(200).json(savedTherapist);
    console.log(`${savedTherapist.first_name} ${savedTherapist.surname} has been added to the therapist database`);
  } catch (err) {
    res.json({ message: err })
    console.log(err);
  }
});


// This endpoint deletes a therapist by id from the Therapists collection
router.delete('/deleteTherapist/:id', async (req, res) => {
  try {
    const deletedTherapist = await Therapist.remove({ _id: req.params.id });
    res.status(200).json(deletedTherapist);
    console.log("Product information successfully deleted");
  } catch (err) {
    console.log(err);
  }
  
});


// This endpoint updates a therapist in the collection by id
router.patch('/updateTherapist/:id', async (req, res) => {
  let therapistID = req.params.id;
  try {
    const updatedTherapist = await Therapist.updateOne({ _id: therapistID },
      {
        $set:
        {
          title: req.body.title,
          first_name: req.body.first_name,
          surname: req.body.surname,
          mobile_number: req.body.mobile_number,
          email_address: req.body.email_address, 
          addressline1: req.body.addressline1,
          addressline2: req.body.addressline2,
          town: req.body.town,
          county: req.body.county,
          eircode: req.body.eircode,
        }
      });
    console.log(`Therapist information updated successfully ${updatedTherapist}`);
    res.status(200).json(updatedTherapist);
  } catch (err) {
    console.log(err);
  }
})


module.exports = router;