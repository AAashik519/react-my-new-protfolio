import React from 'react';
import '../styles/title.css'

const Title = ({titel,span}) => {
    return (
        <div className='Title'>
            <h3>
                {titel}
                <span> {span} </span>
            </h3>
        </div>
    );
};

export default Title;