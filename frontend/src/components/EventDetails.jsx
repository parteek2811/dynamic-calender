import React from 'react';

export default function EventDetails({ event, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded">
        <h2 className="text-xl font-bold mb-4">Event Details</h2>
        <p><strong>Title:</strong> {event.title}</p>
        <p><strong>Description:</strong> {event.description}</p>
        <p><strong>Start:</strong> {event.start}</p>
        <p><strong>End:</strong> {event.end}</p>
        <p><strong>All Day:</strong> {event.allDay ? 'Yes' : 'No'}</p>
        <button onClick={onClose} className="mt-4 bg-blue-500 text-white p-2 rounded">Close</button>
      </div>
    </div>
  );
}
