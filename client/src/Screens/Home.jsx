import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Card from '../components/Card.jsx'
import Carousel from '../components/Carousel.jsx'

function Home() {
    return (
        <div>
            <div><Navbar /></div>
            <div>
                <Carousel />
            </div>

            <div className='m-3'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                </div>
            <div><Footer /></div>
        </div>
    )
}

export default Home
