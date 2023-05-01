import Main from "./components/main"
import Registration from "./components/pages/registration"


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signin from "./components/pages/signin"
import Productdetails from "./components/pages/productdetails"
import Cart from "./components/pages/cart.component"
import Mainheader from "../src/mainheader"







 
const router = createBrowserRouter([
 
  {

    path:"/" ,
    element: <Mainheader/>,

    

    children:[{
      path :"/", 
      element:<Main/>

    },
    {
      path: "/cart.component", 
      element: <Cart/>
  
      


    },

    {
      path :"/productdetails/:potato",
      element :  <Productdetails />
    }
    
  ]
  
  },{
    path:"/signin" , 
    element:<Signin/>

  } ,{
    path :"/registration" ,
    element: <Registration/>
  }
  // } , {
  //   path :"/productdetails/:id",
  //   element :  <Productdetails />
  // }


])

export default function App(){
  return <RouterProvider router ={router} >
    
  </RouterProvider>
}
