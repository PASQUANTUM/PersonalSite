import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Routes ,Route} from 'react-router-dom';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Dashboard from './components/Dashboard';
import { AuthContextProvider } from './contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <App />
      <Routes>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  </AuthContextProvider>
);
