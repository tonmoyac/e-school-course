import React from 'react';
import logo from '../../image/Logo.png';
import '../Header.css'

const Header = () => {
    return (
<header className="container">
    <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
    <div className="container-fluid">
        <a className="navbar-brand" href="home">
            <img className="logo" src={logo} alt=""/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav" id="nav">
            <li className="nav-item">
            <a className="nav-link" aria-current="page" href="home">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="course">Course</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="others">Others</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="blog">Blog</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>
</header>
    );
};

export default Header;