// import MenuItem from './MenuItem';
// import MenuButton from './MenuButton';
// import Menu from './Menu';
import Sidebar from "./SideBar";
import React from 'react';
import logo from '../../WebsiteMaterial/Logo.png';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {getAuth,signOut} from "firebase/auth";
import {app} from "../../firebase.config";
import Popover from './PopOver';

class NavBar extends React.Component {
    
    constructor(props){
      super(props);
      this.state={
        // menuOpen:false,
        showProfile: false
      }
    }

    // handleMenuClick() {
    //   this.setState({menuOpen:!this.state.menuOpen});
    // }
    
    // handleLinkClick() {
    //   this.setState({menuOpen: false});
    // }
    
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

      const auth = getAuth(app);

      const menu = [
        {
          route:'Home',
          link:'/',
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
          route: 'List your Property',
          link:'/list-property'
        },
        {
          route:`${auth.currentUser ? 'Logout' : 'Login'}`,
          link:`${auth.currentUser ? '' : '/login'}`
        }
        
      ]
  
      if(!this.state.showProfile && auth.currentUser){
        this.setState({showProfile:true});
      }
    
      //SIGNOUT
      const signout = ()=>{
        this.setState({menuOpen: false});
        signOut(auth).then(() => {
          this.setState({showProfile:false});
        }).catch((error) => {
          // An error happened.
        });
      }

      // const menuItems = menu.map((val,index)=>{
      //   return (
      //     <MenuItem
      //       key={index} 
      //       delay={`${index * 0.1}s`}
      //       onClick={val.route === 'Logout' ? ()=>{signout()}:()=>{this.handleLinkClick();}}
      //       >{val}

      //     </MenuItem>)
      // });
    
      return(
        <div className="home_menu">
          <div style={styles.container} className="custom-navbar">
            <div style={styles.logo} className="logo">
              <Link to="/"><img src={logo} alt="logo" /></Link>
            </div>
            {/* <MenuButton  open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color='black'/> */}
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
              {
                 this.state.showProfile ? <Popover signout={signout} auth={auth}/> :  <div>
                 <NavLink to="/login" >Login</NavLink>
                 </div>
              }
              
            </div>
           
          </div>
          {/* <Menu open={this.state.menuOpen} className="mobile-menu">
            {menuItems}
          </Menu> */}
           <Sidebar pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } className="home_menu"/>
        </div>
      )
    }
  }
export default NavBar;
  