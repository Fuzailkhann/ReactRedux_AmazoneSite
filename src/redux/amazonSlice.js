import { createSlice } from "@reduxjs/toolkit";

const amazoneSlice = createSlice({
    name:"amazone" , 
    initialState :{
        products:[] ,
        userInfo:null ,
        handleSearch: null 
    },
    reducers:{
        addToCart:(state , action) =>{
            const item = state.products.find((item) => item.id === action.payload.id )
            if(item ){
                item.quantity += action.payload.quantity
            }else{
                state.products.push(action.payload)

            }
           
        },
        deleteItem:(state , action ) =>{
            state.products = state.products.filter((item ) => item.id !== action.payload )
        },
        
        incrementQuantity:(state , action) =>{
            const item = state.products.find((item) => item.id === action.payload)
            item.quantity++

            },
         decremenetQuantity:(state , action ) =>{
            const item = state.products.find((item) => item.id === action.payload)
            if(item.quantity === 1){
                item.quantity = 1
            }else{
                item.quantity--

            }
            
         

        },
        resetCart:(state) =>{
            state.products = [];
        },
        setUserInfo:(state , action) =>{
            state.userInfo = action.payload
        },
        userSignout:(state)=>{
            state.userInfo = null
        } , 
        setHandleSearch:(state , action)=>{
            state.handleSearch = action.payload

        }
       
        

    }
}) 
export const { addToCart , deleteItem , resetCart ,  incrementQuantity , decremenetQuantity , setUserInfo , userSignout , setHandleSearch} = amazoneSlice.actions;
export default amazoneSlice.reducer