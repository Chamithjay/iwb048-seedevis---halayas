
import React, { useState } from 'react';
import {  Link,useNavigate } from 'react-router-dom';
import './css/signUp.css';


const SignupPage = () => {
  const navigate = useNavigate(); 
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [dateOfBirth, setDOB] = useState('');
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");



  const handleSignup = async (event) => {
    event.preventDefault();

    
    const userData = {
      fullName,
      dateOfBirth,
      gender,
      phoneNumber,
      email,
      password,
      address
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
    <div className="sign-up">
    <form className="blood-donation-form" onSubmit={handleSignup}>
      <h2>Sign Up to Vital Drop</h2>

      {/* Personal Information */}
      {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
          {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}

      <div className="form-section">
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
          Date of Birth:
          <input
            type="date"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={(event) => setDOB(event.target.value)}
            required
          />
        </label>

        <label>
          Gender:
          <select
            name="gender"
            value={gender}
            onChange={(event) => setGender(event.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
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
            name="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>

        <label>
          Address:
          <input
            type="text"
            name="address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            required
          />
        </label>
      </div>


      {/* Eligibility (Health) */}
     
      {/* Consent */}
      <div className="form-section">
        <label>
          <input
            type="checkbox"
            name="consent"
            required
          />
          I agree to the terms and conditions.
        </label>

       

      </div>

      <button type="submit">Submit</button>
      
    </form>
    If you already have an account <button><Link href="/login">Login</Link></button>
    </div>
    

  );
};

export default SignupPage;