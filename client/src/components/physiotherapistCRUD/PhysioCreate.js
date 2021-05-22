import React, { useState } from 'react';
import { Container, Col, Row, Jumbotron, Form, Button } from "react-bootstrap";

const PhysioCreate = () => {

  //USing the useState Hook to initialise state variables
  const [title, setTitle ] = useState(" ");
  const [fName, setFName] = useState(" ");
  const [surname, setSurname] = useState(" ")
  const [email, setEmail ] = useState(" ")
  const [mobile, setMobile] = useState(" ")
  const [homeNum, setHomeNum ] = useState(" ")
  const [homeAdd1, setHomeAdd1 ] = useState(" ")
  const [homeAdd2, setHomeAdd2 ] = useState(" ")
  const [hometown, setHometown] = useState(" ")
  const [homeCity, setHomeCity] = useState(" ")
  const [eircode, setEircode] = useState(" ")

  // Function to handle form submit
  const handleSubmit = () => {

    //Intialising options and body for the POST request to create a new therapist 
    const options ={
          method: 'POST',
          headers:{
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title: title,
            first_name: fName,
            surname: surname,
            mobile_number: mobile,
            home_number: homeNum,
            email_address: email, 
            addressline1: homeAdd1,
            addressline2: homeAdd2,
            town: hometown,
            county: homeCity,
            eircode: eircode,
          })
        }
        fetch(`http://localhost:8000/therapists/addTherapist`, options)
          .then(res=> res.json())
          .then(data => console.log(data, "Successfuy registered new therapist"))
          .catch(err => console.log(err, "Failed to register therapist")); 
  }
  return (
    //Create therapist form 
    <Container className="productForm">
        <Row>
          <Col md={{ span: 8, offset: 2}}>
            <Jumbotron>
              <h1>Physiotherapist Form</h1>
                <p>
                 Please fill out your details here to register as a physiotherapist. Fields marked with an asterix are essential
                </p>
               <Form inline>
                  <Form.Group className="form-element">
                  
                    <Form.Label className="form-title" column="lg" lg={2}>Title</Form.Label>
                      <Form.Control as="select" className="mb-2" required onChange={e => setTitle(e.target.value)}>
                        <option>Choose...</option>
                        <option>Mr</option>
                        <option>Ms</option>
                        <option>Mrs</option>
                        <option>Mx</option>
                        <option>Dr</option>
                        <option>Other...</option>
                      </Form.Control>
                    <Form.Label className="form-element">*Name</Form.Label>
                   <Row >
                    <Col>
                    <Form.Control placeholder="First name..." required
                    onChange={e => setFName(e.target.value)}/>
                    </Col>
                    <Col>
                    <Form.Control placeholder="Last name..." required
                    onChange={e => setSurname(e.target.value)}/>
                    </Col>
                  </Row>
                  </Form.Group>
                <Row className="form-element">
                  <Form.Group as={Col} controlId="formGridEmail" className="form-element">
                    <Form.Label>*Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter Email..." required
                  onChange={e => setEmail(e.target.value)}/>
                  </Form.Group>
              </Row>
              <Row className="form-element">
                <Col>
                <Form.Group as={Col} controlId="formGridMob" className="form-element">
                  <Form.Label>*Mobile Number</Form.Label>
                    <Form.Control
                      type="mobile"
                      placeholder="Enter Phone Number..."
                      onChange={e => setMobile(e.target.value)}
                    required
                    />
                  </Form.Group>
                  </Col>
                <Col>
                  <Form.Group as={Col} controlId="formGridHomePhone" className="form-element">
                    <Form.Label>*Home Phone Number</Form.Label>
                    <Form.Control type="email" placeholder="Enter home phone number here..." required
                    onChange={e => setHomeNum(e.target.value)}/>
                  </Form.Group>
                  </Col>
              </Row>
              <Row className="first-row">
                <Col>
                  <Form.Group as={Col} controlId="formGridHomeAdd1" className="form-element">
                    <Form.Label>*Home Address</Form.Label>
                      <Form.Control
                        type="mobile"
                      placeholder="Enter the first line of your home address here.."
                      onChange={e => setHomeAdd1(e.target.value)}
                      required
                      />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group as={Col} controlId="formGridHomeAdd2" className="form-element">
                    <Form.Label>Home Address 2</Form.Label>
                    <Form.Control type="email" placeholder="Enter the second line of your home address here..." required
                    onChange={e => setHomeAdd2(e.target.value)}/>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="form-element">
                <Col>
                  <Form.Group as={Col} controlId="formGridHomeTown" className="form-element">
                    <Form.Label>*Home Town</Form.Label>
                      <Form.Control
                        type="mobile"
                      placeholder="Enter your home town here..."
                      onChange={e => setHometown(e.target.value)}
                      required
                      />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group as={Col} controlId="formGridHomeCounty" className="form-element">
                    <Form.Label>Home City or County</Form.Label>
                    <Form.Control type="email" placeholder="Enter your home city/county here..." required
                    onChange={e => setHomeCity(e.target.value)}/>
                  </Form.Group>
                </Col>
              </Row>
                <Form.Group as={Col} controlId="formGridCityZip" className="form-element">
                  <Form.Label>Home Eircode</Form.Label>
                <Form.Control placeholder="Enter the zipcode for your home address here..."
                onChange={e => setEircode(e.target.value)}/>
                </Form.Group>
              <Button variant="primary" className="form-button" onClick={handleSubmit }>Submit</Button>{' '}
                </Form>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
  );
}

export default PhysioCreate;