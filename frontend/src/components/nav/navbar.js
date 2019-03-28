
import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div className="nav">
                    <Link to={'/accomodations'}>All accomodations</Link>
                    <Link to={'/profile'}>Profile</Link>
                    <Link to={'/new_accomodation'}>Post an Accomodation</Link>
                    <button onClick={this.logoutUser}>Logout</button>
                </div>
            );
        } else {
            return (
              <div className="nav">
                    <Link to={'/accomodations'}>Tattoo Shops</Link>
                <Link to={"/signup"}>Signup</Link>
                <Link to={"/login"}>Login</Link>
              </div>
            );
        }
    }

    render() {
        return (
          <div className="navbar">
            <h1 className="HAFH_logo">
              <Link to={"/"}>Love The Skin You're In</Link>
            </h1>
            {this.getLinks()}
          </div>
        );
    }
}

export default NavBar;