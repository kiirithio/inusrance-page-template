import React from 'react';
import '../NavBar/NavBar.css';

const Navbar = () => {
    return (
        <nav>
            <div className='navLeft'>
                <h1>BrandName</h1>
                <ul>
                    <li>Home</li>
                    <li>Product</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='navRight'>
                <h4>Login</h4>
                <button>Become a member</button>
            </div>
        </nav>
    );
}

export default Navbar;
