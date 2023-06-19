import React, { useState } from "react";
import '../../Styles/Work/ImageSlider.css';

function ImageSlider({ topImage, bottomImage }) {
    const [value, setValue] = useState(0);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className="slider-container">
            <img src={bottomImage} className="bottom-image" alt="Image 1" />
            <div className="top-image" style={{ width: `${value}%` }}>
                <img src={topImage} alt="Image 2" />
            </div>
            <input type="range" min="0" max="100" value={value} className="slider" onChange={handleChange} />
        </div>
    );
}

export default ImageSlider;