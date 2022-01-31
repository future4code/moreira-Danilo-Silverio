import React, {useState} from "react";
import {FaStar} from "react-icons/fa";
import "./Stars.css"


const StarRating = () => {

    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)

    return (
        <div>
            {[...Array(5)].map((star, i) => {

                const ratingValue = i + 1;
                return (
                    <label className="stars-rating">
                        <input
                            type="radio" 
                            name="rating" 
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                        />
                        <FaStar
                            size={22}
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                )
            })}
            
        </div>
    )

}

export default StarRating;