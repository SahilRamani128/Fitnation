import React, { useState } from 'react'
import './Header.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-scroll'

const Header = () => {

  const [menu, setMenu] = useState()

  return (
    <div className='header'>
        <img className='logo' src={assets.fitnation} alt="" />
        <ul className='header-menu'>
            <li onClick={()=>setMenu()}><Link activeClass='active' to='home' spy='true' smooth='true'>Home</Link></li>
            <li onClick={()=>setMenu()}><Link to='programs' spy='true' smooth='true'>Programs</Link></li>
            <li onClick={()=>setMenu()}><Link to='reasons' spy='true' smooth='true'>Why Us</Link></li>
            <li onClick={()=>setMenu()}><Link to='plans' spy='true' smooth='true'>Plans</Link></li>
            <li onClick={()=>setMenu()}><Link to='testimonials' spy='true' smooth='true'>Testimonials</Link></li>
        </ul>
    </div>
  )
}

export default Header