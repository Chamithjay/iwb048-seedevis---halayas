import React, { useState } from 'react';
import './css/filter.css'; 




const Filter = () => {
return (
    <div className="filter-container">
         <div className="filter-group-row">
            <div className="filter-group">
                <label>Condition: </label>
                <select className="filter-select" >
                <option value="">All</option>
              
          
                </select>
            </div>
            <div className="filter-group">
                <label>Blood Type: </label>
                <select className="filter-select" >
                <option value="">All</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>

                                </select>
            </div>
            <div className="filter-group">
                <label>Location: </label>
                <select className="filter-select" >
                <option value="">All</option>
                <option value="Kathmandu">Colombo</option>
                <option value="Lalitpur">Gampaha</option>
                <option value="Bhaktapur">Kandy</option>
                <option value="Pokhara">Galle</option></select>
            </div>
        </div>
    </div>
  );
};

export default Filter;