import React from 'react';
import '../styles/skillSection.css'

const SkillSection = ( ) => {
    return (
        <div className='SkilSection'>
             <div className= 'py-2'>
                <div>
                    <h3>JavaScript 60%</h3>
                </div>

                <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-warning progress-bar-animated" role="progressbar" style={{ width: " 60%"  }} ></div>
                </div>
            </div>
          
            <div className= 'py-2' >
                <div>
                    <h3>React Js 50%</h3>
                </div>

                <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-primary  progress-bar-animated" role="progressbar" style={{ width: "50%"  }} ></div>
                </div>
            </div>
            <div className= 'py-2'>
                <div>
                    <h3>Node 30%</h3>
                </div>

                <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-success  progress-bar-animated" role="progressbar" style={{ width: " 30%"  }} ></div>
                </div>
            </div>
            <div className= 'py-2'>
                <div>
                    <h3>Express JS 40%</h3>
                </div>

                <div className="progress">
                    <div className="progress-bar progress-bar-striped  bg-secondary  progress-bar-animated" role="progressbar" style={{ width: " 40%"  }} ></div>
                </div>
            </div>
            
             <div className= 'py-2'>
                <div>
                    <h3>MongoDB 50%</h3>
                </div>

                <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-danger  progress-bar-animated" role="progressbar" style={{ width: " 50%"  }} ></div>
                </div>
            </div>
            <div className= 'py-2'>
                <div>
                    <h3>Metarial UI 40%</h3>
                </div>

                <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-primary  progress-bar-animated" role="progressbar" style={{ width: " 40%"  }} ></div>
                </div>
            </div>
            <div className= 'py-2'>
                <div>
                    <h3>BootStrap 75%</h3>
                </div>

                <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-success  progress-bar-animated" role="progressbar" style={{ width: "75%"  }} ></div>
                </div>
            </div>
            
        </div>
    );
};

export default SkillSection;