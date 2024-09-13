import React from "react";
import "./AutoplayCarousel.css";
export default function AutoplayCarousel({cardDetails}){
    return(
        <div className="carousel-container">
            <div className="carousel-track">
                {Object.keys(cardDetails).map((idx) => {
                    return (
                        <div className="carousel-card">
                            <img src={cardDetails[idx].path} alt={cardDetails[idx].alt}/>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}