import react from 'react';
import './css/footer.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Logo1 from './images/logoimg.png';
import Logo from './images/logo.png';

function Footer(){
    return(
        <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="footer-logo">
                <img src={Logo1} alt="logo" style={{ width: '30px', height: '30px' }} />
                <img src={Logo} alt="logo" style={{ width: 'auto', height: '30px' }} />
            </div>
            <br/>
            <p>© Vital Drop. All rights reserved.</p>
          </div>
          <div className="col-md-3">
            <h5>Links</h5>
            <div className="footer-links">
              <p><a href="#about">About Us</a></p>
              <p><a href="#contact">Contact Us</a></p>
              <p><a href="#policy">Privacy policy</a></p>
            

            </div>
          </div>
          <div className="col-md-3">
            <h5>Contact</h5>
            <div className="contact-info">
              <p>Email: info@vitalDrop.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
            </div>
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <ul className="footer-social">
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a></li>
            </ul>
          </div>
        </div>
        
      </div>
    </footer>
    )
}

export default Footer