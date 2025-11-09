import React, { useState } from 'react';
import './ANEWSWebsLogin.css';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy auth logic
    if (email === 'admin@anews.com' && password === '1234') {
      onLogin(); // Call callback to notify parent component
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-wrapper">
      <h2>Login to ANEWS</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;