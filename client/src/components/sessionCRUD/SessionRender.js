import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import SessionCard from './sessionCard';

const SessionRender = () => {
  
  const [sessions, setSessions] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:8000/sessions/getAllSessions')
      .then(res => res.json())
      .then(sessions => {
        setSessions(sessions)
        console.log(sessions)
      });
    
  }, [])

  console.log(sessions);
  return (
    <div>
      <div className="row clientRenderRow">
        {sessions.map(sessions => {
          return (
          <div className="col-lg-2 col-md-3 col-sm-4 col-6 clientRender" id="client-details" style={{marginBottom: 450 + "px", marginTop: 50 + "px"}}>
          <SessionCard
            session_type={sessions.session_type}
            session_date_time={sessions.session_date_time}
            client_id={sessions.client_id}
            physio_id={sessions.physio_id}
              />
         </div>)
      })}
      </div>
    </div>
   

  )
}

export default SessionRender;