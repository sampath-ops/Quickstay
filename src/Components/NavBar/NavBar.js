import MenuItem from './MenuItem';
import MenuButton from './MenuButton';
import Menu from './Menu';
import React from 'react';
import logo from '../../WebsiteMaterial/Logo.png';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
    
    constructor(props){
      super(props);
      this.state={
        menuOpen:false,
      }
    }

    handleMenuClick() {
      this.setState({menuOpen:!this.state.menuOpen});
    }
    
    handleLinkClick() {
      this.setState({menuOpen: false});
    }
    
    render(){
      const styles= 
        {
          container:{
            position: 'absolute',
            boxSizing:'border-box',
            top: 0,
            left: 0,
            zIndex: '99',
            opacity: 1,
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            background: 'white',
            width: '100%',
            color: 'white',
            fontFamily:'Lobster',
          },
          body: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100vw',
            height: '100vh',
            filter: this.state.menuOpen ? 'blur(2px)':null,
            transition: 'filter 0.5s ease',
          },
        }
      const menu = [
        {
          route:'Home',
          link:'/'
        },
        {
          route:'About',
          link:'/about'
        },
        {
          route:'Blog',
          link:'/blog'
        },
        {
          route:'Contact Us',
          link:'/contact'
        },
        {
          route:'Login',
          link:'/login'
        },
        {
          route:'Signup',
          link:'/signup'
        },
      ]
      const menuItems = menu.map((val,index)=>{
        return (
          <MenuItem 
            key={index} 
            delay={`${index * 0.1}s`}
            onClick={()=>{this.handleLinkClick();}}>{val}</MenuItem>)
      });
    
      return(
        <div>
          <div style={styles.container} className="custom-navbar">
            <div style={styles.logo} className="logo">
              <img src={logo} alt="logo" />
            </div>
            <MenuButton  open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color='black'/>
            <div className="desktop-menu">
              {
                menu.map((val,index)=>{
                  return(
                    <div  key={index} >
                      <NavLink to={val.link} >{val.route}</NavLink>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <Menu open={this.state.menuOpen}>
            {menuItems}
          </Menu>
        </div>
      )
    }
  }
export default NavBar;
  