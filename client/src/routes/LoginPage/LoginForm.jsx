import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const LoginForm = (props) => {
  const { email } = useState('')
  const { pass } = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email)
  }

  return (
    <div className='auth-form-container'>
      <h2>Login</h2>
      <form className='login-form' onSubmit={handleSubmit}>
        <label htmlFor='email'>email</label>
        <input value={email} type='email' placeholder='youremail@gmail.com' id='email' name='email' />
        <label htmlFor='password'>password</label>
        <input value={pass} type='password' placeholder='********' id='password' name='password' />
        {/* <button className='login-button'>Login</button> */}
        <Link to='/cards' className='login-button'>
          Login
        </Link>
        <Link to='/cards' className='login-button'>
          Continue as Guest
        </Link>
      </form>
      <button className='link-btn' onClick={() => props.onFormSwitch('register')}>Don't have an account?</button>
    </div>
  )
}
