import React from "react";
import EventDate from "./EventDate";
import "./SingleEvent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SingleEvent = (props) => {
  if (props.singleYear.length === 0) {
    return <h2 className="no-events">Found no events.</h2>;
  }

  return (
    <div className="event-wrapper d-flex flex-row mx-5">
      {props.singleYear.map((event) => (
        <div className="event-card mx-5 shadow row justify-content-center">
          <Card style={{ width: "18rem" }} >
            <Card.Img variant="top" src="https://source.unsplash.com/1080x1080/?poor kid" className="justify-content-center"/>
            <Card.Body className="text-center" >
              <Card.Title className="font-weight-bold">{event.title}</Card.Title>
              <Card.Text>{event.description}</Card.Text>
              <div className="event-details-container">
                <EventDate date={event.date} />
                <p className="event-location">{event.location}</p>
              </div>
              <Button variant="primary" className="">Read more</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default SingleEvent;



{
  /* 
{props.singleYear.map((event) => (
<div class="card" style="width: 18rem;">
  <img src="https://images.unsplash.com/photo-1496081964234-3fd7780c05b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWZyaWNhbiUyMGtpZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{event.title}</h5>
    <p class="card-text">{event.description}</p>
    <div className="event-details-container">
      <span class="badge bg-secondary"><EventDate date={event.date} /></span>
      <span class="badge bg-secondary">{event.location}</span>
    </div>
    <a href="#" class="btn btn-primary">Read more</a>
  </div>
</div> 
))}
*/
}
