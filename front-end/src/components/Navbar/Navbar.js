import React from 'react';
import Logo from "../../Images/Logo/logo.png"
import { Link } from "react-router-dom" 

const Navbar = () => {
    return (
        <React.Fragment>
            <div className="navbar-container">
            <Link className="link" to="/"><h1>Home</h1></Link>
                <h1>Create Blog</h1>
                <Link to="/"><img src={Logo} alt="logo"/></Link>
                <h1>Contact Us</h1>
                <Link className="link" to="/sign-in">Login/Register</Link>
            </div>
        </React.Fragment>
    )
}
export default Navbar
