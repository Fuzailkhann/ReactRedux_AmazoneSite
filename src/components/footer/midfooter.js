import React from 'react'
import Footermiddlelist from "./footermiddlelist"

function Midfooter({title , list}) {
   var list =[
   " About Us" ,
    "Careers",
   " Press Releases" ,
    "Amazon Science"
]

var list1 =[ 
  "Facebook" ,
  "Twitter" ,
  "Instagram"
]
var list2=[
   
  "Sell on Amazon" ,
 " Sell under Amazon Accelerator" ,
 " Protect and Build Your Brand" ,

  "Amazon Global Selling" ,
 " Become an Affiliate" ,
  "Fulfilment by Amazon" ,
  "Advertise Your Products",
  "Amazon Pay on Merchants"

]
var list3 =[
  
  "COVID-19 and Amazon",
  "Your Account",
  "Returns Centre",
  "100% Purchase Protection",
  " Amazon App Download",
  "Help"

]
 
  return (
    <div className='w-full bg-blue text-white bg-black'>
        <div className='w-full py-10 border-b-[1px] border-gray-500'>
        <div className='w-full max-w-5xl mx-auto bg-[black] text-gray-300'>
            <div className='w-full grid grid-cols-1 md:grid-cols-4 place-items-center md:items-start '>
                <Footermiddlelist title="Get To Know Us" list= {list}  />
                <Footermiddlelist title="Connect with Us" list={list1}/>
                <Footermiddlelist title="Make Money with US" list ={list2}/>
                <Footermiddlelist title="Let US Help You"  list ={list3}
    // list="About Us  Careers
    // Press Releases
    // Amazon Science"
   
 />
            
            </div>
               
               

            </div>

        </div>
      
    </div>
  )
}

export default Midfooter
