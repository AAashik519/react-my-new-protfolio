import React from 'react'
import { Route, Switch } from 'react-router';
 
 import './Components/App.css' 
import Navbar from './Components/Navbar'
import AboutPages from './pages/AboutPages';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import HomePAge from './pages/HomePAge'
import Protfolios from './pages/Protfolios';
 

 

function App() {
  return (
    <>
     
    <div className="app">
    <div className="sidebar">
      <Navbar />
    </div>
    <div className="main-content">
      <div className="content">
        <Switch >
          <Route path='/' exact>
            <HomePAge />
          </Route>

          <Route path='/about'  >
           <AboutPages />
          </Route>
          <Route path='/protfolios'    >
          <Protfolios />
          </Route>
          <Route path='/blogs'  >
           <Blogs />
           </Route>
           
          <Route  path='/contact'  >
           <Contact />
          </Route>

        </Switch>
         
      </div>
    </div>
    </div>
     
    </>
  );
}

export default App;
