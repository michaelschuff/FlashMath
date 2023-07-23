import React, { useState } from 'react'
// import logo from './logo.svg';
import '../App.css'
import { LoginForm } from './LoginForm.jsx'
import { RegisterForm } from './RegisterForm.jsx'

function LoginPage () {
  const [currentForm, setCurrentForm] = useState('login')

  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }
  return (
    <div className='Login'>
      {
          currentForm === 'login' ? <LoginForm onFormSwitch={toggleForm} /> : <RegisterForm onFormSwitch={toggleForm} />
        }
    </div>
  )
}

export default LoginPage
