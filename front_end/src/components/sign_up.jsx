
import React, { useState } from 'react';
import {  Link,useNavigate } from 'react-router-dom';
import './css/signUp.css';


const SignupPage = () => {
  const navigate = useNavigate(); // For navigation after successful signup
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [donatedBefore, setDonatedBefore] = useState('');
  const [dateOfBirth, setDOB] = useState('');
  const [lastDonationDate, setLastDonatedDate] = useState('');
  const [weight, setWeight] = useState('');
  const [chronicConditions, setChronicconditions] = useState('');
  const [vaccinations, setVaccinations] = useState('');
  const [bloodConditions, setBloodconditions] = useState('');
  const [pregnant, setPregnant] = useState('');
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");



  const handleSignup = async (event) => {
    event.preventDefault();

    // Basic validation
    

    // Validate email format (basic regex)
   

    // Prepare the user data for signup
    const userData = {
      fullName,
      gender,
      bloodType,
      phoneNumber,
      email,
      password,
      address,  
      donatedBefore,
      lastDonationDate,
      weight,
      chronicConditions,
      vaccinations,
      bloodConditions,
      pregnant
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
    <form className="blood-donation-form" onSubmit={handleSignup}>
      <h2>Blood Donation Registration Form</h2>

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
          Blood Type:
          <select
            name="bloodType"
            value={bloodType}
            onChange={(event) => setBloodType(event.target.value)}
            required
          >
            <option value="">Select Blood Type</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
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

      {/* Donation Information */}
      <div className="form-section">
        <label>
          Have you donated before?
          <select
            name="donatedBefore"
            value={donatedBefore}
            onChange={(event) => setDonatedBefore(event.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>

        {/* Conditional Last Donation Date */}
        {donatedBefore === "yes" && (
          <label>
            Date of Last Donation:
            <input
              type="date"
              name="lastDonationDate"
              value={lastDonationDate}
              onChange={(event) => setLastDonatedDate(event.target.value)}
              required
            />
          </label>
        )}
      </div>

      {/* Eligibility (Health) */}
      <div className="form-section">
        <h3>Health Information</h3>
        <label>
          Weight (kg):
          <input
            type="number"
            name="weight"
            value={weight}
            onChange={(event) => setWeight(event.target.value)}
            required
          />
        </label>


        <label>
          Do you have any chronic conditions?
          <input
            type="text"
            name="chronicConditions"
            value={chronicConditions}
            onChange={(event) => setChronicconditions(event.target.value)}
          />
        </label>

        <label>
          Have you had any vaccinations in the past 4 weeks?
          <select
            name="vaccinations"
            value={vaccinations}
            onChange={(event) => setVaccinations(event.target.value)}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>

        <label>
          Have you been diagnosed with any blood-related conditions (anemia,
          etc.)?
          <input
            type="text"
            name="bloodConditions"
            value={bloodConditions}
            onChange={(event) => setBloodconditions(event.target.value)}
          />
        </label>


        <label>
          Are you pregnant or have you recently given birth?
          <select
            name="pregnant"
            value={pregnant}
            onChange={(event) => setPregnant(event.target.value)}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="na">Not Applicable</option>
          </select>
        </label>
      </div>

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

        <label>
          <input
            type="checkbox"
            name="shareInfo"
            required
          />
          I agree to share my information with health organizations.
        </label>

       

      </div>

      <button type="submit">Submit</button>
      If you already have an account <button><Link href="/login">Login</Link></button>
    </form>
    

  );
};

export default SignupPage;