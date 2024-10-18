import 'bootstrap/dist/css/bootstrap.min.css';
import './css/login.css';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Login=()=>{
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
  

    const handleLogin = async (event) => {
        event.preventDefault();

        const loginData = {
            Email,
            Password
        };
        try {
            const response = await fetch('http://localhost:9091/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(loginData),
            });
      
            if (!response.ok) {
              const errorData = await response.json();
              throw new Error(errorData.message || 'Login failed! Please try again.');
            }
            navigate('/');
      
            const data = await response.json();
            setSuccessMessage("Login successful! User ID: " + data.id);
           
            setErrorMessage(''); 
          
      
      
           } catch (error) {
            setErrorMessage(error.message);
            uccessMessage('');
          } 
    };
    return(
        <div className="login">
            <form onSubmit={handleLogin}>
            {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
          {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}

                <div class="form-group">
                    <label for="InputEmail1">Email address:</label>
                    <input 
                    type="email"
                    class="form-control" 
                    id="InputEmail1"  
                    placeholder="Enter email"
                    value={Email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    />
                </div>
                <div class="form-group">
                    <label for="InputPassword1">Password</label>
                    <input 
                    type="password" 
                    class="form-control" 
                    id="InputPassword1" 
                    placeholder="Password"
                    value={Password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                    />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
 
}

export default Login;