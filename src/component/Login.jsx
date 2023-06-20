import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import '../Styles/Login.css';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../firebase';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState('');
  const handleLogin = () => {
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    if(!email || !password ){
        setError('Please fill all the details')
      }

    signInWithEmailAndPassword(auth, email, password).then( async(res) => {
       
        navigate('/')
        
      }
        ).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage)
        setError(errorMessage)
        // ..
        });
  };

  return (
    <div className="login-container">
      <div className="neomorphism-card">
        <h2>Login</h2>
        <form>
        <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <p className='error'>
            {error}
          </p>
          <button className='btn' type="button" onClick={handleLogin}>Login</button>
          <p>
            Don't have an account? <Link className='link' to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
