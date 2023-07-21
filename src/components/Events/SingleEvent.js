import React from "react";
import EventDate from "./EventDate";
import "./SingleEvent.css";

const SingleEvent = (props) => {
  if (props.singleYear.length === 0) {
    return <h2 className="">Oops! No events found.</h2>;
  }

  return (
    <div className="event-wrapper">
      {props.singleYear.map((event) => (
        <div className="event-item" key={event.evNo}>
          <p className="event-title">{event.title}</p>
          <p className="event-description">{event.description}</p>
          <div className="event-details-container">
            <EventDate date={event.date} />
            <p className="event-location">{event.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleEvent;
