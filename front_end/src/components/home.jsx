import Card from './card';
import './css/home.css';
import Navbar from './navbar';
import Footer from './footer';
import Hero from './hero';

import React, { useState, useEffect } from 'react';

const home = () => {

        return (
            <div className="home">
                <Navbar />
                <Hero />
                <Footer />

                
                


           
            </div>
        );
    };
    

export default home;