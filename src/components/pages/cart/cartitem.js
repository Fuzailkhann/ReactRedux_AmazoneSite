import { Description } from '@mui/icons-material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { incrementQuantity  } from '../../../redux/amazonSlice';
import { decremenetQuantity } from '../../../redux/amazonSlice';


import { deleteItem } from '../../../redux/amazonSlice';




function Cartitem ({item }){
    const dispatch = useDispatch();
   
  
    


  return (
    <div className='w-full flex flex-col md:flex-row justify-start item-start bg-white gap-2 '>
         <div className='w-[20%] w-[20vw]'>
            <img src={item.image} alt="" />
            </div>
        <div>
           
            <div className='mt-4'>
                <h1>{item.title}</h1>
                <h1>{item.description.substring(0 ,20)}</h1>
                <h1>Unit Price: ${item.price}</h1>

            </div>
            <div className='flex  bg-white gap-2 '>
                <p>Qty:</p>
                <p className='cursor-pointer font-bold' onClick={() => dispatch(decremenetQuantity(item.id))  } >-</p>
                <p className='text-black'>{item.quantity}</p>
                <p className='cursor-pointer font-bold ' onClick={() => dispatch(incrementQuantity(item.id))} >+</p>
            </div>
            <button onClick={() => dispatch(deleteItem(item.id)) } className='bg-red-500 text-white px-2 py-3'>Delete Item</button>
        </div>
        
     
        

      
    </div>
  )
  }
export default Cartitem
