import React from 'react'
import "./Shop.css"
import Product from '../../comopnents/product/Product'
import { category } from '../../category.jsx'
import { dummydata } from '../../dummydata'
import { useState } from 'react'
import { SiShopify } from "react-icons/si";
const Shop = () => {
    let [cat,setcat]=useState(dummydata);
    function filterproduct(category){
      if(category==="All"){
          setcat(dummydata);
      }
      else{
      const updatedata=dummydata.filter((item)=>(item.category===category))
      setcat(updatedata);
    }}
  return (
    <div className='Shop'>
        <div className='heading'>
            <span>Shop</span>
               <SiShopify/>
        </div>
       <div className='category-section'>
            {category.map((item)=>(
              <div className='category-card' onClick={
                     ()=>(filterproduct(item.name)) }>
                <img src={item.img} alt=''/>
                <span>{item.name}</span>
              </div>
            ))}
        </div>
      <div className='product-section'>
        {cat.map((item)=>(
          <Product name={item.name} price={item.price} img={item.image} id={item.id}/>
        ))}
      </div>
    </div>
  )
}

export default Shop