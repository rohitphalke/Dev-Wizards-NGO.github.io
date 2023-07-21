import React from "react";

import EventDate from "./EventDate";
import "./SingleEvent.css";
// import Card from "../UI/Card";

const SingleEvent = (props) => {
  if (props.singleYear.length === 0) {
    return <h2 className="">Found no events.</h2>;
  }

  return (
<div className="wrapper tab-content" id={props.id}>
  <section className="col1">
    <ul className="list-1">
      {props.singleYear.map((event) => (
        <li key={event.evNo}>
          <EventDate date={event.date} />
          <p className="pad_bot2">
            <strong>{event.title}</strong>
          </p>
          <p className="pad_bot1">{event.description}</p>
        </li>
      ))}
      </ul>
  </section>
</div>
  );
};

export default SingleEvent;




