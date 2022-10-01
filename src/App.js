import './css/app.css';
import React, {useState} from "react";
import  styled, { ThemeProvider } from 'styled-components';
import {lightTheme, darkTheme, GlobalStyles} from './themes.js';
import { Image,Alert,ToggleButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,useNavigate} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import {UserAuth} from './contexts/AuthContext';
//import { getAuth, onAuthStateChanged } from "firebase/auth";
const LOGO = require('./assets/LOGO.png');

export const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {

  const [theme, setTheme] = useState('dark')
  const {user,logout} = UserAuth()
  const [error, setError] = useState('');
  const navigate = useNavigate()
  //const auth = getAuth();

  async function handleLogout() {
    setError("")
    try {
      await logout()
      navigate('')
    } catch {
      setError("Failed to log out")
    }
  }

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {navigate('')}});

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
          <Link to='/dashboard'>
            <Image roundedCircle className='profilepicture'src="https://lh3.googleusercontent.com/a-/ACNPEu9ukyP4YuiblRSJGUeRNYidIOIEY5yWMweHFheBPw=s96-c"></Image>
            <Button disabled className='mx-1'variant='dark' >{user.displayName}</Button>
          </Link>
          <Link to=''><Button onClick={handleLogout} variant="outline-danger">Log Out</Button></Link>
        </div>}

        {error && <Alert className='w-50 p-1 start-50 translate-middle'variant="danger">{error}</Alert>}
      </StyledApp>
    </ThemeProvider>
  )
}

export default App;
