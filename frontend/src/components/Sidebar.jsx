import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">View Options</h2>
        <button onClick={() => navigate('/day')} className="block w-full text-left">Day</button>
        <button onClick={() => navigate('/week')} className="block w-full text-left">Week</button>
        <button onClick={() => navigate('/month')} className="block w-full text-left">Month</button>
      </div>
    </aside>
  );
}
