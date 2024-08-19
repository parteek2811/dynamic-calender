import React from 'react';
import ThemeToggle from './ThemeToggle';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

export default function NavBar() {
  const navigate = useNavigate();
  const currentMonth = dayjs().format('MMMM YYYY');

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow dark:bg-gray-800">
      <div className="flex items-center space-x-4">
        <button onClick={() => navigate('/')} className="text-xl font-bold">{currentMonth}</button>
      </div>
      <div className="flex items-center space-x-4">
        <ThemeToggle />
      </div>
    </nav>
  );
}
