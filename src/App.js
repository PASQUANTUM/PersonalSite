import './css/app.css';
import React, {useState} from "react";
import  styled, { ThemeProvider } from 'styled-components';
import {lightTheme, darkTheme, GlobalStyles} from './themes.js';
import { Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {UserAuth} from './contexts/AuthContext'
const LOGO = require('./assets/LOGO.png')

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {

  const [theme, setTheme] = useState('dark')
  const {user,logout} = UserAuth()
  const navigate = useNavigate()
  const [error, setError] = useState('');

  async function handleLogout() {
    setError("")
    try {
      await logout()
      navigate('/login')
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles/>
      <StyledApp>
        <div className='topbar "position-absolute top-0 start-0"'></div>
        <Image src={LOGO} roundedCircle className='mt-5 position-relative start-50 translate-middle'/>
        <div className="position-absolute top-0 start-0">
          <ToggleButton variant='light' onClick={() => setTheme('light')}>Light</ToggleButton>
          <ToggleButton variant='dark' onClick={() => setTheme('dark')}>Dark</ToggleButton>
        </div>

        {!user&&<div className="position-absolute top-0 end-0">
          <Link to='/login'><Button variant="outline-success">Log In</Button></Link>
          <Link to='/signup'><Button variant="outline-dark">Sign Up</Button></Link>
        </div>}
        
        {user && <div className="position-absolute top-0 end-0">
          <Link to='/signup'><Button onClick={handleLogout} variant="outline-danger">Log Out</Button></Link>
        </div>}
        
      </StyledApp>
    </ThemeProvider>
  )
}

export default App;
