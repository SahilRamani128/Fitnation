import React from 'react'
import './Plans.css'
import { assets } from '../../assets/assets'
import { plansData } from '../../data/plansData'

const Plans = () => {
  return (
    <div className='plans-container' id='plans'>
        <div class="blur plans-blur-1"></div>
        <div class="blur plans-blur-2"></div>
        <div class="programs-header">
            <span className='stroke-text'>Ready To Start</span>
            <span>Your Journey</span>
            <span className='stroke-text'>Now WithUs</span>
        </div>
        <div className="plans">
            {plansData.map((plan, index)=>(
                <div className="plan" key={index}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>${plan.price}</span>

                    <div className="features">
                        {plan.features.map((feature, index)=>(
                            <div className="feature">
                                <img src={assets.whiteTick} alt="" />
                                <span key={1}>{feature}</span>
                            </div>
                        ))}
                    </div>
                    <div>
                        <span>See More Benefits ⏭</span>
                    </div>
                    <button className="btn">Join Now</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans