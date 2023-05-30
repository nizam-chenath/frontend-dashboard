import React, { useState } from 'react';
import './RegisterPage.css';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const   navigate = useNavigate()

  const handleRegister = async(e) => {
    e.preventDefault();
    try{
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Registration successful, redirect or show success message
        console.log('Registration successful');
        navigate("/login")
        
      } else {
        // Registration failed, display error message
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Registration failed', error);
    }
  }
    
    
    

  return (
    <div className="register-page">
      <h2>Register</h2>
      <div className="register-form">
      
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
};

export default RegisterPage;
