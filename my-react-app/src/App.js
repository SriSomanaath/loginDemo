// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogIn from './components/LogIn'; // Adjust the path based on your project structure

function App() {
  const token = useSelector((state) => state.auth.token);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Adjust your routes based on your application structure */}
          <Route path="/logIn" element={<LogIn />} />
        </Routes>
      </BrowserRouter>

      {/* Add any other components or content here */}
    </>
  );
}

export default App;
