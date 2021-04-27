import React from 'react';
import '../styles/Typography.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

const HomePAge = () => {
    return (
        <div className="homepage">
            <div className="main-hero">
              <h1 className="hero-text">
                  Hi, I am Al Amin Ashik  
              </h1>
              <p className="h-sub-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum at repellendus dolores reprehenderit repellat aliquid dignissimos, magni, sint voluptatum eius sapiente, non deserunt atque incidunt nobis labore! Quam, facere quos.</p>

              <div className="icons">
               <Link  to ='/' className='i-holder'>  <FontAwesomeIcon icon={faFacebook}  className="icon fb" /> </Link>
               <Link  to ='/' className='i-holder'>  <FontAwesomeIcon icon={faGithub} className="icon gh" /> </Link>
               <Link  to ='/' className='i-holder'>  <FontAwesomeIcon icon={faLinkedin} className="icon ln" /> </Link>
              </div>
            </div>
        </div>
    );
};

export default HomePAge;