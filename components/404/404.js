import React from 'react'
import Link from 'next/link'
import erimg from '/public/images/404.png'
import Image from 'next/image'


const Error = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="opps-404-section separator-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="content clearfix">
                            <div className="error">
                                <Image src={erimg} alt="" />
                            </div>
                            <div className="opps-message">
                                <h3>Oops! Page Not Found!</h3>
                                <p>Try going to Home Page by using the button below.</p>
                                <Link onClick={ClickHandler} href="/home" className="btn-style-1"> Back to home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Error;