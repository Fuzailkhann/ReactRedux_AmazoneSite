import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../../redux/amazonSlice';
import { InsertEmoticon } from '@mui/icons-material';



function Card( {item}) {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const cart  = useSelector(state => state.cartreducer.products.value)
  return (
    <div className=''>
         <div key={item.id} className=' bg-white h-auto py-6 z-30 border-gray-200 flex  flex-col gap-2'>
                    <div className='w-full h-auto flex  justify-center items-center'>
                        <img className='w-52 h-64 object-contain flex justify-center ' src={item.image} alt="image" />
                        <span className='text-sm text-gray-500 italic relative top-2 right-9 '>{item.category}</span>
                        <span className='w-full text-xm text-gray-500 italic relative -top-32 right-2 '>{item.category}</span>
                    </div>
                    <div className='px-4 flex flex-col'>
                        <div className='flex items-center justify-between'>
                        <h2 className='text-lg font-medium'>{item.title.substring(0,20)}</h2>
                        <p className='text-sm'>${item.price}</p>
                        </div>
                        <div className='text-sm'>
                            {item.description.substring(0 , 70)}
                        </div>
                        <button onClick={()=>{
                            navigate(`/productdetails/${item.id}`)
                           
                        }}  className=' w-[160px] md:w-full py-1.5 rounded-md bg-yellow-500 mb-2'>View Product</button>
                        <button onClick={() => dispatch(addToCart({
                            id:item.id ,
                            title:item.title,
                            price:item.price,
                            quantity: 1,
                            item : item ,
                            image : item.image ,
                            description : item.description , 
                           

                        
                            // image:item.image
                     }))}  className='w-[160px] md:w-full py-1.5 rounded-md bg-yellow-500'>Add to  cart</button>
                        </div>
                        
                    </div>
      
    </div>
  )
}

export default Card
