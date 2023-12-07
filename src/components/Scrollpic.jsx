/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';


export default function Scrollpic() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrevClick = () => {
        // Decrease the activeIndex by 1, wrapping around to the last slide if it's the first slide
        setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        // Increase the activeIndex by 1, wrapping around to the first slide if it's the last slide
        setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    const slides = [
        {
            imageSrc: 'https://mdbcdn.b-cdn.net/img/new/standard/nature/181.webp',
            title: 'Card title 1',
            description: 'Some quick example text for card 1',
        },
        {
            className: 'second-scrollpic',
            imageSrc: 'https://mdbootstrap.com/img/Photos/Others/images/26.jpg',
            title: 'Card title 2',
            description: 'Some quick example text for card 2',
        },
        {
            imageSrc: 'https://mdbcdn.b-cdn.net/img/new/standard/nature/183.webp',
            title: 'Card title 3',
            description: 'Some quick example text for card 3',
        },
    ];

    return (
        <div className="container-fluid">
            <h1 className="d-flex justify-content-center">Some More Options</h1>
            <div className="stage">
                <div id="carouselMultiItemExample" className="carousel slide carousel-dark text-center">
                    <div className="d-flex justify-content-center mb-4">
                        <button
                            className="carousel-control-prev position-relative"
                            type="button"
                            data-mdb-target="#carouselMultiItemExample"
                            data-mdb-slide="prev"
                            onClick={handlePrevClick}>
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next position-relative"
                            type="button"
                            data-mdb-target="#carouselMultiItemExample"
                            data-mdb-slide="next"
                            onClick={handleNextClick}>
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="carousel-inner">
                        {slides.map((slide, index) => (
                            <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="card">
                                                <img src={slide.imageSrc} className="card-img-top" alt="Card image" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{slide.title}</h5>
                                                    <p className="card-text">{slide.description}</p>
                                                    <a href="#!" className="btn btn-primary">
                                                        Button
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="card">
                                                <img src={slide.imageSrc} className="card-img-top" alt="Card image" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{slide.title}</h5>
                                                    <p className="card-text">{slide.description}</p>
                                                    <a href="#!" className="btn btn-primary">
                                                        Button
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="card">
                                                <img src={slide.imageSrc} className="card-img-top" alt="Card image" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{slide.title}</h5>
                                                    <p className="card-text">{slide.description}</p>
                                                    <a href="#!" className="btn btn-primary">
                                                        Button
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
