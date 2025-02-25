import React from 'react'
import stimg from '/public/images/icon/title.png'
import Image from 'next/image';

const SectionTitle = (props) => {
    return (
        <div className={`heading-title ${props.sClass}`}>
            <h2>
                {/* <i className="inline-flex items-center mr-2">
                    <Image 
                        src={stimg} 
                        alt="" 
                        width={32} 
                        height={48} 
                        style={{ objectFit: 'contain' }}
                    />
                </i> */}
                {props.sTitle}
            </h2>
        </div>
    )
}

export default SectionTitle;