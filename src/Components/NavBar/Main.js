import NavBar from './NavBar';
import './NavBar.css';
import React from 'react';
/* Main.jsx */
class Main extends React.Component {
    render(){
      const styles = {
        main: {
          display:'flex',
          flexDirection:'column',
          alignItems: 'center',
        }
      }
      
      return (
        <div style={styles.main}>
          <NavBar />
        </div>
      )
    }
  }
export default Main;
  