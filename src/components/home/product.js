import React from 'react'
import Axios from "axios"
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import Card from "./card"


function Product() {
    
    const searchCart = useSelector(state => state.cartreducer.handleSearch)
    
    const[details , setDetails] = useState([])
    // const [data , setData] = useState("")

    
    useEffect(() => {
        const fetchDetails = async () =>{
            const {data} = await Axios.get(`https://fakestoreapi.com/products`)
            const detail = data
            setDetails(detail)
            //  console.log(details)
            // https://fakestoreapiserver.reactbd.com/amazonproducts
    

        }
        fetchDetails();

        // axios.get(`://6411eb2ef9fe8122ae17c105.mockapi.io/books`).then(
        //   (res) => {
        //     setDetails(res.data);

        //   }
        // );
      },[]);

    //   useEffect(() =>{
    //     setData(searchCart)
    //   } ,[searchCart])

      
  

    //   setTimeout((filterProducts) =>{
    //     const fiterProducts = details.filter((val) =>{
    //         return  val.title.toLowerCase().includes(data?.toLowerCase())
    //       })
        
    // } ,2000)

    const filterProducts = details.filter((val) =>{
        return  val.title.toLowerCase().includes(searchCart?.toLowerCase())
      })
     
    
        
     
  return (
    <div className='mx-auto w-full grid grid-cols-1  md:grid-cols-4 gap-10 px-4'>
        { searchCart &&  filterProducts ? (
            filterProducts.map((itm) =>{
                return (
                    <div key={itm.id} className="w-full flex flex-col-1 md:flex-col-4 gap-5">
                        <Card 
                        // id ={item.id}
                        // image = {item.image}
                        // category = {item.category}
                        // title = {item.title.substring(0,20)}
                        // price= {item.price}
                        // description = {item.description.substring(0,100)}
                        item = {itm}

                        >

                        </Card>
                       

                    </div>
                   
                )
            })
        ):(
            details.map((itm) =>{
                return (
                    <div key={itm.id} className="w-full flex flex-col-1 md:flex-col-4 gap-5" >
                        <Card item={itm} />
                        </div>
                )
            })
        )
            

    }
       
      
    </div>
  )
}

export default Product

{/* <div key={item.id} className='bg-white h-auto py-6 z-30 border-gray-200 flex flex-col gap-4'>
<div className='w-full h-auto flex items-center justify-center'>
    <img className='w-52 h-64 object-contain' src={item.image} alt="image" />
    <span className='text-sm text-gray-500 italic absolute top-2 right-9 '>{item.category}</span>
    <span className='w-full text-xm text-gray-500 italic relative -top-32 right-2 '>{item.category}</span>
</div>
<div className='px-4'>
    <div className='flex items-center justify-between'>
    <h2 className='text-lg font-medium'>{item.title.substring(0,20)}</h2>
    <p className='text-sm'>${item.price}</p>
    </div>
    <div className='text-sm'>
        {item.description.substring(0,100)}
    </div>
    <button onClick={()=>{
        navigate(`/productdetails/${item.id}`)
       
    }}  className='w-full py-1.5 rounded-md bg-yellow-500'>Add to cart</button>
    </div>
    
</div> */}
