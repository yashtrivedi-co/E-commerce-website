import React from 'react'
import Cartcard from '../../comopnents/Cartcard/Cartcard';
import './Cart.css';
import { useSelector } from 'react-redux';

const Cart = () => {
  let item = useSelector(state=>state);
  let total = item.cart.reduce((a, b) => a + b.price, 0);
  return (
    <div className='cart'>
      {item.cart.length<=0?
      <div className='empty-cart'>
      <img src="../../../images/emptycart.png" alt=""/>
      <h1>Empty Cart</h1>
      </div>:
      <div className="cartCard-section">
      {item.cart.map((cartItem)=>(
          <Cartcard name={cartItem.name} price={cartItem.price} image={cartItem.image} id={cartItem.id}/>
     ) )}
       <div className='price-section'>
        <span>Total Product: {item.cart.length}</span>
        <span>Total Price: {total} </span>
       </div>
      </div>
      }
    </div>
  )
}

export default Cart
