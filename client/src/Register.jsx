import React, { useState } from "react";

export const Register = (props) => {
    const { email, setEmail } = useState('');
    const { pass, setPass } = useState('');
    const { name, setName } = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">name</label>
            <input value={name} /*onChange={(e) => setName(e.target.value)}*/ type="name" placeholder="name" id="name" name="name"></input>
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"></input>
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"></input>
            <button>Register</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account?</button>
        </div>
    );
}