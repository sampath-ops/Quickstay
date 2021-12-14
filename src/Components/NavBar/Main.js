import NavBar from './NavBar';
import './NavBar.css';
import React from 'react';

const Main = (props) => {
  return ( 
        <div>
           <NavBar />
           {props.children}
        </div>
   );
}
 
export default Main;

  