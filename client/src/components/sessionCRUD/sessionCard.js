import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa'
import { GrUpdate} from 'react-icons/gr'

const SessionCard = (props) => {

  let updateStyle = { color: "white", fontSize: "1.25em", marginLeft: "10px" };
  const deleteSession = () => {
   
 }


  return (

   <div>
      <div className="col-lg-2 col-md-3 col-sm-4 col-6" id="physio-details" style={{ marginTop: 20 + "px" }}>
        <div className="card text-center form-element" style={{ width: 18+"rem", margin: 100 + "px" }}>
          <div className="card-body bg-light mb-3">
            <div className="card-title" style={{ fontSize: 2.35+ "rem"}}>
              Session Details
            </div>
            <div className="card-text">
              <p>Client ID: {props.client_id}</p>
              <p>Therapist ID: {props.physio_id}</p>
              <p>Session type: {props.session_type}</p>
              <p>Session scheduling: {props.session_date_time}</p>
              </div>
            </div>
          <div className="session-buttons" style={{ marginTop: 20+ "px" }}>
            <button name="delete-session"
              className="btn btn-danger deleteSessionButton" onClick={deleteSession(props._id) }>
                Delete session &nbsp;<span><FaTrashAlt/></span>
            </button>
            <Link to={"./UpdateSession" } name="update-session"
              className="btn btn-success updateSessionButton form-button">
              Update session &nbsp;<span><GrUpdate style={ updateStyle}/></span>
            </Link>
            </div>
          </div>
      </div >
    </div >
 )
}

export default SessionCard;