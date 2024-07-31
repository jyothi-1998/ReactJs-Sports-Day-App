import React from 'react';

const EventCard = ({ event, onSelect }) => (
  <div className="event-card">
    <h3>{event.event_name}</h3>
    <p>{event.event_category}</p>
    <p>{new Date(event.start_time).toLocaleString()} - {new Date(event.end_time).toLocaleString()}</p>
    <button onClick={() => onSelect(event)}>Select</button>
  </div>
);

export default EventCard;

