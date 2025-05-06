import React, { useState, useEffect } from 'react';
import './PasswordStrengthMeter.scss'; // Create this file for styling

const PasswordStrengthMeter = ({ password }) => {
  const [strength, setStrength] = useState(0);
  const [feedback, setFeedback] = useState([]);
  
  useEffect(() => {
    // Reset if password is empty
    if (!password) {
      setStrength(0);
      setFeedback([]);
      return;
    }
    
    let currentStrength = 0;
    const checks = [];
    
    // Length check
    if (password.length >= 8) {
      currentStrength += 20;
    } else {
      checks.push('Must be at least 8 characters');
    }
    
    // Uppercase check
    if (/[A-Z]/.test(password)) {
      currentStrength += 20;
    } else {
      checks.push('Add an uppercase letter');
    }
    
    // Lowercase check
    if (/[a-z]/.test(password)) {
      currentStrength += 20;
    } else {
      checks.push('Add a lowercase letter');
    }
    
    // Number check
    if (/\d/.test(password)) {
      currentStrength += 20;
    } else {
      checks.push('Add a number');
    }
    
    // Special character check
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      currentStrength += 20;
    } else {
      checks.push('Add a special character');
    }
    
    setStrength(currentStrength);
    setFeedback(checks);
  }, [password]);
  
  const getColor = () => {
    if (strength < 40) return '#dc3545'; // Bootstrap danger
    if (strength < 70) return '#ffc107'; // Bootstrap warning
    return '#28a745'; // Bootstrap success
  };
  
  const getLabel = () => {
    if (strength < 40) return 'Weak';
    if (strength < 70) return 'Moderate';
    return 'Strong';
  };
  
  return (
    <div className="password-strength-meter">
      <div className="strength-bar">
        <div 
          className="strength-fill" 
          style={{ width: `${strength}%`, backgroundColor: getColor() }} 
        />
      </div>
      
      <div className="strength-label" style={{ color: getColor() }}>
        {password && getLabel()}
      </div>
      
      {feedback.length > 0 && (
        <ul className="strength-feedback">
          {feedback.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PasswordStrengthMeter;