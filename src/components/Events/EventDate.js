import React from "react";

import "./EventDate.css";

const EventDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="EventDate">
      <p>{month}  {day}  {year}</p>
    </div>
  );
};

export default EventDate;
