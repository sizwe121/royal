import React from 'react';
import ReactDOM from 'react-dom/client'; // Use createRoot for React 18+
import './index.css'; // Import your main CSS file
import App from './App'; // Import your main App component

// Create a root to render your React application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
