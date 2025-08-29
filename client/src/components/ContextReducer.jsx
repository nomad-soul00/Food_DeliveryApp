import React, { useContext, useReducer } from 'react'
import { createContext } from 'react';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      // console.log(action);
      return [...state, {id: action.id, name: action.name, qty: action.qty, size: action.size, price: action.price}];
    
      case 'REMOVE':
        let newState = [...state];
        newState.splice(action.index, 1);
        return newState;

      case "UPDATE":
            let arr = [...state]
            arr.find((food, index) => {
                if (food.id === action.id) {
                    arr[index] = { ...food, qty: parseInt(action.qty) + parseInt(food.qty), price: action.price + food.price }
                }
                return arr
            })
            return arr
      case 'DROP':
        let emptyArray = []
        return emptyArray

    default:
      console.log('Error in reducer')
  }
}

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  )
}

export default CartProvider;

export const useCart = ()=>  useContext(CartStateContext) ;
export const useDispatchCart = ()=> useContext(CartDispatchContext);
