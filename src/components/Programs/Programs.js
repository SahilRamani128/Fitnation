import React from 'react'
import './Programs.css'
import { assets } from '../../assets/assets'
import { programsData } from '../../data/programsData'

const Programs = () => {
  return (
    <div className='Programs' id='programs'>
        <div className="programs-header">
            <span className='stroke-text'>Explore Our </span>
            <span>Programs </span>
            <span className='stroke-text'>To Shape Your Body</span>
        </div>
        <div className="program-categories">
            {programsData.map((program)=>(
                <div className="category">
                    <span>{program.image}</span>
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                        <span>Join Now</span>
                        <img src={assets.rightArrow} alt="" />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs