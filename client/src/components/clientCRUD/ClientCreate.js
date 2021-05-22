import React, { useState } from 'react';
import { Container, Col, Row, Jumbotron, Form, Button } from "react-bootstrap";

const ClientCreate = () => {

  // Using the useState Hook to initialise state variables
  const [title, setTitle ] = useState(" ");
  const [fName, setFName] = useState(" ");
  const [surname, setSurname] = useState(" ")
  const [dob, setDOB ] = useState(" ")
  const [email, setEmail ] = useState(" ")
  const [mobile, setMobile] = useState(" ")
  const [homeNum, setHomeNum ] = useState(" ")
  const [homeAdd1, setHomeAdd1 ] = useState(" ")
  const [homeAdd2, setHomeAdd2 ] = useState(" ")
  const [hometown, setHometown] = useState(" ")
  const [homeCity, setHomeCity] = useState(" ")
  const [eircode, setEircode] = useState(" ")
  const [guardian, setGuardian] = useState(" ")
  const [communication, setCommunication] = useState(" ")
  const [doctor, setDoctor ] = useState(" ")
  const [referee, setReferee] = useState(" ")

  // This function handles the form submit
  const handleSubmit = (e) => {
   
    // Initialising options, ody and headers for POST request to create a new client
    const options ={
          method: 'POST',
          headers:{
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title: title,
            first_name: fName,
            surname: surname,
            dob: dob,
            doctor_name: doctor,
            mobile_number: mobile,
            home_number: homeNum,
            email_address: email, 
            addressline1: homeAdd1,
            addressline2: homeAdd2,
            town: hometown,
            county: homeCity,
            eircode: eircode,
            guardian_name: guardian,
            message_permission: communication,
            referred_by: referee
          })
        }
        fetch(`http://localhost:8000/clients/addClient`, options)
          .then(res=> res.json())
          .then(data => console.log(data, "Successfuy registered new client"))
          .catch(err => console.log(err, "Failed to register client")); 
    
  }
  
  return (

    //Create client form 
     <Container className="productForm">
        <Row>
          <Col md={{ span: 8, offset: 2}}>
            <Jumbotron>
              <h1>Client Registration Form</h1>
                <p>
                 Please fill out your details here to register a new client. Fields marked with an asterix are essential
                </p>
               <Form inline>
                  <Form.Group className="form-element">
                  
                    <Form.Label className="form-title" column="lg" lg={2}>*Title</Form.Label>
                <Form.Control as="select" className="mb-2" required onChange={e => setTitle(e.target.value)}>
                        <option>Choose...</option>
                        <option value="Mr">Mr</option>
                        <option value="Ms">Ms</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Mx">Mx</option>
                        <option value="Dr">Dr</option>
                        <option value="Other">Other...</option>
                      </Form.Control>
                    <Form.Label className="form-element">*Name</Form.Label>
                   <Row >
                    <Col>
                    <Form.Control placeholder="First name..."
                      required
                      onChange={e => setFName(e.target.value)} />
                    </Col>
                    <Col>
                    <Form.Control placeholder="Last name..."
                      required
                      onChange={e => setSurname(e.target.value)}/>
                    </Col>
                  </Row>
              </Form.Group>
              <Row className="form-element">
                <Col>
                <Form.Group as={Col} controlId="formGridDOB" className="form-element">
                  <Form.Label>*Date of Birth</Form.Label>
                    <Form.Control
                      type="mobile"
                    placeholder="Enter your date of birth here..."
                      required
                      onChange={e => setDOB(e.target.value)}
                    />
                  </Form.Group>
                  </Col>
                <Col>
                  <Form.Group as={Col} controlId="formGridEmail" className="form-element">
                    <Form.Label>*Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email..."
                      required
                      onChange={e => setEmail(e.target.value)}/>
                  </Form.Group>
                  </Col>
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
                    <Form.Control type="email" placeholder="Enter home phone number here..."
                      onChange={e => setHomeNum(e.target.value)}
                      required />
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
                    <Form.Control type="address2" placeholder="Enter the second line of your home address here..."
                      onChange={e => setHomeAdd2(e.target.value)}
                      required />
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
                    <Form.Control type="email" placeholder="Enter your home city/county here..."
                      onChange={e => setHomeCity(e.target.value)}
                      required />
                  </Form.Group>
                </Col>
              </Row>
                <Form.Group as={Col} controlId="formGridCityZip" className="form-element">
                  <Form.Label>Home Eircode</Form.Label>
                <Form.Control placeholder="Enter the zipcode for your home address here..."
                onChange={e => setEircode(e.target.value)}/>
                </Form.Group>
               
              <Row className="form-element first-row">
                <Form.Group as={Col} controlId="formGridShipTown" className="form-element">
                  <Form.Label>Guardian Name</Form.Label>
                    <Form.Control
                      type="guardian"
                    placeholder="Enter guardian name here..."
                    onChange={e => setGuardian(e.target.value)}
                    required
                    />
                </Form.Group>
              </Row>
               <Row className="form-element">
                <Form.Group as={Col} controlId="formGridPermission" className="form-element">
                  <Form.Label>*Communication agreement</Form.Label>
                  <Form.Control type="permission" placeholder="Type Y to agree, N to disagree"
                    onChange={e => setCommunication(e.target.value)}
                    required />
                  <Form.Text className="text-muted">
                    Replying Y will opt you in to recieve messages to your home/mobile numbers and email address about session updates and more general information regarding our clinic 
                  </Form.Text>
                </Form.Group>
              </Row>
              <Row className="form-element">
                <Col>
                  <Form.Group as={Col} controlId="formGridDoctor" className="form-element">
                    <Form.Label>*Doctor's Name</Form.Label>
                      <Form.Control
                        type="doctor"
                      placeholder="Enter your doctor's name here..."
                      onChange={e => setDoctor(e.target.value)}
                      required
                      />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group as={Col} controlId="formGridReferee" className="form-element">
                    <Form.Label>*Referee</Form.Label>
                    <Form.Control type="reference" placeholder="Enter the name of the person who referred you here..."
                      onChange={e => setReferee(e.target.value)}
                      required />
                  </Form.Group>
                </Col>
              </Row>
              
              <Button variant="primary" className="form-button" onClick={ handleSubmit }>Submit</Button>{' '}
                </Form>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
  );
};

export default ClientCreate;