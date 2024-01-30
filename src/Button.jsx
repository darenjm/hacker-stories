import * as React from 'react';
import './App.css';

const Button = ({ onClick, children, label }) => {
    return (
      <button 
        type="button" 
        className="button"
        onClick={onClick}>
        {children}
        {label}
      </button>
    );
  };

  export default Button;