import React, { useState, useEffect } from 'react';
import Card from './card'; 
import './css/card.css'; 
import Navbar from './navbar';
import Filter from './filters';

const DonorList = () => {
    const [donors, setDonors] = useState([]);

    // Fetch the donor data from the API
    useEffect(() => {
        const fetchDonors = async () => {
            try {
                const response = await fetch('http://localhost:9091/donors'); 
                const data = await response.json();
                setDonors(data); 
            } catch (error) {
                console.error('Error fetching donors:', error);
            }
        };

        fetchDonors(); 
    }, []); 

    return (
        <div>
            <Navbar />
            <Filter />
        <div className="donor-list">
            {donors.length > 0 ? (
                donors.map((donor) => (
                    <Card key={donor.id} donor={donor} /> 
                ))
            ) : (
                <p>Loading donors...</p>
            )}
        </div>
        </div>
    );
};

export default DonorList;
