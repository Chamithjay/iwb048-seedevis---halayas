import React from 'react'
import './CSS/Hero.css'
import main_img from './images/main.png'

const Hero = () =>{
    return(
        <div className='MainContainer'>
            <div className='main-image'>
                
                <img src={main_img} alt="main img" />
            </div>
                
                <div className='text-overlay'>
                    <h1>Be a Lifeline <br />Donate Blood Today!</h1>
                    <p>Register as a blood donor or request blood in times of need. Together, we can save lives and prevent wastage.</p>
                    <div className="cta-buttons">
                        <button className="register-btn">Register as a Donor</button>
                        <button className="request-btn">Request Blood</button>
                    </div>

                
            </div>
            

            
        </div>
    )
}
export default Hero;