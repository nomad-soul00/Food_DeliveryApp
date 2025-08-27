import React from 'react'

const Card = ({name, img, description, options}) => {

    let priceOptions = Object.keys(options);

  return (
    <div>
       <div className="card mt-3" style={{ 'width': "18rem", "max-height": "370px" }}>
                <img src={img} className="card-img-top" alt="..." style={{"height": "180px", "objectFit": "fill"}} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description.slice(0, 60)}  . .</p>
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
                </div>
            </div>
    </div>
  )
}

export default Card
