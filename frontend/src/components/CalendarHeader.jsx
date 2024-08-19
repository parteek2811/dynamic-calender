import React from 'react';
import dayjs from 'dayjs';

export default function CalendarHeader({ month, setMonth }) {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-700 shadow">
      <button onClick={() => setMonth(dayjs(month).subtract(1, 'month'))}>Previous</button>
      <h1 className="text-xl font-bold">{dayjs(month).format('MMMM YYYY')}</h1>
      <button onClick={() => setMonth(dayjs(month).add(1, 'month'))}>Next</button>
    </div>
  );
}
