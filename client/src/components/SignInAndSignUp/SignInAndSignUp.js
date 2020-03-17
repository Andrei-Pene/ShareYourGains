import React from 'react';
import './SignInAndSignUp.scss';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>

)
export default SignInAndSignUpPage;