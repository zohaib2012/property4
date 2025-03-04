import React from 'react'; 
import { Link } from 'react-router-dom';

export default function MyVerticallyCenteredModal(props) {
    const images = props.images; // Assuming `images` is an array of image URLs passed as a prop

    return (
        <>
        <div
            className="modal fade"
            id="centermodal1"
            tabIndex={-1}
            role="dialog"
            aria-hidden="true"
            
            
        >
            <div className="modal-dialog modal-dialog-centered propertymodal">
                <div className="modal-content">
                    <div className="modal-header">
                     
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>
                    <div className="modal-body">
                    
                                    <div
                                        id="carouselExampleIndicators"
                                        className="carousel slide"
                                        data-bs-ride="carousel"
                                    >
                                        <ol className="carousel-indicators">
                                            {images.map((_, index) => (
                                                <li
                                                    key={index}
                                                    data-bs-target="#carouselExampleIndicators"
                                                    data-bs-slide-to={index}
                                                    className={index === 0 ? "active" : ""}
                                                />
                                            ))}
                                        </ol>
                                        <div className="carousel-inner" role="listbox">
                                            {images.map((image, index) => (
                                                <div 
                                                    key={index}
                                                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                                                >
                                                    <img
                                                        className="d-block img-fluid"
                                                        src={image} // Using dynamic image URL
                                                        alt={`Slide ${index + 1}`}
                                                        height={50}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                        <Link
                                            className="carousel-control-prev"
                                            to="#carouselExampleIndicators"
                                            role="button"
                                            data-bs-slide="prev"
                                        >
                                            <span
                                                className="carousel-control-prev-icon"
                                                aria-hidden="true"
                                            />
                                            <span className="visually-hidden">Previous</span>
                                        </Link>
                                        <Link
                                            className="carousel-control-next"
                                            to="#carouselExampleIndicators"
                                            role="button"
                                            data-bs-slide="next"
                                        >
                                            <span
                                                className="carousel-control-next-icon"
                                                aria-hidden="true"
                                            />
                                            <span className="visually-hidden">Next</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        
            </div>
        </div>
        </>
    );
}
