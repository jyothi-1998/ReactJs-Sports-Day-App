
import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';
import eventData from '../data/events.json';
import '../Style/EventList.css';


const EventList = ({ onSelect }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(eventData);
  }, []);

  return (
    <div className="event-list">
      {events.map(event => (
        <EventCard key={event.id} event={event} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default EventList;
