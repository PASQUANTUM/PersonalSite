import {React, useRef, useState} from 'react';
import { Button,Form,Alert } from 'react-bootstrap';
import {Link,useNavigate} from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext';

export default function LogIn() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const {login} = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(emailRef.current.value, passwordRef.current.value);
      navigate('/dashboard')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }};

  return (
    <div className ='container'>
        <Form className='border w-50 rounded position-relative start-50 translate-middle' onSubmit={handleSubmit}>
        <h2 className='m-2'>Log In</h2>
          <Form.Group className='m-2'>
            <Form.Control ref={emailRef} className='mb-3'type='email'placeholder='Enter Email' name='email'></Form.Control>
            <Form.Control ref={passwordRef} className='mb-3'type='password'placeholder='Enter Password'></Form.Control>
            <Button type='submit'variant='dark'>Log In</Button>
          </Form.Group>
        </Form>
        {error && <Alert variant="danger">{error}</Alert>}
    </div>
  )
}
