import React from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';


const Header = () => (

    <nav className="navbar bg-dark">
      <h1> <Link className='title' to='/'> Share Your Gainz </Link> </h1>
      <div className='options'>
        <Link className='option-item' to='/register'>Register </Link> 
        <Link className='option-item' to='/signin'>Sign In </Link> 
      </div> 
      

    </nav>


)

export default Header;