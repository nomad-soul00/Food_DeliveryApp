import React from 'react'

const Card = () => {
  return (
    <div>
       <div className="card mt-3" style={{ 'width': "18rem", "max-height": "360px" }}>
                <img src="https://plus.unsplash.com/premium_photo-1726812054316-10bc1d562596?q=80&w=821&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur.</p>
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
                            <option value="half">Half</option>
                            <option value="full">Full</option>
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
