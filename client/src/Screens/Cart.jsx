import React from 'react'
import { useCart, useDispatchCart } from '../components/ContextReducer';

const Cart = () => {
  let data = useCart();
  let dispatch = useDispatchCart();

  if (data.length === 0) {
    return (
      <div>
        <div className='m-5 text-center fs-3'>The Cart is Empty!</div>
      </div>
    )
  }

  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");
    // console.log(data,localStorage.getItem("userEmail"),new Date())
    let response = await fetch("http://localhost:5000/api/auth/orderData", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString()
      })
    });
    console.log("JSON RESPONSE:::::", response.status)
    if (response.status === 200) {
      dispatch({ type: "DROP" })
    }
  }

  let totalPrice = data.reduce((total, food) => total + food.price, 0)

  return (

    <div>
      <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md'>
        <table class="table table-hover text-success">
          <thead className='text-success fs-4'>
            <tr className=''>
              <th scope="col" className='text-success'>#</th>
              <th scope="col" className='text-success'>Name</th>
              <th scope="col" className='text-success'>Quantity</th>
              <th scope="col" className='text-success'>Option</th>
              <th scope="col" className='text-success'>Amount</th>
              <th scope="col" className='text-success'></th>
            </tr>
          </thead>

          <tbody>

            {
              data.map((food, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{food.name}</td>
                  <td>{food.qty}</td>
                  <td>{food.size}</td>
                  <td>{food.price}</td>
                  <td>
                    <button type="button" class="btn btn-danger" onClick={()=> dispatch({type: "REMOVE", index})}>Delete</button></td>
                  
                </tr>
              ))
            }


          </tbody>

        </table>
        <div><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div>
        <div>
          <button className='btn bg-success mt-5 ' onClick={handleCheckOut} > Check Out </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
