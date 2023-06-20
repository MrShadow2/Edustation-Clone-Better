import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import '../Styles/Login.css';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';
const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error,setError] = useState('');
  const handleSignup = () => {
    // Handle signup logic here
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Email:', email);
    if (!email || !password || !username) {
      setError('Please fill all the details');
    }
  
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        // Signed in 
        const user = res.user;
        await updateProfile(user, {
          displayName: username
        });
        navigate('/');
        window.location.reload(); // Reload the page
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setError(errorMessage);
        // ..
      });
  };
  

  return (
    <div className="login-container">
      <div className="neomorphism-card">
        <h2>Sign up</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <p className='error'>
            {error}
          </p>
          <button className='btn' type="button" onClick={handleSignup}>Sign up</button>
          <p>
            Already have an account? <Link className='link' to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
