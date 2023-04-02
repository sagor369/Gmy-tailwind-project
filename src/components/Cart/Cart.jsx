import React from 'react';
import {ChevronDoubleRightIcon } from "@heroicons/react/24/solid";

const Cart = ({price}) => {
    return (
        <div className='bg-purple-400 py-5 px-4 my-4 rounded '>
            <h2 className='text-center'>
                <span className='font-extrabold text-4xl text-purple-900 '>{price.price}</span>
                <span className='text-white'>/month</span>
                
            </h2 >
            <h2 className='text-center uppercase'> <span className='text-2xl font-extrabold text-purple-600'> {price.type} </span></h2>
            <div className='ml-4'>
            <h2 className='font-bold text-2xl'>Feature :</h2>
            {
                price.feature.map(featur =>  <p>{featur}</p>)
            }
            </div>
        </div>
    );
};

export default Cart;