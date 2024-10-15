import React, { useState } from 'react';
import axios from 'axios';
import cors from 'cors';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setMessage("Please fill in both fields.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080', {
        username,
        password,
      });

      if (response.status === 200) {
        setMessage("User signed up successfully");
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setMessage("User already exists");
      } else {
        setMessage("Error occurred during signup");
      }
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Signup;
