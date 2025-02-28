import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer-container'>
        <hr />
        <div className="footer">
            <div className='social-links'>
                <img src={assets.facebook_icon} alt='' />
                <img src={assets.X_icon} alt='' />
                <img src={assets.linkedin_icon} alt='' />
                <img src={assets.instagram_icon} alt='' />
            </div>
            <div className="logo-footer">
                <img src={assets.fitnation} alt="" />
            </div>
        </div>
        <div className="blur footer-blur-1"></div>
        <div className="blur footer-blur-2"></div>
    </div>
  )
}

export default Footer