import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import CalendarHeader from './components/CalendarHeader';
import CalendarGrid from './components/CalendarGrid';
import EventModal from './components/EventModal';
import EventDetails from './components/EventDetails';
import DragAndDrop from './components/DragAndDrop';
import EventRecurrence from './components/EventRecurrence';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export default function App() {
  const [month, setMonth] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleAddEvent = (eventData) => {
    setEvents([...events, eventData]);
    setShowModal(false);
  };

  const handleMoveEvent = (id, offset) => {
    // Implement drag-and-drop logic here
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app-container">
        <NavBar />
        <div className="flex">
          <Sidebar />
          <div className="flex-grow">
            <CalendarHeader month={month} setMonth={setMonth} />
            <CalendarGrid month={month} events={events} />
          </div>
        </div>
        {showModal && (
          <EventModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            onSubmit={handleAddEvent}
          />
        )}
        {showDetails && (
          <EventDetails event={selectedEvent} onClose={() => setShowDetails(false)} />
        )}
      </div>
    </DndProvider>
  );
}
