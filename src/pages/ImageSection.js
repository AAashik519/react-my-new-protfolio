import React from 'react';
import about from '../img/IMG_20210117_102308.jpg'
import '../styles/imageSection.css'
const ImageSection = () => {
    return (
        <div className='imageSection'>
            <div className="img">
                <img src={about} alt="" />
            </div>
            <div className="about-info">
                <h4> I am <strong className='name-style'> Al Amin Ashik  </strong>  </h4>
                <p className='about-text'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, veniam officiis? Deleniti aperiam quod placeat quae porro. Est expedita labore quidem nam, id, quibusdam, eaque maiores nesciunt aspernatur minima consequuntur.</p>

                <div className="about-details">
                    
                    <div className="left-detailes-section">
                        <p>Name</p>
                        <p>Age</p>
                        <p>Nationaity</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Countries</p>
                    </div>
                    <div className="right-details-section">
                        <p>: Al Amin Ashik</p>
                        <p>: 20 </p>
                        <p>:  Bangladeshi</p>
                        <p>: English , Bangla ,Hindi</p>
                        <p>: Gazipur sadar Gazipur</p>
                        <p>: Bangladesh</p>
                    </div>
                </div>

                    <button className ="cv_btn">Download Cv</button>
            </div>



        </div>
    );
};

export default ImageSection;