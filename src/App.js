import React, { useState, useEffect } from 'react';
import EventList from './Components/EventList';
import SelectedEventList from './Components/SelectedEventList';
import './App.css';

const App = () => {
  const [selectedEvents, setSelectedEvents] = useState(() => {
    const savedEvents = localStorage.getItem('selectedEvents');
    return savedEvents ? JSON.parse(savedEvents) : [];
  });

  useEffect(() => {
    localStorage.setItem('selectedEvents', JSON.stringify(selectedEvents));
  }, [selectedEvents]);

  const selectEvent = (event) => {
    if (selectedEvents.length >= 3) {
      alert('You can only select up to 3 events.');
      return;
    }

    const conflictingEvent = selectedEvents.find(
      (selectedEvent) =>
        (new Date(selectedEvent.start_time) < new Date(event.end_time)) &&
        (new Date(event.start_time) < new Date(selectedEvent.end_time))
    );

    if (conflictingEvent) {
      alert('This event conflicts with another selected event.');
      return;
    }

    setSelectedEvents([...selectedEvents, event]);
  };

  const deselectEvent = (eventId) => {
    setSelectedEvents(selectedEvents.filter(event => event.id !== eventId));
  };

  return (
    <div className="app">
      <h1>Sports Day Registration</h1>
      <div className="content">
        <EventList onSelect={selectEvent} />
        <SelectedEventList selectedEvents={selectedEvents} onDeselect={deselectEvent} />
      </div>
    </div>
  );
}

export default App;
