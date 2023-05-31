import React from 'react';
import { Link } from 'react-router-dom';
// import Home from './home';
// import Dashboard from 'dashboard';

const NavBar = () => {
    const HOme = 'home'
    return ( 
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/admin">Admin</Link></li>
        </ul>
        
    </nav> );
}
 
export default NavBar;