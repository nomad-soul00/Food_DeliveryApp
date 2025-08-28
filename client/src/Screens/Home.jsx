import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Card from '../components/Card.jsx'

function Home() {
    const [search, setSearch] = useState('');
    const [foodItem, setFoodItem] = useState([]);
    const [foodCategory, setFoodCategory] = useState([]);

    const loadData = async () => {
        let response = await fetch('http://localhost:5000/api/display/foodData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        response = await response.json();
        setFoodItem(response[0]);
        setFoodCategory(response[1]);
    }

    useEffect(() => {
        loadData();
    }, []);




    return (
        <div>
            <div><Navbar /></div>
            <div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade " style={{ objectFit: "contain !important" }}>

                    <div className="carousel-caption " style={{ zIndex: "10" }}>
                        <div className="d-flex justify-content-center" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
                            {/* <button className="btn btn-outline-success bg-success text-white" type="submit">Search</button> */}
                        </div>
                    </div>

                    <div className="carousel-inner" id='carousel' >
                        <div className="carousel-item active">
                            <img src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100 my-img" alt="..." style={{ objectFit: 'contain !important', filter: 'brightness(50%)' }} />
                        </div>
                        <div className="carousel-item" >
                            <img src="https://images.unsplash.com/photo-1707448829764-9474458021ed?q=80&w=601&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100 my-img" alt="..." style={{ filter: 'brightness(50%)' }} />
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.unsplash.com/photo-1697155406055-2db32d47ca07?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100 my-img" alt="..." style={{ filter: 'brightness(50%)' }} />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className='container m-3'>
                {
                    (foodCategory.length !== 0) ? foodCategory.map((data, index) => {
                        return (
                            <div key={data._id} className='row mb-3'>

                                <div className='fs-3 m-3' >
                                    {data.CategoryName}
                                </div>
                                <hr />
                                {
                                    (foodItem.length !== 0) && foodItem.filter((item) => 
                                        item.CategoryName === data.CategoryName && (item.name.toLowerCase().includes(search.toLocaleLowerCase()))
                                    ).map((filteredItems, index) => {
                                        return (
                                            <div key={filteredItems._id} className='col-12 col-md-6 col-lg-3 mx-2'>
                                                <Card
                                                    foodItem = {filteredItems}
                                                    options={filteredItems.options[0]}
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                        : <div>Loading</div>
                }
            </div>
            <div><Footer /></div>
        </div>
    )
}

export default Home
