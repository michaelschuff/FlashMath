import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const LoginForm = (props) => {
  const { username } = useState('')
  const { pass } = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(username)
  }

  return (
    <div className='auth-form-container'>
      <h2>Login</h2>
      <form className='login-form' onSubmit={handleSubmit}>
        <label htmlFor='username'>username</label>
        <input value={username} type='text' placeholder='username' id='username' name='username' />
        <label htmlFor='password'>password</label>
        <input value={pass} type='password' placeholder='********' id='password' name='password' />
        <button className='login-button'>Login</button>
        {/* <Link to='/cards' className='login-button'>
          Login
        </Link> */}
        <Link to='/cards' className='login-button'>
          Continue as Guest
        </Link>
      </form>
      <button className='link-btn' onClick={() => props.onFormSwitch('register')}>Don't have an account?</button>
    </div>
  )
}