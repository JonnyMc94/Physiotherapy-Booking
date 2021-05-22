import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa'
import { GrUpdate} from 'react-icons/gr'

const PhysioCard = (props) => {

  let updateStyle = { color: "white", fontSize: "1.25em", marginLeft: "10px" };

  // Ran out of time for the delete
  const deletePhysio = () => {
   
 }


  return (

    // Creating a card component which can be used to display the therapists collection information
   <div>
      <div className="col-lg-2 col-md-3 col-sm-4 col-6" id="physio-details" style={{ marginTop: 20 + "px" }}>
        <div className="card text-center form-element" style={{ width: 18+"rem", margin: 100 + "px" }}>
          <div className="card-body bg-light mb-3">
            <div className="card-title" style={{ fontSize: 3+ "rem"}}>
              <p>{props.first_name}</p> <p>{ props.surname}</p>
            </div>
            <div className="card-text">
              <p>{props.mobile}</p>
              <p>{props.email}</p>
              <p>{props.addresline1} { props.addressline2}</p>
              <p>{props.county} { props.eircode }</p>
              </div>
            </div>
          <div className="physio-buttons" style={{ marginTop: 20+ "px" }}>
            <button name="delete-physio"
              className="btn btn-danger deletePhysioButton" onClick={deletePhysio(props._id) }>
                Delete physiotherapist &nbsp;<span><FaTrashAlt/></span>
            </button>
            <Link to={"./UpdatePhysio" } name="update-physio"
              className="btn btn-success updatePhysioButton form-button">
              Update physio &nbsp;<span><GrUpdate style={ updateStyle}/></span>
            </Link>
            </div>
          </div>
      </div >
    </div >
 )
}

export default PhysioCard;