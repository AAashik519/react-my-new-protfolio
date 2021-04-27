 import React from 'react';
import Services from '../Components/Services';
import SkillSection from '../Components/SkillSection';
import Title from '../Components/Title';
import ImageSection from './ImageSection';
import  design  from '../img/design.svg'
import gamedev from '../img/game-dev.svg';
import intelligence from '../img/intelligence.svg';
     
     const AboutPages = () => {
         return (
             <div className='AboutPages'>
                <Title  titel={'About Me'} span = {'About Me'} />
                <ImageSection />
                
                <Title  titel={'My Skills'} span = {'My Skills'} />
                <SkillSection />

                <Title  titel={'Services'} span = {'Services'} />

                <div className="services-container">
                    <Services image={design} title={'Web Development'} text= {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, atque!"} />
                    <Services image={intelligence} title={'Artifial Inteligence'}  text= {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, atque!"}/>
                    <Services image={gamedev} title={"Game Developent"}  text= {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, atque!"}/>
                   
                </div>
             </div>
         );
     };
     
     export default AboutPages;