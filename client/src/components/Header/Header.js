import React from 'react';
import {Link,withRouter} from 'react-router-dom';
import './Header.scss';







const Header = ({history}) => {
  const authToken = localStorage.getItem('AUTH_TOKEN');
  
  return (
    <nav className="navbar bg-dark">
      <h1> <Link className='title' to='/'> Share Your Gainz </Link> </h1>

        {
          !authToken ?
        <div className='options'>
          <Link className='option-item' to='/SignInAndSignUp'>Register </Link> 
          <Link className='option-item' to='/SignInAndSignUp'>Sign In </Link> 
        </div> 
        :
        <div className='options'>
          <button type='submit' onClick={() => {localStorage.removeItem('AUTH_TOKEN'); history.push('/')}} className='custom-button option-item'>Sign Out</button>
        </div>
        }
    </nav>
  )

}

export default withRouter(Header);