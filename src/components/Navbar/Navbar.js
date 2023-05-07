import React from 'react';
import "./styles/Navbar.css"; 
import { Link } from "react-router-dom";

export default class Navbar extends React.Component{
render() {
    return (
        <React.Fragment>
        <nav className='Navbar'>		
        <a href="https://torre.co/?r=taZy4opA" className='torreWord'>
        <span className='torre'>torre.</span>
        <span className='torreco'>co</span>
        </a>
            <button  className="SignInB">
                Sign in 
            </button>
        </nav>
        </React.Fragment>
    );
}
};

