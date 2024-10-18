import Card from './card';
import './css/home.css';
import React, { useState, useEffect } from 'react';

const home = () => {
        // const [donors, setDonors] = useState([]);
        // const [loading, setLoading] = useState(true);
        // const [error, setError] = useState(null);
    
        // useEffect(() => {
        //     const fetchDonors = async () => {
        //         try {
        //             const response = await fetch('http://localhost:9091/donors');
                    
        //             if (!response.ok) {
        //                 throw new Error('Network response was not ok');
        //             }
                    
        //             const data = await response.json();
        //             setDonors(data);
        //         } catch (error) {
        //             setError(error.message);
        //         } finally {
        //             setLoading(false);
        //         }
        //     };
    
        //     fetchDonors();
        // }, []); // Empty dependency array means this runs once when the component mounts
    
        // if (loading) {
        //     return <p>Loading...</p>;
        // }
    
        // if (error) {
        //     return <p>Error: {error}</p>;
        // }
    
        return (
            <div className="donor-list">
                {/* {donors.map((donor, index) => (
                    <Card key={index} donor={donor} />
                ))} */}
                <Card donor={{ name: 'John Doe', bloodType: 'O+', location: 'New York', lastDonationDate: '2021-01-01', contact: '1234567890' }} />
            </div>
        );
    };
    

export default home;