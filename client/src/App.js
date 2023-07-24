import React from "react";
import { Routes, Route } from "react-router-dom";
// import logo from './logo.svg';
// import CardPage from './Card.js'
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    // comment or uncomment the lines below

    // <Card> </Card>
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
    </Routes>
  );
}

export default App;
