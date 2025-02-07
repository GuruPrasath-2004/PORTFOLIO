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
          <img className='profile' src="guru-photo.jpg" alt="Example Logo" width="100" />
          <h4 style={{textAlign:'center'}}>Guruprasath K</h4>
        </div>
      </div>

      <div className='right-bottom'>
        <h2>PROJECT</h2>
        <div className='project'>
            <img className='pro-image' src='demand.png' alt='sample_image' width='200'/>
            <div>
              <a href='https://github.com/GuruPrasath-2004/group-14_DEMAND_FORECASTING' target="_blank" rel="noopener noreferrer"><h3>Demand Forecasting</h3></a>
              <p>This project focuses on predicting future demand for products or services using Exponential Smoothing techniques. The model smooths historical data by giving more weight to recent observations while gradually reducing the influence of older data. It helps businesses forecast sales trends, manage inventory, and optimize supply chain operations.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Right
