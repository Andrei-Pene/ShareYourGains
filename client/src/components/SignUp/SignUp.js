import React,{useState} from 'react';
import {useMutation} from '@apollo/react-hooks'
import FormInput from '../form-input/Form-Input';
import {CREATE_USER} from '../../mutations';
import Loader from 'react-loader-spinner';
import './SignUp.scss';
import {withRouter} from 'react-router-dom';



const SignUp = ({history}) => {
  const [formValues,setFormValues] = useState({displayName : '', email : '', password : '',});
  const [addUser, user] = useMutation(CREATE_USER);

if(user.loading) {
    return <Loader />
}

if(user.error) {
    return <p>No Data Found</p>
}



const handleChange = e => {
    const {name, value} = e.target
    setFormValues({...formValues, [name]: value})
}

const submit = e => {
  e.preventDefault();
  addUser({
    variables : {
      newUser : formValues
    }
  });
  history.push('/WorkoutShowcase');

}
    return (
        <div className='sign-up'>
          <h2 className='title'>I do not have a account</h2>
          <span>Sign up with your email and password</span>
          <form className='sign-up-form' onSubmit={submit}>
            <FormInput
              type='text'
              name='displayName'
              value={formValues.displayName}
              onChange={handleChange}
              label='Display Name'
              required
            />
            <FormInput
              type='email'
              name='email'
              value={formValues.email}
              onChange={handleChange}
              label='Email'
              required
            />
            <FormInput
              type='password'
              name='password'
              value={formValues.password}
              onChange={handleChange}
              label='Password'
              required
            />
            
            <button className='custom-button' type='submit'>Sign Up </button>
          </form>
        </div>
      );

}
export default withRouter(SignUp);