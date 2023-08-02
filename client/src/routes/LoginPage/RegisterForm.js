import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const RegisterForm = (props) => {
  const { email } = useState('')
  const { pass } = useState('')
  const { username } = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email)
  }

  return (
    <div className='auth-form-container'>
      <h2>Register</h2>
      <form className='register-form' onSubmit={handleSubmit}>
        <label htmlFor='username'>username</label>
        <input value={username} type='username' placeholder='username' id='username' name='username' />
        <label htmlFor='email'>email</label>
        <input value={email} type='email' placeholder='youremail@gmail.com' id='email' name='email' />
        <label htmlFor='password'>password</label>
        <input value={pass} type='password' placeholder='********' id='password' name='password' />
        {/* <button>Register</button> */}
        <Link className='login-button' to='/cards'>
          Register
        </Link>
        <Link className='login-button' to='/cards'>
          Continue as Guest
        </Link>
      </form>
      <button className='link-btn' onClick={() => props.onFormSwitch('login')}>Already have an account?</button>
    </div>
  )
}