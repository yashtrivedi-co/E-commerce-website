import React from 'react'
import './product.css'
import { useDispatch } from 'react-redux'
import { Additem } from '../../Redux/cardSlice'

const Product = ({ name, price, img, id }) => {
  const dispatch = useDispatch();

  return (
    <div className='product'>
      <img src={img} alt={name} />
      <div className='product-detail'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
        <button onClick={() => dispatch(Additem({id:id,price:price,name:name,image:img}))}>
          Add +
        </button>
      </div>
    </div>
  );
};

export default Product;
