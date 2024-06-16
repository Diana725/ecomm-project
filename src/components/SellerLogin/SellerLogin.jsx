import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './SellerLogin.css'
import arrow from '../assests/arrow.png'

const SellerDashboard = () => {
 
  return (
    <div className='sellerbanner'>
     <p>Join Us and Get Insights that will Help You Grow Your Business. <Link to='/seller'><button>Become a Seller <img src={arrow}/></button></Link></p>
    </div>
  )
}

export default SellerDashboard
