import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Card from '../components/Card.jsx'
import Carousel from '../components/Carousel.jsx'

function Home() {

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
                <Carousel />
            </div>

            <div className='container m-3'>
                {
                    (foodCategory.length !== 0) ? foodCategory.map((data, index) => {
                        return (
                            <div key={data._id}>

                                <div className='fs-3 m-3' >
                                    {data.CategoryName}
                                </div>
                                <hr />
                                {
                                    (foodItem.length !== 0) && foodItem.filter((item) => {
                                        return item.CategoryName === data.CategoryName
                                    }).map((filteredItems, index) => {
                                        return (
                                            <div key={filteredItems._id}>
                                                <Card name={filteredItems.name} 
                                                img={filteredItems.img} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                        : <div>Loading</div>
                }

                <Card />
            </div>
            <div><Footer /></div>
        </div>
    )
}

export default Home
