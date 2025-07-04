import React from 'react'
import { SiShopify } from "react-icons/si";
import { TfiSearch } from "react-icons/tfi";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import "./nav.css";
import { Link } from 'react-router';
import {useDispatch, useSelector} from "react-redux"
const Nav = () => {
    let dispatch = useDispatch()
    let iteam = useSelector(state => state)
  return (
    <div className='nav'> 
    <div className='top-nav'>
        <div className='logo'>
            <span>V-Shop</span>
            <SiShopify/>
        </div>
        <form className='search-box'>
            <input type='text' placeholder='serch iteam...'/>
            <button> <TfiSearch/> </button>
        </form>
        <Link to="/cart">
        <div className='cart-box'>
         <PiShoppingCartSimpleLight/>
         <span>{iteam.cart.length}</span>
        </div>
        </Link>
    </div>
    <div className='bootom-nav'>
       <Link to="/"> <ul>HOME</ul></Link>
      <Link to="/shope"><ul>SHOPE</ul></Link>
       <Link to="/cart"> <ul>CART</ul></Link>
        <Link to="/contact"><ul>CONTACT</ul></Link>
    </div>
     </div>
  )
}

export default Nav