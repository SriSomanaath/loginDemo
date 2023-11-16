// src/components/Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../slices/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser({ phone, otp }));
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>
          Phone:
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <label>
          OTP:
          <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
