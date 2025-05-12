import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ Import this!
import './index.css';
import App from './App.jsx';
import React from 'react';  // <-- Add this import

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* ✅ Wrap App with this */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
