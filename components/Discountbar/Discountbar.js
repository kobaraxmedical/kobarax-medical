import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Discountbar = (props) => {

    const [discountActive, setdiscountState] = useState(false);

    return (
        <div className={`discount-bar ${discountActive ? "d-none" : ""}`}>
            <div className="container">
                <div className="discount-text">
                    <p><span>30%</span> discount all products spatial for December</p>
                    <div className="discount-close" onClick={() => setdiscountState(!discountActive)}>
                        <i className="icon-icon_close"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discountbar;