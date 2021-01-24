import React from 'react';
import Logo from "../../Images/Logo/logo.jpg"

const Navbar = () => {
    return (
        <React.Fragment>
            <div className="navbar-container">
                <h1>Home</h1>
                <img src={Logo} alt="logo"/>
                <h1>Blogs</h1>
            </div>
        </React.Fragment>
    )
}

export default Navbar
