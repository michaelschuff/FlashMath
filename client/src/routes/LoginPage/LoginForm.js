import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const LoginForm = (props) => {
  const navigate = useNavigate()
  const { username } = useState('')
  const { pass } = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(username)
  }

  async function loginUser(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const result = await fetch('http://localhost:9999/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    }).then((res) => res.json())

    if(result.status === 'ok'){
      console.log("Got the token: ", result.data)
      navigate('/cards')
    } else{
      document.getElementById('username').className += 'errorInp'
      document.getElementById('password').className += 'errorInp'
      alert(result.error)
    }
    ;
  }

  return (
    <div className='auth-form-container'>
      <h2>Login</h2>
      <form className='login-form' onSubmit={loginUser}>
        <label htmlFor='username'>username</label>
        <input value={username} type='text' placeholder='username' id='username' name='username' />
        <label htmlFor='password'>password</label>
        <input value={pass} type='password' placeholder='********' id='password' name='password' />
        <button className='login-button'>Login</button>
        <Link to='/cards' className='login-button'>
          Continue as Guest
        </Link>
      </form>
      <button className='login-button' onClick={() => props.onFormSwitch('register')}>Don't have an account?</button>
    </div>
  )
}
