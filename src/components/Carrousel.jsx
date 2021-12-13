import React from 'react'
import flia2 from '../assets/images/flia2.jpg'
import flia3 from '../assets/images/flia3.jpeg'
import fliadark from '../assets/images/flia_dark.jpg'

export const Carrousel = () => {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={flia3} className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src={fliadark} className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src={flia2} className="d-block w-100" alt="..."></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button"               data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
