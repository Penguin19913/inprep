import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const BatchDropdown = ({ onSelect }) => {
  const { allBatches } = useContext(AppContext);

  return (
    <select
      className="border rounded px-3 py-2 text-gray-700"
      onChange={e => onSelect && onSelect(e.target.value)}
      defaultValue=""
    >
      <option value="" disabled>
        Select Batch
      </option>
      {allBatches.map(batch => (
        <option key={batch._id} value={batch.batchTitle}>
          {batch.batchTitle}
        </option>
      ))}
    </select>
  );
};

export default BatchDropdown;