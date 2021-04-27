import React from 'react';
import '../styles/Services.css'

const Services = ({ image,title,text }) => {
    return (
        <div className='Services'>
            <div className="service-section">
                <div className="services-content">
                    <img src={image} alt="service-icon" />
                    <h5 className="s-titel">{title} </h5>
                        <p className="s-text">
                            {text}
                        </p>
                </div>
            </div>

        </div>
    );
};

export default Services;