import {React, useRef, useState} from 'react';
import { Button,Form,Alert } from 'react-bootstrap';
import {Link,useNavigate} from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext';

export default function LogIn() {

  const emailRef = useRef();
  const [error, setError] = useState('');
  const [msg, setMessage] = useState('');
  const {resetPassword} = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    try {
      await resetPassword(emailRef.current.value);
      setMessage(`Reset email was sent to ${emailRef.current.value}! Please also check Spam Ordner!`)
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }

};

  return (
    <div className ='container'>
        <Form className='border w-50 rounded position-relative start-50 translate-middle' onSubmit={handleSubmit}>
        <h2 className='m-2'>Reset Password</h2>
          <Form.Group className='m-2'>
            <Form.Control ref={emailRef} className='mb-3'type='email'placeholder='Enter Email' name='email'></Form.Control>
            <Button type='submit'variant='dark'>Submit</Button>
          </Form.Group>
        </Form>
        {error && <Alert className='w-50 start-50 translate-middle'variant="danger">{error}</Alert>}
        {msg && <Alert className='w-50 start-50 translate-middle'variant="success">{msg}</Alert>}
    </div>
  )
}
