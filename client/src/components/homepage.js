import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {

  return (

    <div className="container-fluid">
      <div className="row" style={{ marginTop: 100 + "px"} }>
        <div className="col-sm">
          <h1 style={{ margin: 40 + "px", fontSize: 3.5 +"rem"} }>Welcome to Leinster Physio Services</h1>
          <p style={{ margin: 40 + "px", fontSize: 1.25 +"rem"} }>This online service will help you register for our clinic. We offer a range of sessions, from Massage Therapy to more advanced treatment like Hydrotherapy. You can view our therapists to find the perfect one for your needs and book a session. You can also keep up to date with your sessions</p>
          <div className="productForm col-sm2" >
          <Link to={ "./CreateClient"} className="btn btn-success homepage-button"><span className="button-text">Register Clients</span></Link>
          <Link to={ "./CreatePhysio"} className="btn btn-success homepage-button"><span className="button-text">Register a Physio</span></Link>
          <Link to={"./CreateSession"} className="btn btn-success homepage-button"><span className="button-text">Book a Session</span></Link>
          <Link to={"./UpdateClient"} className="btn btn-success homepage-button"><span className="button-text">Update client info</span></Link>
          <Link to={"./UpdatePhysio"} className="btn btn-success homepage-button"><span className="button-text">Update physio info</span></Link>
          <Link to={"./UpdateSession"} className="btn btn-success homepage-button"><span className="button-text">Update session info</span></Link>
        </div>
        </div>
  
        
      </div>
    </div>
  )
}

export default HomePage;