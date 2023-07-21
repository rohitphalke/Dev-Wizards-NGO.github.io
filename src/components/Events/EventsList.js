import React from "react";
import SingleEvent from "./SingleEvent";
import "./EventsList.css";

const EventsList = (props) => {
  if (props.eventItems.length === 0) {
    return <h2 className="expenses-list__fallback">Found no events.</h2>;
  }

  return (
    <div className="EventsList">
          {props.eventItems.map((event) => (
            <SingleEvent key={event.id} 
            singleYear={event.events} />
          ))}
    </div>
  );
};

export default EventsList;
