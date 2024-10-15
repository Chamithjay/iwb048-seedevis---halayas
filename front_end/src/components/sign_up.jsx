
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Label, TextInput } from "flowbite-react";

const SignupPage = () => {
  const navigate = useNavigate(); // For navigation after successful signup
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async (event) => {
    event.preventDefault();

    // Basic validation
    

    // Validate email format (basic regex)
   

    // Prepare the user data for signup
    const userData = {
      firstName,
      password
    };

    try {
      setLoading(true); // Start loading
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

      const data = await response.json();
      setSuccessMessage("Signup successful! User ID: " + data.id);
      setErrorMessage('');

      // Reset form fields
      setFirstName('');
      setPassword('');

      // Navigate to a different page after successful signup
      navigate(''); // Replace with your desired route

    } catch (error) {
      setErrorMessage(error.message);
      setSuccessMessage('');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex items-center justify-center w-full max-w-md bg-white rounded-lg shadow-md dark:bg-gray-800 p-6">
        <form onSubmit={handleSignup} className="space-y-4 w-full">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white text-center">Create an account</h3>

          {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
          {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
          {loading && <p className="text-blue-500 text-center">Loading...</p>}

          {/* First Name and Last Name */}
          <div className="flex flex-col md:flex-row md:space-x-2">
            <div className="w-full">
              <Label htmlFor="firstName" value="First Name" />
              <TextInput
                id="firstName"
                placeholder="John"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                required
              />
            </div>
            

          {/* Password Input */}
          <div>
            <Label htmlFor="password" value="Password" />
            <TextInput
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              disabled={loading}
            />
          </div>

        </div> 

          <div className="w-full">
            <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-500" disabled={loading}>
              Create Account
            </Button>
          </div>

          <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
            Already have an account?&nbsp;
            <Link to="/home" className="text-cyan-700 hover:underline dark:text-cyan-500">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;