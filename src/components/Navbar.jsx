import React from 'react';
import '../components/Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <nav>
        <div className="logo">
            <h1>Company name</h1>
        </div>
        <div className="links">
            <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Enterprise</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Pricing</a></li>
                <button>Sign up</button>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
