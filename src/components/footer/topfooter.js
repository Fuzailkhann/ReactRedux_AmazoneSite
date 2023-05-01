import React from 'react'

function topfooter() {
  return (
    <div className='w-full bg-white py-6'>
        <div className='w-full'>
            <div className='w-64 text-center mx-auto font-titleFont flex flex-col gap-1'>
                <p className='text-sm'>see personalised recommendation </p>
                <button className='w-full bg-yellow-400 py-1 rounded-md font-semibold '>Sign In</button>
                <p className='text-xs mt-1'>New costumer? <span className='text-blue-600 ml-1'>Start here. </span></ p>
            </div>
        </div>

      
    </div>
  )
}

export default topfooter
