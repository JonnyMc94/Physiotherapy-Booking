import React from 'react';
import {Link} from 'react-router-dom'
import { FaTrashAlt } from 'react-icons/fa'
import { GrUpdate } from 'react-icons/gr'
import { FcCalendar} from 'react-icons/fc'

const ClientCard = (props) => {

  let updateStyle = { color: "white", fontSize: "1.25em", marginLeft: "10px" };

  // This is a start at the delete for customer - ran out of time
  const deleteClient = (id) => {
    fetch(`http://localhost:8000/clients/deleteClient/${id}`,{
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => alert("Successfully deleted"));
  }
  
  // Card for renderring client info
  return (
    <div style={{margin: 20 + "px"} }>
      
        <div className="card text-center form-element child" style={{ width: 18+"rem", margin: 100 + "px" }}>
          <div className="card-body bg-light mb-3">
            <div className="card-title" style={{ fontSize: 3+ "rem"}}>
              <p>{props.first_name}</p> <p>{ props.surname}</p>
            </div>
          <div className="card-text">
            <p>{ props._id}</p>
              <p>{props.mobile}</p>
              <p>{props.email}</p>
              <p>{props.addressline1} { props.addressline2}</p>
              <p>{props.county} { props.eircode }</p>
              </div>
            </div>
          <div className="client buttons" style={{ marginTop: 20+ "px" }}>
            <button name="delete-client"
              className="btn btn-danger deleteClientButton" onClick={deleteClient(props._id) }>
                Delete client &nbsp;<span><FaTrashAlt/></span>
            </button>
          <Link to={{ pathname: "./UpdateClient"}} name="update-client"
              className="btn btn-success updateClientButton form-button">
                Update client &nbsp;<span><GrUpdate style={ updateStyle}/></span>
            </Link>
            <Link to={"./CreateSession"} name="create-session"
              className="btn btn-primary createSessionButton" style={{ marginBottom: 20+ "px" }}>
              Book a session <span><FcCalendar/></span>
              </Link>
            </div>
          </div>
     
    </div >
  
  )
}

export default ClientCard;