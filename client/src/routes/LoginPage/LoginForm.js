import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const LoginForm = (props) => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [pass, setPass] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(username)
  }

  async function loginUser (event) {
    event.preventDefault()
    const result = await fetch('http://localhost:9999/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ${}'
      },
      body: JSON.stringify({
        username,
        password: pass // Use the state value for password
      })
    }).then((res) => res.json())

    if (result.status === 'ok') {
      console.log('Got the token: ', result.data)
      const token = result.data
      localStorage.setItem('jwtToken', token)
      navigate('/cards')
    } else {
      document.getElementById('username').classList.add('errorInp') // Adding class to highlight input
      document.getElementById('password').classList.add('errorInp')
      alert(result.error)
    }
  }

  return (
    <div className='auth-form-container'>
      <h2>Login</h2>
      <form className='login-form' onSubmit={loginUser}>
        <label htmlFor='username'>username</label>
        <input
          value={username}
          type='text'
          placeholder='username'
          id='username'
          name='username'
          onChange={(e) => setUsername(e.target.value)} // Update state on change
        />
        <label htmlFor='password'>password</label>
        <input
          value={pass}
          type='password'
          placeholder='********'
          id='password'
          name='password'
          onChange={(e) => setPass(e.target.value)} // Update state on change
        />
        <button className='login-button'>Login</button>
        <Link to='/cards' className='login-button'>
          Continue as Guest
        </Link>
      </form>
      <button className='login-button' onClick={() => props.onFormSwitch('register')}>
        Don't have an account?
      </button>
    </div>
  )
}
