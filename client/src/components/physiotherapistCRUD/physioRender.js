import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import TherapistCard from './physioCard';

const PhysioRender = () => {
  
  const [therapists, setTherapists] = useState([]);
  
  //Using the useEffect Hook to fetch therapist data on component renderring
  useEffect(() => {
    fetch('http://localhost:8000/therapists/')
      .then(res => res.json())
      .then(therapists => setTherapists(therapists));
    
  }, [])

  console.log(therapists);
  return (
    <div>
      <div className="row clientRenderRow">
        {/* Mapping through the therapists array and sending data to TherapistCard for display */}
        {therapists.map(therapists => {
          return (
          <div className="col-lg-2 col-md-3 col-sm-4 col-6 clientRender" id="client-details" style={{marginBottom: 450 + "px", marginTop: 50 + "px"}}>
          <TherapistCard
            
        first_name={therapists.first_name}
        surname={therapists.surname}
        mobile={therapists.mobile_number}
        email={therapists.email_address}
        addressline1={therapists.addressline1}
        addressline2={therapists.addressline2}
        county={therapists.county}
        eircode={therapists.eircode}
              />
         </div>)
      })}
      </div>
    </div>
   

  )
}

export default PhysioRender;