import NavBar from './NavBar';
import './NavBar.css';
import Footer from '../Footer/Footer';
import React from 'react';

const Main = (props) => {
  return ( 
        <div>
           <NavBar />
           {props.children}
           <Footer/>
        </div>
   );
}
 
export default Main;

  