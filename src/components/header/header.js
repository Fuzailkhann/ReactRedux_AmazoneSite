import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import alogo from "/ReactRedux_amazoneSite/src/assets/logo.png"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from "@mui/icons-material/Search"
import { useState } from 'react';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

import { signOut } from "firebase/auth";
import LogoutIcon from '@mui/icons-material/Logout';
import { userSignout } from '../../redux/amazonSlice';
import { setHandleSearch } from '../../redux/amazonSlice';
import { auth } from '../firebaseconfig';
import { setUserInfo } from '../../redux/amazonSlice';





function Header() {
  const dispatch = useDispatch();
  const prodct = useSelector(state => state.cartreducer.products)
  const searchCart = useSelector(state => state.cartreducer.handleSearch)
  console.log(searchCart)


  const userInfo =  useSelector(state => state.cartreducer.userInfo)
  console.log(userInfo)
  console.log(prodct)

  const [showAll , setShowAll] = useState(false)
 
  // const onSubmit =(e) =>{
  //   let value = e.target["input-data"].value

  //   dispatch(searchCart(value))
  // }
  
   const dataAdd = (e) =>{
    e.preventDefault()
    let  value= e.target["input-data"].value
    dispatch(setHandleSearch(value))
  }
  const HandleSignOut=()=>{
    
signOut(auth).then(() => {
  console.log("signout successfully")
  dispatch(userSignout())


}).catch((error) => {
  // An error happened.
});

  }

  // useEffect(() =>{
  //   const fetchApi = Async () =>{
  //     const url =`https://fakestoreapi.com/products`
  //   }
  // })

  // const getMovie =(e)=>{
  //   e.preventDefault();
  //   let value = e.target["input-data"].value
  //   setText(value)
    
  // }



  
  return (
  <div  >


    <div className='w-full  jusify-center bg-[black] text-white px-4 py-3 flex items-center gap-4 ' >
        <Link to="/">
        <div className='h-[80%]  px-2 flex justify-center items-center' > 
        <img className='w-36 h-30 text-center' src = {alogo} alt="logo" />  

        </div>
        </Link>

        <div className='hidden md:flex items-center'> 
          < LocationOnIcon />
          <p>Deliver to <span className=' -mt-10 text-sm  font-semibold'>India</span></p>
        </div>
        <form className='w-[45vw]' onSubmit={dataAdd} >
        <div className='h-10 px-2 text-black bg-white rounded-md hidden md:flex flex-grow relative' >
          <span className='flex justify-center items-center cursor-pointer' onClick={() =>setShowAll(!showAll)}>All<span> < ArrowDropDownOutlinedIcon/> </span> 
          { showAll && (
            <div>
              <ul className='absolute w-56 h-80 top-10 left-0 bg-[white] text-black p-2 flex flex-col gap-2 z-30 overflow-y-scroll border-[1px]'>

                <li>
                  all departments
                </li>
                <li>
                  all departments
                </li>
                <li>
                  all departments
                </li>
                <li>
                  all departments
                </li>
              </ul>
            </div>
          )}
          </span>


      
          <input className=' px-2 text-black text-base flex-grow outline-none' name = "input-data"   type="text" />
        

          <span className='w-12 h-full justify-center items pt-1 center bg-[yellow] cursor-pointer '> <SearchIcon/> </span>
        </div>
        </form>
        <Link to="/signin">
        <div className='flex flex-col items-start justify-col '>
          { userInfo ? ( <p className='text-md font-bold '>Hi , {userInfo.userName} < p/>
           </p> ) :( <p className='text-xs'>Hello , Sign in</p>)}
          
          <p className='text-sm font-semibold'>Accounts & Lists
          <span>
          < ArrowDropDownOutlinedIcon/>
          </span> </p>
        </div>
        </Link>

        <div className='hidden md:flex flex-col items-start justify-col '>
          <p className='text-xs'>Return</p>
          <p className='text-sm font-semibold '>& Orders</p>
        </div>

        <Link to="/cart.component">
        <div className='flex items-start justify-center relative' >
         <ShoppingCartIcon/>
          <p className='text-xs font-semibold mt-3'>Cart <span className='text-xs absolute -top-1 left-6 font-semibold h-4 p-1 bg-[#f3a847] rounded-full flex justify-center items-center'> {prodct.length >0 ? prodct.length : 0}</span></p>

          
        </div>
        
      </Link>

       
    {userInfo ?( <div onClick={HandleSignOut} >
        <LogoutIcon/>
        <p className='text-sm font-semibold mt-1' >Logout</p>
        
      </div>
      ):(
        <Link to="/signin">
        <div className='text-md font-bold pointer'>Signin</div>
        </Link>
      )}
      
    
  

   </div>
     
  </div>
)}


export default Header
