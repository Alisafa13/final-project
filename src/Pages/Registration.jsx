import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
const Registration = ({ onRegister, toggleForm }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (email && password && firstName && lastName) {
      onRegister({ firstName, lastName, email, password });
      const userProfile = {
        firstName,
        lastName,
        email,
      };
      localStorage.setItem('userProfile', JSON.stringify(userProfile));
  
      setEmail('');
      setPassword('');
      setFirstName('');
      setLastName('');
    } else {
      console.log('Please enter a valid first name, last name, email, and password.');
    }
  };

  return (
    <div className='registrationContainer'>
    <div className="container">
      <h2 className='register'>Register</h2>
      <form className="form" onSubmit={handleRegister}>
      <div className='firstAndLastNameContainer'>
            <div> <label className="label registrationFirstName">First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter your first name"
          className="firstName"
          required
        /></div>
        <div>
        <label className="label registrationLastName">Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Enter your last name"
          className="lastName"
          required
        />
        </div>
        </div>
        <label className="label registrationEmail">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="input"
          required
        />
        <label className="label registrationPassword">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="input"
          required
        />
        <button  type="submit" className="button">
          Register
        </button>
      </form>
      <p className='questionAccount2'>
        Already have an account? <Link to="/login" ><button onClick={toggleForm} className='loginButton'>Login</button></Link>
      </p>
    </div>
    </div>
  );
};

export default Registration;
