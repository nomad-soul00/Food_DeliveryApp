import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Modal from '../Modal.jsx'
import Cart from '../Screens/Cart.jsx';
import {useCart} from './ContextReducer.jsx'
// import '../App.css'

const Navbar = () => {
    let data = useCart();
    const navigate = useNavigate();
    const [cartView, setCartView] = useState(false);

    const handleLogout =()=>{
        localStorage.removeItem('token');
        navigate('/');
    }

    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand ubuntu-medium fs-2 " to="/">Food Delivery</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mt-1">
                            <li className="nav-item">
                                <Link className="nav-link ubuntu-bold active fs-5" aria-current="page" to="/">Home</Link>
                            </li>

                            {
                                (localStorage.getItem('token')) ?
                                    <li className="nav-item">
                                        <Link className="nav-link ubuntu-bold active fs-5" aria-current="page" to="/">My Order</Link>
                                    </li>
                                    :
                                    " "
                            }

                        </ul>

                        


                              {
                                (!localStorage.getItem('token')) ?
                                     <div className='d-flex'>

                                      <Link className="btn bg-white text-success mx-1 ubuntu-bold" to="/login">Login</Link>
                                      <Link className="btn bg-white text-success ubuntu-bold mx-1" to="/signup">Sign-Up</Link>
                                    </div>
                                    :
                                    <>
                                     <div className='btn  bg-white ubuntu-bold text-success mx-2' to='/cart' onClick={()=>{setCartView(true)}}>
                                       My Cart
                                        <span class="badge text-white rounded-5 mx-1 bg-success">{data.length}</span>
                                    </div>
                                    {
                                        (cartView)? <Modal onClose={()=>{setCartView(false)}}><Cart /> </Modal> : null
                                    }
                                    <div className='btn bg-white ubuntu-bold text-danger mx-2' onClick={handleLogout}>
                                        Logout
                                    </div>
                                    </>
                                     
                            }

                          

                      
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
