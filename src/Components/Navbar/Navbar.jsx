import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='Navbar p1'>
        <div className="title">
            BuyMobi
        </div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><i className="fa-solid fa-cart-shopping"></i></li>
        </ul>
    </div>
    <hr/>
    </>
  )
}

export default Navbar