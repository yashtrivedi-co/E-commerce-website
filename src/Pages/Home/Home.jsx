import React from 'react'
import Nav from '../../comopnents/nav/Nav'
import bg from  "../../../images/bg0.gif"
import "./Home.css"
import { category } from '../../category'
import Product from '../../comopnents/product/Product'
import { dummydata } from '../../dummydata'
import { useState } from 'react'


const Home = () => {
  let [cat,setcat]=useState(dummydata);
  function filterproduct(category){
    const updatedata=dummydata.filter((item)=>(item.category===category))
    setcat(updatedata);
  }
  return (
    <div className='Home'>
    <div className='hero-bg'>
      <img src={bg} alt='GIF'></img>
    </div>
    <div className='category-section'>
      {category.slice(0,5).map((item)=>(
        <div className='category-card' onClick={
      ()=>(filterproduct(item.name))
    }>
          <img src={item.img} alt=''/>
          <span>{item.name}</span>
        </div>
      ))}
      </div>
     <div className='all'> <h1 onClick={()=>(setcat(dummydata))}>Trendig Product</h1></div>
      <div className='product-section'>
        {cat.slice(0,6).map((item)=>(
          <Product name={item.name} price={item.price} img={item.image} id={item.id}/>
        ))}
      </div>
    </div>
  )
}

export default Home