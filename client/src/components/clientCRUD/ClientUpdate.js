import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Jumbotron, Form, Button } from "react-bootstrap";

const ClientUpdate = (props) => {

  // Using the useState Hook to set state
  const [title, setTitle] = useState(" ");
  const [fName, setFName] = useState(" ");
  const [surname, setSurname] = useState(" ")
  const [email, setEmail] = useState(" ")
  const [mobile, setMobile] = useState(" ")
  const [homeAdd1, setHomeAdd1] = useState(" ")
  const [homeAdd2, setHomeAdd2] = useState(" ")
  const [hometown, setHometown] = useState(" ")
  const [homeCity, setHomeCity] = useState(" ")
  const [eircode, setEircode] = useState(" ")
  const [choice, setChoice] = useState("");
  const [clients, setClients] = useState([]);
  
  // Using the useEffect Hook to retreive client info when the component renders
  useEffect(() => {
    fetch('http://localhost:8000/clients/')
      .then(res => res.json())
      .then(clients => {
        setClients(clients)
      })
    
  }, [])


  const handleSubmit = (e) => {

    e.preventDefault();
 
    //Setting up parameters for the fetch request
    const options ={
          method: 'PATCH',
          headers:{
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title: title,
            first_name: fName,
            surname: surname,
            mobile_number: mobile,
            email_address: email, 
            addressline1: homeAdd1,
            addressline2: homeAdd2,
            town: hometown,
            county: homeCity,
            eircode: eircode,
            
          })
  }
        //Sends data to endpoint which updates client by id
        fetch(`http://localhost:8000/clients/updateClient/${choice}`, options)
          .then(res=> res.json())
          .then(data => console.log(data, "Successfuy updated client"))
          .catch(err => console.log(err, "Failed to update client")); 
    
 }
  return (
    
    //Update client form
       <Container className="productForm">
        <Row>
          <Col md={{ span: 8, offset: 2}}>
            <Jumbotron>
              <h1>Client Update Form</h1>
                <p>
                 Please select which client you wish to update and then fill outthe details. Fields marked with an asterix are essential
                </p>
               <Form>
              <Form.Group>
                <Form.Label className="form-element">Client</Form.Label>
                      <Form.Control as="select" required onChange={e => setChoice(e.target.value)}>
                  <option>Choose...</option>
                  {/* Client choices are mapped */}
                        {clients.map((c) => (
                          <option key={c._id} value={c._id}>
                            {c.first_name} {c.surname}
                          </option>
                        ))}
                      </Form.Control>
                    <Form.Label className="form-element">*Title</Form.Label>
                      <Form.Control as="select" required onChange={e => setTitle(e.target.value)}>
                        <option>Choose...</option>
                        <option value="Mr">Mr</option>
                        <option value="Ms">Ms</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Mx">Mx</option>
                        <option value="Dr">Dr</option>
                        <option value="Other">Other...</option>
                      </Form.Control>
                    <Form.Label className="form-element">*Name</Form.Label>
                   <Row>
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
                <Form.Row>
                 <Form.Group as={Col} controlId="formGridMob">
                  <Form.Label className="form-element">*Mobile Number</Form.Label>
                    <Form.Control
                      type="mobile"
                       placeholder="Enter Phone Number..."
                    required
                    onChange={e => setMobile(e.target.value)}
                    />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label className="form-element">*Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter Email..." required
                  onChange={e => setEmail(e.target.value)}/>
                    </Form.Group>
                </Form.Row>
                  <Form.Group controlId="formGridAddress1">
                    <Form.Label className="form-element">*Home Address</Form.Label>
                    <Form.Control placeholder="Enter updated home address line 1..." onChange={e => setHomeAdd1(e.target.value)}/>
                  </Form.Group>
                  <Form.Group controlId="formGridAddress2">
                    <Form.Label className="form-element">*Home Address 2</Form.Label>
                    <Form.Control placeholder="Enter updated home address line 2..." onChange={e => setHomeAdd2(e.target.value)}/>
                  </Form.Group>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridTown">
                      <Form.Label className="form-element">*Home Town</Form.Label>
                      <Form.Control placeholder="Enter updated home town..." onChange={e => setHometown(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label className="form-element">*Home City or County</Form.Label>
                  <Form.Control placeholder="Enter updated home city or county..."
                  onChange={e => setHomeCity(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEircode">
                      <Form.Label className="form-element">*Home Eircode</Form.Label>
                      <Form.Control placeholder="Enter updated home eircode.." onChange={e => setEircode(e.target.value)}/>
                    </Form.Group>
                  </Form.Row>
                  <Button variant="primary" className="form-button" onClick={ handleSubmit }>Update Client</Button>{' '}
                </Form>
              </Jumbotron>
            </Col>
          </Row>
    </Container>
  )
}

export default ClientUpdate;