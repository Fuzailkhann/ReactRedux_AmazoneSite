


import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import Minibook from "./minibook"



function Productdetails() {
    const [bookDetails ,setBookDetails] = useState("")
    const [isBookPresent , setIsBookPresent] = useState(true)
    // const cart  = useSelector(state => state.cartreducer.products.value)
    const { potato} = useParams();
    useEffect(() =>{
        axios.get(`https://fakestoreapi.com/products/${potato}`).then((response) =>{
            if(response.status === 200){
                setBookDetails(response.data)
                console.log(response.data)
                console.log( setBookDetails)
            }else{
                setIsBookPresent(false)
                console.log("client error")
              
            }
        }).catch((e)=>{
            setIsBookPresent(false)
            console.log("catch error")
            console.log(e.code)
            console.log(e.message)
            
        })
    } , [potato])
  return (
    // <div>
    //   books id :  {id}
    // </div>
    <div>
      {  bookDetails ? (<div>
       
    

        <Minibook price = {bookDetails.price} title=  {bookDetails.title}
       photo = {bookDetails.image} category = {bookDetails.category}
       description = {bookDetails.description} length ={bookDetails.length} id= {bookDetails.id}

        /> 
     

    
    
      
       </div>
      ): isBookPresent ? (
       <p> loading ...</p>
      ): <p> no such book found</p>
}
      
    </div>
  )
}

export default Productdetails

