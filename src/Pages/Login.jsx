import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { Link } from 'react-router-dom';
const Login = ({ registeredUsers, onLogin, toggleForm }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {
    if (email && password) {
      const isUserValid = onLogin({ email, password });
      if (isUserValid) {
        navigate('/main');
      } else {
        console.log('Invalid email or password.');
      }
      
      const userProfile = JSON.parse(localStorage.getItem('userProfile')) || null;
      localStorage.setItem("userProfile", JSON.stringify(userProfile));
    } else {
      console.log('Please enter a valid email and password.');
    }
  };

  return (
    <div className='loginContainer'>
    <div className="container">
      <h2 className='login'>Login</h2>
      <form className="form">
        <label className="label loginEmail">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="input"
          required
        />
        <label className="label loginPassword">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="input"
          required
        />
        <button type="button" onClick={handleLogin} className="button">
          Login
        </button>
      </form>
      <p className='questionAccount1'>
        Don't have an account? <Link to="/register"><button onClick={toggleForm} className='registerButton'>Register</button></Link>
      </p>
    </div>
    </div>
  );
};

export default Login;
