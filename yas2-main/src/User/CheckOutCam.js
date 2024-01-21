import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import './Checkout'
import { Link } from 'react-router-dom';

function CheckOutCam() {
  return (
    <div className='top'>
       <div className='camera' style={{height:'30%'}}>
      {/* Your logo component will be placed here */}
      <Link to='/Checkin'>
      <div>
      <ArrowBackIcon style={{ fontSize: '350%',color:'white'}}/>
        </div>
        </Link> 

      {/* Other header content goes here */}
    <div style={{height:'90%',display:'flex',justifyContent:'center',alignItems:'center'}}>

      <CameraAltOutlinedIcon className='cameraicon' style={{ fontSize: '950%',marginTop:'20%',backgroundColor: '#1E1E1E',color:'white'}} />
      </div>
      </div>
      <div className='circle'></div>
      <div className='heading'><h2>Take Selfie For CHECK out</h2></div>
    </div>
  )
}

export default CheckOutCam
