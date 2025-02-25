import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import WhatsAppButton from '../WhatsAppButton/WhatsAppButton';

const Scrollbar = () => {

    return(
        <div className="col-lg-12">
            <div className="header-menu">
                <WhatsAppButton />
                <ul className="smothscroll">
                    <li><AnchorLink href='#__next'><i className="ti-arrow-up"></i></AnchorLink></li>
                </ul>
            </div>
        </div>
        
    )
}

export default Scrollbar;
