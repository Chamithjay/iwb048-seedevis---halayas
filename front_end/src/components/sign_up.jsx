
import React, { useState } from 'react';
import {  Link,useNavigate } from 'react-router-dom';
import './css/signUp.css';
import Blood from './images/signUp.png'


const SignupPage = () => {
  const navigate = useNavigate(); 
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");



  const handleSignup = async (event) => {
    event.preventDefault();

    
    const userData = {
      fullName,
      phoneNumber,
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost:9091/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Signup failed! Please try again.');
      }
      navigate('/login');

      const data = await response.json();
      setSuccessMessage("Signup successful! User ID: " + data.id);
     
      setErrorMessage('');

      // Reset form fields
      setFirstName('');
      setPassword('');

     } catch (error) {
      setErrorMessage(error.message);
      setSuccessMessage('');
    } 
  };

  return (

      <div className="signup-page">
        <div className="signup-container">
          <div className="form-section">
            <form  onSubmit={handleSignup}>
              <h2>Sign Up</h2>
  
              {/* Displaying Messages */}
              {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
              {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
  
              {/* Personal Information */}
                <label>
                  Full Name:
                  <input
                    type="text"
                    name="fullName"
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                    required
                  />
                </label>
  
                <label>
                  Phone Number:
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={(event) => setPhone(event.target.value)}
                    required
                  />
                </label>
  
                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </label>
  
                <label>
                  Password:
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                  />
                </label>
  
              <button type="submit">Submit</button>
  
            </form>
            
            <p>
              If you already have an account <Link to="/login">Login</Link>
            </p>
          </div>
  
          {/* Image Section */}
          <div className="image-section">
            <img src={Blood} alt="Donation Image" />
          </div>
        </div>
      </div>
    );
};

export default SignupPage;