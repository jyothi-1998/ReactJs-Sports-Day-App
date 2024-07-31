import React from 'react';
import SelectedEventCard from './SelectedEventCard';

const SelectedEventList = ({ selectedEvents, onDeselect }) => (
  <div className="selected-event-list">
    {selectedEvents.map(event => (
      <SelectedEventCard key={event.id} event={event} onDeselect={onDeselect} />
    ))}
  </div>
);

export default SelectedEventList;

