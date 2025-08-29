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

  const handleCheckOut = async()=>{
    let userEmail = localStorage.getItem('userEmail');
    let response = await fetch('http://localhost:5000/api/order/orderData',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        order_data: data,
         order_date: new Date().toDateString(), 
         email: userEmail
      })
    });

    if(response.status === 200){
      dispatch({type: 'DROP'})
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
                    {/* <button type="button" class="btn btn-danger" onClick={()=> dispatch({type: "REMOVE", index})}>Delete</button> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi pointer bi-trash" viewBox="0 0 16 16" onClick={()=>{dispatch({type:'REMOVE', index})}}>
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                    </svg>
                  </td>


                </tr>
              ))
            }


          </tbody>

        </table>
        <div><h1 className='fs-4'>Total Price: {totalPrice}/-</h1></div>
        <div>
          <button className='btn bg-success mt-5 ' onClick={handleCheckOut} > Check Out </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
