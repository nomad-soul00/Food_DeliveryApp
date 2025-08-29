import React, { useState, useEffect } from 'react'
import { useDispatchCart, useCart } from './ContextReducer';

const Card = ({ foodItem, options }) => {

    let dispatch = useDispatchCart();
    let data = useCart();
    let priceOptions = Object.keys(options);
    let [qty, setQty] = useState('1')
    let [size, setSize] = useState(priceOptions[0]);

    const handleAddtoCart = async () => {

        let food =[];
        for(const item of data){
            if(item.id === foodItem._id){
                food=item;
                break;
            }
        }
        if(food.length !== 0){
            if(food.size === size){
                await dispatch({type: "UPDATE", id:foodItem._id, price: finalPrice, qty})
                return
            }
            else if(food.size !== size){
                await dispatch({ type: 'ADD', id: foodItem._id, name: foodItem.name, qty, size, price: finalPrice })
                return
            }
            return
        }
        await dispatch({ type: 'ADD', id: foodItem._id, name: foodItem.name, qty, size, price: finalPrice })

    }
    // useEffect(() => {
    //     console.log('Cart updated:', data);
    // }, [data]);

    let finalPrice = qty * parseInt(options[size]);
    return (
        <div>
            <div className="card mt-3" style={{ 'width': "18rem", "min-height": "370px" }}>
                <img src={foodItem.img} className="card-img-top" alt="..." style={{ "height": "180px", "objectFit": "fill" }} />
                <div className="card-body">
                    <h5 className="card-title">{foodItem.name}</h5>
                    <p className="card-text">{foodItem.description.slice(0, 60)}  . .</p>
                    <div className="container w-100">
                        <select className='m-2 h-100 bg-success rounded' onChange={(e) => setQty(e.target.value)}>
                            {
                                Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    )
                                })
                            }
                        </select>

                        <select className='m-2 h-100 bg-success rounded' onChange={(e) => setSize(e.target.value)}>
                            {
                                priceOptions.map((data, index) => {
                                    return (
                                        <option key={index} value={data}>{data}</option>
                                    )
                                })
                            }
                        </select>

                        <div className='d-inline h-100 fs-5'>
                            ₹{finalPrice}/-
                        </div>
                    </div>
                    <hr />
                    <button type="button" className="btn btn-success justify-center ubuntu-regular" onClick={handleAddtoCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Card
