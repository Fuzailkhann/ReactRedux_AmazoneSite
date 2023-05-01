import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import CartItem from "./cart/cartitem"


import {resetCart} from "../../redux/amazonSlice"

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cartreducer.products)
  console.log(cart)
 
 

  const [totalAmount , setTotalAmount] = useState(0)
  useEffect(() =>{
    setTotalAmount(cart?.reduce((acc , curr) => acc + curr.price * curr.quantity , 0 ))

  },[cart])

  
  return (
    <div>
      {cart?.length > 0 ?(
        <div className=' mt-10 mx-10 flex  flex-row justify-center item-start gap-x-28'>
          <div className=' h-fit flex flex-col w-[50%] gap-20'>
          {cart.map((itm) =>(
            <div>
         <CartItem item={itm} image={itm.image}/>
         </div>
        
      ))}
       <button onClick={() =>dispatch(resetCart())} className='bg-[red] py-[1px] px-[1px] text-md rounded-[5px] text-white'>reset all product</button>

          </div>

          <div className='flex flex-col items-start justify-between h-[480px] mt-10'>
            <div>
              <div>
                Your Cart

              </div>
              <div>
                Summary
              </div>
              <p><span>Total Item: {cart.length}</span></p>
            </div>
          

          <div className='flex flex-col items-start gap-y-1'>
            <p>Total Amount: <span className='font-bold'> ${totalAmount.toFixed(2)}</span></p>
            <button className='bg-[yellow] py-[5px] px-[8px] rounded-[5px]'> Check Now</button>
          </div>
        </div> 
        
        </div>

      ):(
        <p>your card is empty</p>
      )}
     
    </div>
  )}
