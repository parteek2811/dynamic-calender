import React from 'react';
import { useDrop } from 'react-dnd';
import Event from './Event';

export default function DragAndDrop({ events, moveEvent }) {
  const [, drop] = useDrop(() => ({
    accept: 'event',
    drop: (item, monitor) => {
      const offset = monitor.getSourceClientOffset();
      moveEvent(item.id, offset);
    },
  }));

  return (
    <div ref={drop} className="calendar-grid">
      {events.map(event => (
        <Event key={event.id} event={event} />
      ))}
    </div>
  );
}
