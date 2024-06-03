import React from 'react'
import Viideo from './my_video.mp4' 


const Vadio = () => {
  return (
    <div >
        <video src={Viideo} autoPlay loop muted ></video>
    </div>
  )
}

export default Vadio