import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import "./dropdown.css";

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null); // Add this state

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (location) => {
    setSelectedOption(location);
    setSelectedLocation(location); // Store the selected location
    setIsOpen(false);
  };

  const locations = [
    "ESTJ",
    "ENTJ",
    "ESFJ",
    "ENFJ",
    "ISTJ",
    "ISFJ",
    "INTJ",
    "INFJ",
    "ESTP",
    "ESFP",
    "ENTP",
    "ENFP",
    "ISTP",
    "ISFP",
    "INTP",
    "INFP",
  ];

  return (
    <div className="dropdown-container">
      <div className="custom-dropdown">
        <div className="dropdown-header" onClick={toggleDropdown}>
          <p className="selected-option">
            {selectedOption || "Personality Required"}
          </p>
          <p className="dropdown-icon">
            {isOpen ? (
              <MdKeyboardArrowUp className="icon" />
            ) : (
              <MdKeyboardArrowDown className="icon" />
            )}
          </p>
        </div>
        {isOpen && (
          <ul className="dropdown-options">
            {locations.map((location, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(location)}
                className={selectedLocation === location ? " " : ""}
              >
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