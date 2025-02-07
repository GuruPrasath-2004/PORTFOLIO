import React from 'react'

function Right() {
  return (
    <div className='right'>
      <div className='right-top'>
        <div className='address'>
          <div className='phone'>
            <img className='phone-logo' src='phone-call.png' alt="Example Logo" width='18'/> +91 9629876549
          </div>
          <div className='mail'>
            <img className='mail-logo' src='gmail.png' alt="Example Logo" width='18'/> guruprasath.ai22@krct.ac.in
          </div>
          <div className='location'>
            <img className='location-logo' src='pin.png' alt="Example Logo" width='18'/> B/28, New Housing Unit, Thuraiyur, Trichy - 621010
          </div>
        </div>
        <div>
          <img className='profile' src="github_icon.png" alt="Example Logo" width="100" />
          <h4 style={{textAlign:'center'}}>Guruprasath K</h4>
        </div>
      </div>

      {/* <div className='right-bottom'>

      </div> */}
    </div>
  )
}

export default Right
