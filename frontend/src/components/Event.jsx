import React from 'react';
import { useDrag } from 'react-dnd';

export default function Event({ event }) {
  const [, drag] = useDrag(() => ({
    type: 'event',
    item: { id: event.id },
  }));

  return (
    <div ref={drag} className="bg-blue-500 text-white p-1 rounded mt-2">
      {event.title}
    </div>
  );
}
