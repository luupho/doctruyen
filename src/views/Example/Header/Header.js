import React from "react";
import './Header.scss';
import {
    Link,
    NavLink
  } from "react-router-dom";

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
  
        }
    }

    render() {
        
        return (
            <div className="topnav">
                <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
                <NavLink to="/crud">CRUD</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
        )
    }

}

export default Header;