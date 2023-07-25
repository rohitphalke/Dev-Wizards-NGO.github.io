import React from "react";
import SingleEvent from "./SingleEvent";
import "./EventsList.css";

const EventsList = (props) => {
  if (props.eventItems.length === 0) {
    return <h2 className="no-events">Oops! No events found.</h2>;
  }

  return (
    <div className="events-list">
      {props.eventItems.map((event) => (
        <SingleEvent key={event.id} singleYear={event.events} />
      ))}
    </div>
  );
};

export default EventsList;
