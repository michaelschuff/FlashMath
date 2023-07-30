import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

export const LoginForm = (props) => {
  const { email, setEmail } = useState('')
  const { pass, setPass } = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email)
  }

  return (
    <div className='auth-form-container'>
      <h2>Login</h2>
      <form className='login-form' onSubmit={handleSubmit}>
        <label htmlFor='email'>email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='youremail@gmail.com' id='email' name='email' />
        <label htmlFor='password'>password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder='********' id='password' name='password' />
        <button className='login-button'>Login</button>
      </form>
      <button className='link-btn' onClick={() => props.onFormSwitch('register')}>Don't have an account?</button>
      {/* <Link to='/EditorPage' className='nav-links'>
          Demo
      </Link> */}
    </div>
  )
}