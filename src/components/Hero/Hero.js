import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import {assets} from '../../assets/assets'
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'

const Hero = () => {

  const transition = {type: 'spring', duration:3}

  return (
    <div className="hero" id='home'>
        <div className="blur hero-blur"></div>
        <div className="left-hero">
          <Header />
          <div className="the-best-ad">
            <motion.div initial={{left: '125px'}}
            whileInView={{left: '8px'}}
            transition={{...transition, type: 'tween'}}
            >
            </motion.div>
            <div></div>
            <span>The Best GYM In The City</span>
          </div>
          <div className="hero-text">
            <div>
              <span className='stroke-text'>Shape </span>   {/*stroke text css in app.css */}
              <span>Your</span>
            </div>
            <div>
              <span className='ideal-body'>Ideal Body</span>
            </div>
            <div>
              <span>Where dedication turns into transformation - We help you reach your best version, unlocking your full potential!</span>
            </div>
          </div>
          <div className="figures">
            <div>
              <span><NumberCounter end={20} start={10} delay='4' preFix="+"/></span>
              <span>Expert Coaches</span>
            </div>
            <div>
              <span><NumberCounter end={500} start={450} delay='4' preFix="+"/></span>
              <span>Members Joined</span>
            </div>
            <div>
              <span><NumberCounter end={45} start={30} delay='4' preFix="+"/></span>
              <span>Fitness Programs</span>
            </div>
          </div>
          <div className="hero-button">
            <button className="btn btn-1">Get Started</button>
            <button className="btn btn-2">Learn More</button>
          </div>
        </div>
        <div className="right-hero">
          <button className='btn'>Join Now</button>

          <motion.div 
          initial={{right: '-16px'}}
          whileInView={{right: '64px'}}
          transition={transition}
          className="heart-rate">
            <img src={assets.heart} alt="" />
            <span>Heart Rate</span>
            <span>116 bpm</span>
          </motion.div>

          <img className='hero-image' src={assets.Hero} alt="" />
          <motion.img 
          initial={{right: '176px'}}
          whileInView={{right: '320px'}}
          transition={transition}
          className='hero-image-back' src={assets.hero_image_back} alt="" />
          
          <motion.div 
            initial={{right: '592px'}}
            whileInView={{right: '448px'}}
            transition={transition}
            className="calories">
            <img src={assets.calories} alt="" />
            <div>
              <span>Calories Burned</span>
              <span>220 kcal</span>
            </div>
          </motion.div>
        </div>
    </div>
  )
}

export default Hero