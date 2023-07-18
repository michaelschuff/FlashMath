import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from './Login.jsx';
import { Register } from './Register.jsx';
import { CardPage } from './CardPage.jsx';
// import './CardPage.css';

function App() {
  const [ currentForm, setCurrentForm ] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }
  return (
    <div className="App">
        {
          currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
          // <CardPage> </CardPage>
        }
    </div>
  );
}

export default App;
