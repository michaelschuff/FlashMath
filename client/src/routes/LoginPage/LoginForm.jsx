import React, { useState } from 'react'

export const LoginForm = (props) => {
  const { email, setEmail } = useState('')
  const { pass, setPass } = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email)
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
    } else{
      alert(result.error)
    }
    ;
  }

  return (
    <div className='auth-form-container'>
      <h2>Login</h2>
      <form className='login-form' onSubmit={loginUser}>
        <label htmlFor='username'>username</label>
        <input type='text' placeholder='username' id='username' />
        <label htmlFor='password'>password</label>
        <input type='password' placeholder='********' id='password' name='password' />
        <button className='login-button'>Login</button>
      </form>
      <button className='link-btn' onClick={() => props.onFormSwitch('register')}>Don't have an account?</button>
    </div>
  )
}
