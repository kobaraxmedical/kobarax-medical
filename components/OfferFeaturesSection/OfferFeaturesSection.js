import React from 'react';

const Feaures = [
    {
        id: '1',
        icon: 'icon-shipped',
        title: "FREE & FAST SHIPPING",
        des: "Orders All Over $100",
    },
    {
        id: '2',
        icon: 'icon-cashback',
        title: "MONEY BACK GUARANTEE",
        des: "With a 30 Day Minimum",
    },
    {
        id: '3',
        icon: 'icon-privacy',
        title: "ALL SECURE PAYMENT",
        des: "Up to 12 months installments",
    },
    {
        id: '4',
        icon: 'icon-discount',
        title: "ALL SECURE DSCOUNT",
        des: "Up to 12% Discount",
    },
]

const OfferFeaturesSection = (props) => {

    return (
        <div className={`offer-features-area ${props.fClass}`}>
            <div className="container">
                <div className="offer-features-wrap">
                    <div className="row">
                        {
                            Feaures.map((feaures, cat) => (
                                <div className="col-lg-3 col-md-6 col-12" key={cat}>
                                    <div className="features-item">
                                        <div className="features-icon">
                                            <div className="icon">
                                                <i className={feaures.icon}></i>
                                            </div>
                                        </div>
                                        <div className="features-text">
                                            <h2>{feaures.title}</h2>
                                            <p>{feaures.des}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OfferFeaturesSection;