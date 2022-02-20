import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import hamburger from "../../WebsiteMaterial/hamburger.svg";
import close from "../../WebsiteMaterial/close.svg";
import {app} from "../../firebase.config";
import { getAuth, signOut } from "firebase/auth";
export default class Sidebar extends React.Component {
  state = {
    menuOpen: false,
    isLogin:false
  };

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  signout(auth){
    signOut(auth).then(()=>{
      this.setState({ isLogin:false });
      console.log("signed out")
    }).catch((error)=>{
      // ERROR
    })
  }

  render() {

    const auth = getAuth(app);

    if(auth.currentUser && !this.state.isLogin){
      this.setState({ isLogin:true });
    }

    return (
      <Menu right width={'300px'}
        isOpen={this.state.menuOpen}
        onStateChange={state => this.handleStateChange(state)}
        customBurgerIcon={ <img src={hamburger} alt="hamburger"/> }
        customCrossIcon={ <img src={close} alt="close-icon"/> }
      >
        <Link onClick={() => this.closeMenu()} className="menu-item" to="/">
          Home
        </Link>
        <Link
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/about"
        >
          About us
        </Link>
        <Link
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/list-property"
        >
          List your Property
        </Link>
        <Link
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/blogs"
        >
          Blog
        </Link>
        <Link
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/contact"
        >
          Contact us
        </Link>

        {this.state.isLogin ?  <Link
          onClick={() => {
            this.signout(auth);
            this.closeMenu();
          }}
          className="menu-item"
          to="#"
        >
          Logout
        </Link> : <Link
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/login"
        >
          Login
        </Link>}

      </Menu>
    );
  }
}
