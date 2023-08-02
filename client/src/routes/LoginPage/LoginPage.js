import React, { useState } from 'react'
// import logo from './logo.svg';
import './LoginPage.css'
import { LoginForm } from './LoginForm.js'
import { RegisterForm } from './RegisterForm.js'
import { Logo } from '../SiteItems/Logo.jsx'

function LoginPage () {
  const [currentForm, setCurrentForm] = useState('login')

  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }
  return (
    <div>
      <div class='top-bar'>
        <Logo />
      </div>
      <div className='Login'>
        {
          currentForm === 'login' ? <LoginForm onFormSwitch={toggleForm} /> : <RegisterForm onFormSwitch={toggleForm} />
        }
      </div>
    </div>
  )
}

export default LoginPage
