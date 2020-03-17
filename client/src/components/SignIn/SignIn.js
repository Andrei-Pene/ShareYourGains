import React,{useState} from 'react';
import FormInput from '../form-input/Form-Input';
import './SignIn.scss';
import Loader from 'react-loader-spinner';
import {LOGIN_USER} from '../../mutations';
import {useMutation} from '@apollo/react-hooks';
import {withRouter} from 'react-router-dom';
import {AUTH_TOKEN} from '../../constants/contants';


const SignIn = ({history}) => {
    
    const [formValues,setFormValues] = useState({email : '', password : '', });
    const [loginuser, {loading, error}] = useMutation(LOGIN_USER, 
      {
        onCompleted({result}) {
          localStorage.setItem(AUTH_TOKEN, result.token)
          
        }
      }
      );
    const handleChange = e => {
      const {name, value} = e.target
      setFormValues({...formValues, [name]: value})
  }

  if(loading) {
    return <Loader />
  }

  if(error) {
    return <p>No Data Found</p>
  }



  const submit = async e => {
    e.preventDefault();
    await loginuser({
      variables : {
        currentUser : formValues
      }
    });
    
    
    history.push('/WorkoutShowcase');
  
  }


    return (
        <div className='sign-up'>
          <h2 className='title'>I currently have an account</h2>
          <span>Sign in with your email and password</span>
          <form className='sign-up-form' onSubmit={submit} >
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
           
            <button className='custom-button' type='submit'>Sign In </button>
          </form>
        </div>
      );

}
export default withRouter(SignIn);