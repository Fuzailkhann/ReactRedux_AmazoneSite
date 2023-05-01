import React from 'react'

function Footermiddlelist({title , list}) {
  return (
    <div>
        <div>
                    <h3 className='mb-3 font-bold'>{title}</h3>
                    <ul>
                      { list.map((item) =>( <li className='flex flex-col'>{item}</li>))}
                      
                   
                        
                        
                    </ul>
            </div>

      
    </div>
  )
}

export default Footermiddlelist
