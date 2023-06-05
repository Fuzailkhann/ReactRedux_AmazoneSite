
// import alogo from "/myamz/src/assets/logo.png"
import alogo from "/ReactRedux_amazoneSite/src/assets/logo.png"
import ArrowRightIcon  from '@mui/icons-material/ArrowRight';
import { Link, useNavigate } from 'react-router-dom';
import {auth }from "../firebaseconfig"
import { createUserWithEmailAndPassword  , updateProfile} from "firebase/auth";

import { useState } from "react";



function Registration() {
    const navigate= useNavigate();
    const [clientName , setClientName] = useState("")
    const [clientEmail , setClientEmail] = useState("")
    const [clientPassword , setClientPassword] = useState("")
    const [errClientName , setErrClientName] = useState("")
    const [errClientEmail , setErrClientEmail] = useState("")
    const [errClientPassword , setErrClientPassword] = useState("")
    const [ firebaseErr , setFirebaseErr] = useState("")

    const [loading , setLoading] = useState(false)
    const [success , setSucces] = useState("");

    const handleName =(e) =>{
        setClientName(e.target.value)
        setErrClientName("")

    }
    const handlePassword =(e) =>{
        setClientPassword(e.target.value)
        setErrClientPassword("")
    }

    const handleEmail =(e) =>{
        setClientEmail(e.target.value)
        setErrClientEmail("")

    }
    const Handleregistration =(e) =>{
        e.preventDefault();
        if(!clientName){
            setErrClientName("enter your name")
        }
        if (!clientEmail){
            setErrClientEmail("please enter your email")
            setFirebaseErr("")
        }
        if(!clientPassword){
            setErrClientPassword("please enter your password")
        }
        if ( clientName && clientEmail && clientPassword  )
            setLoading(true)
            createUserWithEmailAndPassword(auth , clientEmail , clientPassword).then((userDetails)=>{
                updateProfile(auth.currentUser , {
                    displayName: clientName , 
                    photoURL: "https://static.theprint.in/wp-content/uploads/2022/06/shah_rukh_khan_main_image20220605115333.jpg?compress=true&quality=80&w=800&dpr=1.0"
                })
                setLoading(false)
                setSucces("Account created successfully")
                setTimeout(() =>{
                    navigate("/signin")
                } ,2000)
                console.log(userDetails.user)
            }).catch((error) =>{
                console.log(error.code)
                console.log(error.message)
                if(error.code.includes("auth/email-already-in-use")){
                    setFirebaseErr(" email already been used")


                }
                
            })
            console.log( clientName , clientEmail , clientPassword)
            setClientName("")
            setClientEmail("")
            setClientPassword("")
            setFirebaseErr("")
        
        }


    
  return (
    <div className='w-full'>
        <div className='w-full bg-gray-100 p-10' >
            <form className='w-[370px] mx-auto'>
                <img className='w-36 h-30 mx-auto' src={alogo} alt="" />
                <div className='w-full border border-zinc-200 p-6'>
                    <h2 className='text-3xl mb-4 font-bold'>Create Acccount</h2>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-2 '>
                            <p className='text-sm font-bold'>your name</p>
                     <input onChange={handleName} value={clientName}  name="userName" className='lowerCase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] duration-100 ' type="name" />
                     {
                        errClientName && (
                            <p className='text-xs text-[red] '>{errClientName}</p>
                        ) 
                     }
                        

                        </div>
                        <div className='flex flex-col gap-2 '>
                            <p className='text-sm font-bold'>your email</p>
                     <input onChange={handleEmail} value={clientEmail}  name="userName" className='lowerCase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] duration-100 ' type="email" />
                     {
                        errClientEmail && (
                            <p className='text-xs text-[red] '>{errClientEmail}</p>
                        ) 
                     }
                     {
                        firebaseErr && (
                            <p className='text-xs text-[red] '>{firebaseErr}</p>
                        ) 
                     }
                        </div>



                        {/* <div className='flex flex-col gap-2 '>
                            <p className='text-sm font-bold'>mobile number</p>
                     <input name="mobileNumber"  className='lowerCase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] duration-100 text-sm ' placeholder='mobile number' type="number" />
                        

                        </div> */}
                        <div className='flex flex-col gap-2 '>
                            <p className='text-sm font-bold'>Password</p>
                     <input onChange={handlePassword} value={clientPassword} name="password" className='lowerCase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] duration-100  text-sm' placeholder='At Least 6 Characters' type="password" />
                     {
                        errClientPassword  && (
                            <p className="text-xs text-[red]">{errClientPassword}</p>
                        )
                     }
                    <p className='text-xs font-bold text-gray-600'>password must be at least 6 characters</p>
                        

                        </div>
                        <p className=' text-xs font-bold'>By erolling your mobile phone number, you consent to receive automated security notifications via text message from Amazon. Message and data rates may apply. </p>
                    </div>

    
                    <button  onClick={Handleregistration }  className='w-full py-1.5  text-sm border-zinc-400 bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b active:border-yellow-800 mt-4'>Continue</button>
                    {
                        loading && (
                            <div>Loading....</div>
                        )
                    }
                    {
                         success && (
                            <div className="flex items-center justify-center">
                                <p>{success}</p>
                                </div>
                         )
                    }
                    <div className='flex flex-col mt-6'>
                    <p className='text-xs text-black '>Already have an account? <Link to="/signin"> <span className='text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offser-1 duration-100'> signin<span><ArrowRightIcon/></span> </span></Link> </p>
                    <p className='text-xs text-black '>Buying for work? <span className='text-blue-600 hover:text-orange-600 hover:underline hover:underline-offset-1'>Create a free business account</span><ArrowRightIcon/>  </p>

                    </div>

                    
                

                    <p className='text-xs text-black mt-4'>By creating an account or logging in, you agree to Amazon’s<span className='text-blue-600'>Conditions of Use</span> and <span className='text-blue-600'>Privacy Notice</span> . </p>

                </div>


            </form>
            <div className='w-full bg-gradient-to-t from-white via-white to-zinc-200 py-10 flex flex-col justify-center items-center gap-4'>
                <div className='flex items-center justify-center gap-4'>
                    <p className='text-xs text-blue-600 '>Conditions of Use</p>
                    <p className='text-xs text-blue-600'>Privacy Notice</p>
                    <p className='text-xs text-blue-600'>Help</p>

                </div>
                <p className='text-xs text-gray-600'>© 1996-2023, Amazon.com, Inc. or its affiliates </p>
            </div>
        </div>
      
    </div>
  )

}  


export default Registration
