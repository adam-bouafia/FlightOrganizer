import React from 'react'

export default function Intro() {
  return (
    <div className='Intro col-5'>
      <img className='plane' src={require("../assets/imgs/plane.png")} style={{"maxWidth":"115%"}} alt="plane"/>
      <div className='imageholder' style={{"maxWidth":"660px"}}>
          <div className='image-sky' style={{"maxWidth":"600px"}}>
              <img className='container-fluid' src={require("../assets/imgs/aboveSky.jpg")} style={{"minHeight":"100vh"}}  alt="aboveSky"/>
          </div>
      </div>
    </div>
    
  )
}
