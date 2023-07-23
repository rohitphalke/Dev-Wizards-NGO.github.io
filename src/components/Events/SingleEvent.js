import React from "react";
import EventDate from "./EventDate";
import "./SingleEvent.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SingleEvent = (props) => {
  if (props.singleYear.length === 0) {
    return <h2 className="no-events">Found no events.</h2>;
  }

  return (
    <div className="event-wrapper  col-md-12 col-lg-8 offset-lg-2">
      {props.singleYear.map((event) => (
        <div
          className="event-item causes causes-2 text-center ftco-animate fadeInUp ftco-animated"
          key={event.evNo}
        >
          <p className="event-title goal mb-4">{event.title}</p>
          <p className="event-description">{event.description}</p>
          <div className="event-details-container">
            <EventDate date={event.date} />
            <p className="event-location ">{event.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleEvent;
