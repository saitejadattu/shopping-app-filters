// components/CollapsibleFilter.jsx
import React, { useState } from "react";
import { TfiAngleDown, TfiAngleUp } from "react-icons/tfi";

const CollapsibleFilter = ({ title, options = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="dropdown-alignment" onClick={() => setIsOpen(!isOpen)}>
        <button className="dropdown-button text-button">{title}</button>
        <div>{isOpen ? <TfiAngleUp /> : <TfiAngleDown />}</div>
      </div>
      <p className="all-text-para">All</p>
      {isOpen && (
        <div>
          <ul className="filter-unordered-container">
            <li>
              <button className="text-button unselect-button">Unselect all</button>
            </li>
            {options.map((option, idx) => (
              <li key={idx}>
                <input type="checkbox" id={`${title}-${option}`} />
                <label htmlFor={`${title}-${option}`}>{option}</label>
              </li>
            ))}
          </ul>
        </div>
      )}
      <hr />
    </div>
  );
};

export default CollapsibleFilter;
