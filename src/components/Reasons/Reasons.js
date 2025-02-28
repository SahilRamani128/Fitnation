import React from 'react'
import './Reasons.css'
import {assets} from '../../assets/assets'

const Reasons = () => {
  return (
    <div className='Reasons' id='reasons'>
      <div className="left-reason">
        <img src={assets.back} alt="" />
        <img src={assets.triceps} alt="" />
        <img src={assets.chest} alt="" />
        <img src={assets.biceps} alt="" />
        <img src={assets.shoulder} alt="" />
        <img src={assets.leg} alt="" />
      </div>
      <div className="right-reason">
        <span>Some Reasons</span>
        
        <div>
          <span className='stroke-text'>Why </span>
          <span>Choose Us?</span>
        </div>

        <div className='details-right'>
          <div>
            <img src={assets.tick} alt="" />
            <span>Over 15+ Expert Coaches</span>
          </div>
          <div>
            <img src={assets.tick} alt="" />
            <span>Train Smarter And Faster Than Before</span>
          </div>
          <div>
            <img src={assets.tick} alt="" />
            <span>1 Free Program For New Member</span>
          </div>
          <div>
            <img src={assets.tick} alt="" />
            <span>Reliable Partners</span>
          </div>
        </div>
        <span>Our Partners</span>
        <div class="partners">
          <img src={assets.puma} alt="" />
          <img src={assets.nike} alt="" />
          <img src={assets.adidas} alt="" />
          <img src={assets.nb} alt="" />
          <img src={assets.asics} alt="" />
          <img src={assets.redtape} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Reasons
