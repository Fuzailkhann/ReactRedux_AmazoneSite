import React from 'react'
import alogo from "/myamz/src/assets/logo.png"
import ArrowRightIcon  from '@mui/icons-material/ArrowRight';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseconfig';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../../redux/amazonSlice';


function Signin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ clientEmail , setClientEmail] = useState("")
  const [ clientPassword , setClientPassword] = useState("")

  const [errClientEmail , setErrClientEmail] = useState("")
  const [ errClientPassword , setErrClientPassword] = useState("")

  const [loading , setLoading ] = useState(false)
  const [ successMsg , setSuccessMsg] = useState("")
  const [ emailErr , setEmailErr] = useState("")
  const [ passwordErr , setPasswordErr] = useState("")
  

  const handleEmail =(e) =>{
    setClientEmail(e.target.value)
    setErrClientEmail("")

  }

  const handlePassword =(e) =>{
    setClientPassword(e.target.value)
    setErrClientPassword("")
  }


  const handleLogin =(e)=>{
    e.preventDefault();
    if (!clientEmail){
      setErrClientEmail("email is empty")
      setEmailErr("")



    }
    if(!clientPassword){
      setErrClientPassword(" Enter your password")
      setPasswordErr("")

    }
    if ( clientEmail && clientPassword){
      setLoading(true)
      signInWithEmailAndPassword(auth , clientEmail , clientPassword).then((userDetails)=>{
        console.log(userDetails.user)
        const user =  userDetails.user
        dispatch(setUserInfo({
          id:user.uid ,
          userName: user.displayName , 
          userEmail : user.email ,
          image : user.photoURL
        }))
        setLoading(false)
        setSuccessMsg(" you are successfully signin , welcomeback!")
        setTimeout(()=>{
          navigate("/")

        } , 2000)

      }).catch((error) =>{
        console.log(error.code)
        console.log(error.massege)
        setLoading(false)
        if (error.code.includes("auth/user-not-found")){
          setEmailErr("email is invalid")
          

        }
        if(error.code.includes("auth/wrong-password")){
          setPasswordErr("password is wrong")
        }
        

      })
      setClientEmail("")
      setClientPassword("")
      
    


    }
    
  }


  
  return (
    <div className='w-full h-screen' >
      <div className='w-full bg-gray-100 h-screen p-10'>
        <form className='w-[350px] mx-auto'>
            <img className='w-36 h-30 mx-auto font-black' src={alogo} alt="amalogo" />
            <div className='w-full border boder-zinc-200 p-6 '>
                <h2 className='text-3xl font-bold mb-4'>sign in</h2>
                <div className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-2'>
                    <p className='text-sm'>Email or phone number</p>
                   
                     <input  onChange={handleEmail} value={clientEmail} className='w-full lowerCase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] duration-100 ' type="email" />
                     {
                      errClientEmail && (
                        <p className='text-xs text-[red]'>{errClientEmail}</p>
                      )
                     }
                     {
                      emailErr && (
                        <p className='text-xs text-[red]'>{emailErr}</p>
                      )
                     }
                  </div>
            
                  <div className='flex flex-col gap-2'>
                    <p className='text-sm'>Password</p>
                    <input value={clientPassword} onChange={handlePassword} className='w-full lowerCase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] duration-100 ' type="password" />
                    { errClientPassword && (
                      <p className='text-xs bg-[red]'>{errClientPassword}</p>
                    )}
                    {
                      passwordErr && (
                        <p className='text-xs bg-[red]'>{passwordErr}</p>
                      )
                    }
                  </div>
                  <button onClick={handleLogin}  className='w-full py-1.5  text-sm border-zinc-400 bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b active:border-yellow-800'>Continue</button>
                  {
                    loading && (
                      <p className='flex justify-center bg-[red] text-sm'> Loading......</p>
                    )
                  }
                  {
                    successMsg && (
                      <p className='text-sm text-[green] '>{successMsg}</p>
                    )
                  }
                </div>
                <p className='text-xs text-black mt-4'>By continuing, you agree to Amazon's <span className='text-blue-600'>Conditions of Use</span> and <span className='text-blue-600'>Privacy Notice</span> . </p>

                <p className='mt-4 text-gray-600 text-xs group '> <ArrowRightIcon/><span className='text-blue-600 group-hover:text-orange-700 group-hover:underline underline-offset-1 cursor-pointer ' >Need help?</span> </p>

            </div>
            <p className='text-xs w-full flex items-center text-gray-600 mt-4 '>
              <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span>
              <span className='w-1/3 text-xs flex items-center justify-center  '>New to Amazon?</span>
              <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span>
            </p>

            <Link to="/registration"><button className='py-1.5 w-full mt-4 roundend-sm  bg-gradient-to-t from-slate-200 to-slate-100 border border-zinc-400 text-sm font-medium active:border-yellow-800 '> Create your Amazon account</button></Link>


        </form>
        <div className='w-full bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col justify-center items-center gap-4 py-10'>
          <div className='flex justify-center gap-6  ' >
            <p className='text-xs  text-blue-600 text-sm hover:text-orange-600 hover:underline underline-offset-1 duration-100 cursor-pointer'>Condition of Use</p>
            <p className=' text-xs text-blue-600 text-sm hover:text-orange-600 hover:underline underline-offset-1 duration-100 cursor-pointer' >Privacy Notice</p>
            <p className='text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 duration-100 cursor-pointer ' >help</p>
          </div>
          <p className='text-gray-600 text-xs'>© 1996-2023, Amazon.com, Inc. or its affiliates </p>
        </div>
      </div>
    </div>
  )
}

export default Signin
