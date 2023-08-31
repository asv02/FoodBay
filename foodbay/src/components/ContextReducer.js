import React, { createContext, useContext, useReducer } from 'react'

//global state,can be changed from anywhere
const CartStateContext=createContext()
const CartDispatchContext=createContext()
//dispatch is something like setProperty in useState,means it contains all cases,all action(delete,add,etc).

const reducer=(state,action)=>
{
    switch(action.type){
      case "ADD":
        return [...state,{
          id:action.id,
          name:action.name,
          qty:action.qty,
          size:action.size,
          price:action.price,
          img:action.img
        }]
        //you can add directly to state but to remove you need to make a temp arr ->newArr
       case "REMOVE":
       let newArr=[...state]
       newArr.splice(action.index,1)//1 means wahi wali element ko delete kr do.
       return newArr;
       //
       case "UPDATE":
        let arr = [...state]
        arr.find((food, index) => {
            if (food.id === action.id) {
                console.log(food.qty, parseInt(action.qty), action.price + food.price)
                arr[index] = { ...food, qty: parseInt(action.qty) + food.qty, price: action.price + food.price }
            }
            return arr
        })
        return arr
        //
        case "DROP":
          let empArray=[]
          return empArray

        default:
          console.log("Error in reducer");
    }
}


export const CartProvider=({children})=>{  
                     //reducer->logic to change the state and []->initial state.
const[state,dispatch]=useReducer(reducer,[])
return (
<CartDispatchContext.Provider value={dispatch}>
<CartStateContext.Provider value={state}>
  {children}
</CartStateContext.Provider>
</CartDispatchContext.Provider>
    )
  }

export const useCart=()=>useContext(CartStateContext);

export const useDispatchCart=()=>useContext(CartDispatchContext);