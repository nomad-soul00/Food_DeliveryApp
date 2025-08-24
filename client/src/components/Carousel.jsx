import React from 'react'

const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade "  style={{ objectFit: "contain !important" }}>

                <div className="carousel-caption " style={{ zIndex: "10" }}>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success bg-success text-white" type="submit">Search</button>
                    </form>
                </div>

                <div className="carousel-inner" id='carousel' >
                    <div className="carousel-item active">
                        <img src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100 my-img" alt="..." style={{objectFit: 'contain !important', filter: 'brightness(50%)' }} />
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
    )
}

export default Carousel