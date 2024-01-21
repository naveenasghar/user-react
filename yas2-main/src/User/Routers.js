import React from 'react';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import Login from './Login'
import CheckIn from './Checkin'
import Check from './Check'


function Routers() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/Checkin" element={<CheckIn/>} />
      <Route path="/Check" element={<Check/>} />  
      </Routes>
  </Router>
  )
}

export default Routers
