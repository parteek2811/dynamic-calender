import React from 'react';

export default function EventRecurrence({ onRecurrenceChange }) {
  return (
    <div className="flex items-center space-x-4">
      <label>
        Recurrence:
        <select onChange={(e) => onRecurrenceChange(e.target.value)} className="p-2 border rounded">
          <option value="">None</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </label>
    </div>
  );
}
