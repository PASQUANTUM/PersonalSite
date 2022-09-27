import {React, useRef, useState} from 'react';
import { Button,Form,Alert } from 'react-bootstrap';
import {Link,useNavigate} from 'react-router-dom';
import {GoogleButton} from 'react-google-button';
import { UserAuth } from '../contexts/AuthContext';


export default function SignUp() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState('');
  const {signup} = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }
    try {
      setError('')
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate('/dashboard')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }};

  return (
    <div className ='container'>
      <Form className='border w-50 rounded position-relative start-50 translate-middle' onSubmit={handleSubmit}>
        <h2 className='m-2'>Sign Up</h2>
        <Form.Group className='m-2'>
          <Form.Control ref={emailRef} className='mb-3'type='email'placeholder='Enter Email' name='email'></Form.Control>
          <Form.Control ref={passwordRef} className='mb-3'type='password'placeholder='Enter Password'></Form.Control>
          <Form.Control ref={passwordConfirmRef} className='mb-3'type='password'placeholder='Confirm Password'></Form.Control>
          <Button type='submit' variant='dark'>Sign Up</Button>
          <Link className='m-3' to='/login'>Already Signed In?</Link>
        </Form.Group>
      </Form>
      <GoogleButton className='rounded position-relative start-50 translate-middle'/>
      {error && <Alert variant="danger">{error}</Alert>}
    </div>
  )
}
