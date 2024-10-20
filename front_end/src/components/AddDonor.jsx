import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './css/AddDonor.css';

const AddDonor = () => {
    const navigate = useNavigate(); // For navigation after successful signup
    const [name, setName] = useState('');
    const [bloodType, setBloodType] = useState('');
    const [location, setLocation] = useState('');
    const [lastDonationDate, setLastDonatedDate] = useState('');
    const [contact, setContact] = useState('');
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
  
  
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
  
      // Prepare the user data for signup
      const donorData = {
        name,
        bloodType,
        location,
        lastDonationDate,
        contact
      };
  
      try {
        const response = await fetch('http://localhost:9091/donor', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(donorData),
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Add Donor failed! Please try again.');
        }
        navigate('/donors');
  
        const data = await response.json();
        setSuccessMessage("Add donor successful! User ID: " + data.id);
       
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
        <div className="blood-donation-form">
            <form onSubmit={handleSubmit}>
            
                <div className="form-section1">
                <h2>Be a Donor...</h2>
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                    />
                
                    <label htmlFor="bloodType">Blood Type</label>
                    <select
                        id="bloodType"
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
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                
                    <label htmlFor="location">Location</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={location}
                        onChange={(event) => setLocation(event.target.value)}
                        required
                    />
              
                    <label htmlFor="lastDonationDate">Last Donation Date</label>
                    <input
                        type="date"
                        id="lastDonationDate"
                        name="lastDonationDate"
                        value={lastDonationDate}
                        onChange={(event) => setLastDonatedDate(event.target.value)}
                        required
                    />
                
                    <label htmlFor="contact">Contact Number</label>
                    <input
                        type="tel"
                        id="contact"
                        name="contact"
                        value={contact}
                        onChange={(event) => setContact(event.target.value)}
                        required
                    />
                

                <button type="submit">Donate</button>
                </div>
            </form>
        </div>
    );
};

export default AddDonor;
