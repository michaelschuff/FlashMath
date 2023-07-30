import React from 'react';

export const RegisterForm = (props) => {
  async function registerUser(event) {
    event.preventDefault();
    const username = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const result = await fetch('http://localhost:9999/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        email,
        password
      })
    }).then((res) => res.json());
  }

  return (
    <div className='auth-form-container'>
      <h2>Register</h2>
      <form className='register-form' onSubmit={registerUser}>
        <label htmlFor='name'>name</label>
        <input type='text' placeholder='name' id='name' name='name' />
        <label htmlFor='email'>email</label>
        <input type='email' placeholder='youremail@gmail.com' id='email' name='email' />
        <label htmlFor='password'>password</label>
        <input type='password' placeholder='********' id='password' name='password' />
        <input type="submit" value="Submit Form" />
      </form>
      <button className='link-btn' onClick={() => props.onFormSwitch('login')}>Already have an account?</button>
    </div>
  );
};
