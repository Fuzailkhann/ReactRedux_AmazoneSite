import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/amazonSlice';


function Minibook({title , photo, category  , price , description , length , id}) {
  const dispatch = useDispatch();
  return (
    <div className='w-[280px] mx-5 bg-white h-auto py-6 border border-gray-200 z-30 flex flex-col gap-4' >
      <div className='w-[280px] h-auto flex justify-center'>
        <img  className='w-52 h-64 ' src={photo} alt="" />
        <span className='relative -top-2right-1 '>{category}</span>
      </div>
      <div className='mx-4'>
        <div className='flex items-center justify-between'>
                <h2 className='text-lg font-medium'>{title.substring(0,20)}</h2>
                <p className='text-sm' >${price}</p>
        </div>
        <div className='text-sm'>
            {description.substring(0,100)}
        </div>
        <button onClick={()=>dispatch(addToCart({
        
    
          title:title,
          price:price,
          quantity: 1,
          // item : bookDetails ,
          id : id,
        
        
          image : photo ,
          description :description , 
          length :length,
        }

        ))} className='w-full py-1.5 rounded-md bg-yellow-400 cursor-pointer'>Add to cart</button>
      </div>
    </div>
  )
}

export default Minibook
