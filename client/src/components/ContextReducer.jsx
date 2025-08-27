import React, { useReducer } from 'react'
import { createContext } from 'react';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action)=>{

}

const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer();

  return (
    <div>
      
    </div>
  )
}

export default CartProvider
