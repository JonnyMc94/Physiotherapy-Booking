import React, { useState, useEffect } from 'react';
import ClientCard from './ClientCard';

const ClientRender = () => {
  
  const [clients, setClients] = useState([]);
  
  //Using the useEffect Hook to fetch client data on component renderring
  useEffect(() => {
    fetch('http://localhost:8000/clients/')
      .then(res => res.json())
      .then(clients => {
        setClients(clients)
        
      })
    
  }, [])


  return (
    <div>
      <div className="row clientRenderRow">
        {/* Mapping through the clients array and sending data to ClientCard for display */}
        {clients.map(clients => {
          return (
          <div className="col-lg-2 col-md-3 col-sm-4 col-6 clientRender" id="client-details" style={{marginBottom: 450 + "px", marginTop: 50 + "px"}}>
          <ClientCard
        _id={ clients.id}
        first_name={clients.first_name}
        surname={clients.surname}
        mobile={clients.mobile_number}
        email={clients.email_address}
        addressline1={clients.addressline1}
        addressline2={clients.addressline2}
        county={clients.county}
        eircode={clients.eircode}
              />
         </div>)
      })}
      </div>
    </div>
   

  )
}

export default ClientRender;