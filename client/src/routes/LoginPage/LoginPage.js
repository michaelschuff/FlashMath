import React, { useState } from 'react'
// import logo from './logo.svg';
import './LoginPage.css'
import { LoginForm } from './LoginForm.js'
import { RegisterForm } from './RegisterForm.js'
import { Logo } from '../../components/Branding/Logo.js'

function LoginPage () {
  const [currentForm, setCurrentForm] = useState('login')

  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }
  return (
    <div>
        <Logo />
      <div className='Login'>
        {
          currentForm === 'login' ? <LoginForm onFormSwitch={toggleForm} /> : <RegisterForm onFormSwitch={toggleForm} />
        }
      </div>
    </div>
  )
}

export default LoginPage
