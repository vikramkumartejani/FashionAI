import React from 'react';
import './LoadingSpinner.css'

const LoadingSpinner = () => {
  return (
    <div className="loader-container">
    <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  </div>
  );
};

export default LoadingSpinner;
