import React from 'react';

const SelectedEventCard = ({ event, onDeselect }) => (
  <div className="selected-event-card">
    <h3>{event.event_name}</h3>
    <p>{event.event_category}</p>
    <p>{new Date(event.start_time).toLocaleString()} - {new Date(event.end_time).toLocaleString()}</p>
    <button onClick={() => onDeselect(event.id)}>Deselect</button>
  </div>
);

export default SelectedEventCard;

