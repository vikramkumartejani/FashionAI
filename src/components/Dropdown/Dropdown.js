import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

import './dropdown.css';

const CustomDropdown = ({ showError, handleDropdownChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (location) => {
    setSelectedOption(location);
    handleDropdownChange(location);
    setIsOpen(false);
  };

  const locations = [
    'ESTJ',
    'ENTJ',
    'ESFJ',
    'ENFJ',
    'ISTJ',
    'ISFJ',
    'INTJ',
    'INFJ',
    'ESTP',
    'ESFP',
    'ENTP',
    'ENFP',
    'ISTP',
    'ISFP',
    'INTP',
    'INFP',
  ];

  return (
    <div className={`dropdown-container ${selectedOption ? 'selected' : showError ? 'error' : ''}`}>
    <div className="custom-dropdown" onClick={toggleDropdown}>
      <div className="dropdown-header">
        <p className="selected-option">{selectedOption || 'Personality Type'}</p>
        <p className="dropdown-icon">{isOpen ? <MdKeyboardArrowUp className="icon" /> : <MdKeyboardArrowDown className="icon" />}</p>
      </div>
      {isOpen && (
        <ul className="dropdown-options">
          {locations.map((location, index) => (
            <li key={index} onClick={() => handleOptionClick(location)} className={selectedOption === location ? 'selected' : ''}>
              {location}
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
  );
};

export default CustomDropdown;
