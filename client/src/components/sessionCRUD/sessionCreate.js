import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'flatpickr/dist/themes/material_blue.css'
import { Container, Col, Row, Jumbotron, Form, Button } from "react-bootstrap";

const SessionCreate = () => {



  const [startDate, setStartDate] = useState(new Date())
  const [duration, setDuration] = useState(" ");
  const [dateTime, setDateTime] = useState(" ");
  const [fee, setFee] = useState(0);
  const [sessionType, setSessionType] = useState(" ");
  const [sessionNotes, setSessionNotes] = useState(" ");
  const [therapistChoice, setTherapistChoice] = useState("");
  const [clientChoice, setClientChoice] = useState("");
 
  const [clients, setClients] = useState([]);
  const [therapists, setTherapists] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:8000/clients/')
      .then(res => res.json())
      .then(clients => {
        setClients(clients)
      }).then(fetch('http://localhost:8000/therapists/')
      .then(res => res.json())
      .then(therapists => {
        setTherapists(therapists)
        //console.log(clients._id)
      }))
  }, [])

  const handleSubmit = (e) => {

    e.preventDefault();
    

    const options ={
          method: 'POST',
          headers:{
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            client_id: clientChoice,
            physio_id: therapistChoice,
            session_date_time: dateTime,
            fee: fee,
            session_duration: duration, 
            session_type: sessionType,
            session_notes: sessionNotes,
            
            
          })
  }
       
        fetch(`http://localhost:8000/sessions/addSession/`, options)
          .then(res=> res.json())
          .then(data => {
            console.log(data, "Successfuy added session")
            
          })
          .catch(err => console.log(err, "Failed to add session")); 
    
 }
  return(
  <Container className="productForm">
        <Row>
          <Col md={{ span: 8, offset: 2}}>
            <Jumbotron>
              <h1>Session Booking Form</h1>
                <p>
                 Please fill out your details here to register a new client. Fields marked with an asterix are essential
                </p>
            <Form inline>
              <Form.Group as={Col} controlId="formGrid" className="form-element">
                <Form.Label className="form-element">*Client</Form.Label>
                      <Form.Control as="select" required onChange={e => setClientChoice(e.target.value)}>
                        <option>Choose...</option>
                        {clients.map((c) => (
                          <option key={c._id} value={c._id}>
                            {c.first_name} {c.surname}
                          </option>
                        ))}
                </Form.Control>
                <Form.Label className="form-element">Therapist</Form.Label>
                      <Form.Control as="select" required onChange={e => setTherapistChoice(e.target.value)}>
                        <option>Choose...</option>
                        {therapists.map((c) => (
                          <option key={c._id} value={c._id}>
                            {c.first_name} {c.surname}
                          </option>
                        ))}
                      </Form.Control>
                  </Form.Group>
              <Form.Group className="form-element"> 
                <Row>
                  <Col>
                      <Form.Label className="date-time-tag" >*Date and Time</Form.Label>
                    <Row >
                      <DatePicker selected={startDate} onChange={date => setDateTime(date)}showTimeSelect dateFormat="MMMM d, yyyy h:mm aa"/>
                    </Row>
                  </Col>
                  <Col>
                    <Form.Label className="form-element" column="lg" lg={2}>*Fee(€)</Form.Label>
                     <Form.Control
                      type="fee"
                      placeholder="Enter the session fee here..."
                      onChange={ e => setFee(e.target.value)}
                      required
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Row className="form-element">
                <Col>
                <Form.Group as={Col} controlId="formGridDOB" className="form-element">
                  <Form.Label>*Session Duration</Form.Label>
                    <Form.Control as="select" className="mb-2" required onChange={ e => setDuration(e.target.value)}>
                        <option>Choose the session time...</option>
                        <option value="30">30 minutes</option>
                        <option value="60">60 minutes</option>
                        <option value="90">90 minutes</option>
                        <option value="120">120 minutes</option>
                        <option value="Cancelled">Cancelled</option>
                        <option value="noShow">No-show</option>
                        
                      </Form.Control>
                  </Form.Group>
                  </Col>
                <Col>
                  <Form.Group as={Col} controlId="formGridEmail" className="form-element">
                    <Form.Label>*Session Type</Form.Label>
                    <Form.Control as="select" className="mb-2" required onChange={ e => setSessionType(e.target.value)}>
                        <option>Choose the session type...</option>
                        <option value="Assessment">Assessment</option>
                        <option value ="Massage Therapy">Massage Therapy</option>
                        <option value="Stretching & Exercising">Stretching & Exercising</option>
                        <option value="Technology (Lasers and/or Ultrasound)">Technology (Lasers and/or Ultrasound)</option>
                        <option value="Hydrotherapy">Hydrotherapy</option>
                        <option value="Electrotherapy">Electrotherapy</option>
                        <option value="Other">Other...</option>
                        
                      </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Form.Group controlId="exampleForm.ControlTextarea1" className="first-row">
                    <Form.Label>Session Notes</Form.Label>
                  <Form.Control as="textarea" rows={3} onChange={e => setSessionNotes(e.target.value)}/>
                  <Form.Text id="sessionNotes" muted >
                    This section is for physiotherapist use only after the session has ended</Form.Text>
                </Form.Group>
              </Row>
              <Button variant="primary" className="form-button" onClick={ handleSubmit }>Book Session</Button>{' '}
                </Form>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
  )
}

export default SessionCreate;