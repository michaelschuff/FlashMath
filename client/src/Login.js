import React, { useState } from "react";
// import logo from './logo.svg';
import './App.css';
import { LoginPage } from './LoginPage.jsx';
import { Register } from './Register.jsx';

function Login() {
  const [ currentForm, setCurrentForm ] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }
  return (
    <div className="Login">
        {
          currentForm === "login" ? <LoginPage onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
        }
    </div>
  );
}

export default Login;