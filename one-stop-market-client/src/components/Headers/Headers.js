import React from 'react';
import { Link } from 'react-router-dom';
import './Headers.css';

const Headers = () => {
    return (
        <div className = "header">
            <img className="logo" src="https://cdn5.f-cdn.com/contestentries/130260/1771660/548a88c81eb74_thumb900.jpg" alt=""/> 
            <nav className = "menu"> 
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/orders">Orders</Link>
                    </li>
                    <li>
                        <Link to="/admin">Admin</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Headers;