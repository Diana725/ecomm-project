import React, { useContext } from 'react'
import './Navbar.css'


import logo from '../assests/logo.png'
import cart_icon from '../assests/cart_icon.png'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'

const Navbar = () => {

    const [menu,setMenu] = React.useState("shop");
    const {getTotalCartItems} = useContext(ShopContext)

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>SHOPPER</p>
    </div>
    <ul className='nav-menu'>
      <li onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link>{menu ==="shop"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("mens")}}><Link to = '/mens'>Men</Link>{menu ==="mens"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("women")}}><Link to ='/women'>Women</Link>{menu ==="women"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("kids")}}><Link to='/kids'>Kids</Link>{menu ==="kids"?<hr/>:<></>}</li>
    </ul>
    <div className='nav-login-cart'>
      <Link to='/login'><button>Login</button></Link>
      <Link to='/cart'><img src={cart_icon} alt="" /></Link>
      <div className='nav-cart-count'>{getTotalCartItems()}</div>
    </div>
    </div>
  )
}

export default Navbar
