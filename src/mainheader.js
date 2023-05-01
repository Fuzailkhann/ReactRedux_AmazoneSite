import React from 'react'
import Header from "./components/header/header"

import Footer  from './components/footer/foter'

import  { Outlet }from 'react-router-dom'


export default function Mainheader() {
  return (
    <div className='bg-gray-100'>
      <Header/>
      <Outlet></Outlet>
      
      

      <Footer/> 
    </div>
  )
}

