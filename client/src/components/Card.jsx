import React from 'react'
import { useDispatchCart, useCart } from './ContextReducer';

const Card = ({foodItem, options}) => {

    let priceOptions = Object.keys(options);
    const handleAddtoCart = () =>{

    }

  return (
    <div>
       <div className="card mt-3" style={{ 'width': "18rem", "mmin-height": "370px" }}>
                <img src={foodItem.img} className="card-img-top" alt="..." style={{"height": "180px", "objectFit": "fill"}} />
                <div className="card-body">
                    <h5 className="card-title">{foodItem.name}</h5>
                    <p className="card-text">{foodItem.description.slice(0, 60)}  . .</p>
                    <div className="container w-100">
                        <select className='m-2 h-100 bg-success rounded'>
                            {
                                Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    )
                                })
                            }
                        </select>

                        <select className='m-2 h-100 bg-success rounded'>
                        {
                            priceOptions.map((data,index)=>{
                                return(
                                    <option key={index} value={data}>{data}</option>
                                )
                            })
                        }
                        </select>

                        <div className='d-inline h-100 fs-5'>
                            Total Price
                        </div>
                    </div>
                    <hr />
                    <button type="button" class="btn btn-success justify-center ubuntu-regular" onClick={handleAddtoCart}>Add to Cart</button>
                </div>
            </div>
    </div>
  )
}

export default Card
