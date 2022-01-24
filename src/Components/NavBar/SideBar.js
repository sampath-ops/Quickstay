import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import hamburger from "../../WebsiteMaterial/hamburger.svg";
import close from "../../WebsiteMaterial/close.svg";
export default class Sidebar extends React.Component {
  state = {
    menuOpen: false
  };

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
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
          List Property
        </Link>
        <Link
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/blog"
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
        <Link
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/login"
        >
          Login
        </Link>
      </Menu>
    );
  }
}
