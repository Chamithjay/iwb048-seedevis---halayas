import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './components/sign_up';
import Home from './components/home';
import Login from './components/login';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the route for the signup page */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        {/* You can add other routes here for different pages */}
      </Routes>
    </Router>
  );
}

export default App;

