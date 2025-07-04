import './Cartcard.css'
import React from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri"
import { useDispatch } from 'react-redux';
import { Removeitem } from '../../Redux/cardSlice';

function Cartcard({name,price,id,image}) {
    let dispatch = useDispatch();
    return (
        <div className='Cartcard'>
            <div className='left-card'>
                <img src={image}alt=''/>
                <div className='name-price'>
                    <span>{name}</span>
                    <span>{price}/-</span>
                </div>
            </div>
            <div className='right-card'>
                <button onClick={()=>{dispatch(Removeitem(id))}}>Remove <RiDeleteBin6Fill /></button>
            </div>
        </div>
    );
}

export default Cartcard