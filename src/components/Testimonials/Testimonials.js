import React, { useState } from 'react'
import './Testimonials.css'
import { assets } from '../../assets/assets'
import { testimonialsData } from '../../data/testimonialsData'
import { motion } from 'framer-motion'

const Testimonials = () => {

    const transition = {type: 'spring', duration:3}
    const [selected, setSelected] = useState(0);
    const Length = testimonialsData.length;

  return (
    <div className='Testimonials' id='testimonials'>
        <div className='left-testimonials'>
            <span>Testimonials </span>
            <span className='stroke-text'>What They </span>
            <span>Say About Us</span>
            <motion.span
            key={selected}
            initial={{opacity: 0, x: -100}} 
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: 100}}
            transition={transition}>
                {testimonialsData[selected].review}
            </motion.span>
            <span>
                <span>
                    {testimonialsData[selected].name}
                </span>{" "}
                - {testimonialsData[selected].status}
            </span>
        </div>
        <div className='right-testimonials'>
            <motion.div
                initial={{opacity: 0, x: -100}} 
                whileInView={{opacity: 1, x: 0}}
                transition={{...transition, duration: 2}}
            ></motion.div>
            <motion.div
                initial={{opacity: 0, x: 100}} 
                whileInView={{opacity: 1, x: 0}}
                transition={{...transition, duration: 2}}
            ></motion.div>            
            <motion.img 
            key={selected}
            initial={{opacity: 0, x: 100}} 
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: -100}}
            transition={transition}
            src={testimonialsData[selected].image} alt="" />

            <div className="arrows">
                <img onClick={()=>{selected===0 ? setSelected(Length-1) : setSelected((prev)=>prev-1)}} src={assets.leftArrow} alt="" />
                <img onClick={()=>{selected===Length-1 ? setSelected(0) : setSelected((prev)=>prev+1)}} src={assets.rightArrow} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Testimonials