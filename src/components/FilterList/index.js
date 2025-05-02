// components/FilterList.jsx
import React from "react";
import CollapsibleFilter from "../CollapsibleFilter";
import "./index.css";

const filtersData = [
  { title: "IDEAL FOR", options: ["Men", "Women", "Baby & Kids"] },
  { title: "OCCASION", options: ["Work"] },
  { title: "WORK", options: ["Casual", "Fabric", "Wedding"] },
  { title: "FABRIC", options: ["Cotton", "Linen", "Silk"] },
  { title: "SEGMENT", options: ["Men", "Women", "Baby & Kids"] },
  { title: "SUITABLE FOR", options: ["Men", "Women", "Baby & Kids"] },
  { title: "RAW MATERIALS", options: ["Cotton", "Wool", "Polyester"] },
  { title: "PATTERN", options: ["Roll-Up Sleeve", "Regular Sleeves", "Long Sleeve", "Full Sleeve"] },
];

const FilterList = () => {
  return (
    <div>
      <div className="customizble-checkbox-container">
        <input className="customizble-checkbox" type="checkbox" />
        <p>CUSTOMIZBLE</p>
      </div>
      <hr />
      <div className="dropdown">
        {filtersData.map((filter, idx) => (
          <CollapsibleFilter key={idx} title={filter.title} options={filter.options} />
        ))}
      </div>
    </div>
  );
};

export default FilterList;
