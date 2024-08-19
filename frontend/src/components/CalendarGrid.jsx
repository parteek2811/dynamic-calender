import React from 'react';
import dayjs from 'dayjs';
import Event from './Event';

export default function CalendarGrid({ month, events }) {
  const daysInMonth = dayjs(month).daysInMonth();
  const startDay = dayjs(month).startOf('month').day();

  return (
    <div className="grid grid-cols-7 gap-2 p-4">
      {Array.from({ length: startDay }, (_, i) => <div key={i}></div>)}
      {Array.from({ length: daysInMonth }, (_, i) => (
        <div key={i} className="border p-2">
          <p>{i + 1}</p>
          {events.filter(event => dayjs(event.start).date() === i + 1).map(event => (
            <Event key={event.id} event={event} />
          ))}
        </div>
      ))}
    </div>
  );
}
