import React from 'react';
import './css/card.css'; // Optional: If you want to add custom CSS for styling

const Card = ({ donor }) => {
    
  return (
    <div className="donor-card">
      <div className="donor-card-header">
        <h3>{donor.name}</h3>
        <p className="blood-type">Blood Type: <strong>{donor.bloodType}</strong></p>
      </div>
      <div className="donor-card-body">
        <p><strong>Location:</strong> {donor.location}</p>
        <p><strong>Last Donation Date:</strong> {donor.lastDonationDate}</p>
        <p><strong>Contact:</strong> {donor.contact}</p>
      </div>
      <div className="donor-card-footer">
        <button className="contact-button">Contact Donor</button>
      </div>
    </div>
  );
};

export default Card;