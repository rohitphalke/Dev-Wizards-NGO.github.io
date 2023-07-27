import * as React from "react";
import { Modal } from "react-bootstrap";
import EventDate from "./EventDate";
import "./SingleEvent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SingleEvent = (props) => {
  const [open, setOpen] = React.useState(false);
  const [selectedEvent, setSelectedEvent] = React.useState(null);

  const handleOpen = (event) => {
    setSelectedEvent(event);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  if (props.singleYear.length === 0) {
    return <h2 className="no-events">Found no events.</h2>;
  }
  function truncateText(text, maxWords) {
    const words = text.trim().split(" ");
    return (
      words.slice(0, maxWords).join(" ") +
      (words.length > maxWords ? "..." : "")
    );
  }
  return (
    <div className="event-wrapper d-flex flex-wrap justify-content-center mx-5">
      {props.singleYear.map((event) => (
        <div className="event-card mx-5 shadow" key={event.id}>
          <Card style={{ width: "19rem" }} className="card">
            <div className="img-div">
              <Card.Img
                variant="top"
                src="https://source.unsplash.com/1080x1080/?poor kid"
                className="justify-content-center card-img"
              />
            </div>

            <Card.Body>
              <div className="card-complete">
                <Card.Title
                  className="font-weight-bold card-title"
                  style={{ height: "min-content", marginBottom: "0" }}
                >
                  {event.title}
                </Card.Title>
                <div className="card-desc-div">
                  <Card.Text className="card-desc">
                    {truncateText(event.description, 17)}
                  </Card.Text>
                </div>
                <div className="event-details-container justify-content-center mt-3">
                  <EventDate date={event.date} />
                </div>
                <p className="event-location" style={{ textAlign: "center" }}>
                  {event.location}
                  <br />
                  <Button
                    style={{
                      fontFamily: "Arial, Helvetica, sans-serif",
                      marginTop: "1rem",
                    }}
                    variant="primary"
                    onClick={() => handleOpen(event)}
                  >
                    Read more
                  </Button>
                </p>
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}
      <Modal show={open} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedEvent && selectedEvent.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedEvent && (
            <>
              <img
                src="https://source.unsplash.com/1080x1080/?poor kid"
                alt={selectedEvent.title}
                width="469px"
                height="300px"
              />
              <p>{selectedEvent.description}</p>
              <p>
                <strong style={{ color: "blue" }}>Date:</strong>
                <EventDate date={selectedEvent.date} />
              </p>
              <p>
                <strong style={{ color: "darkred" }}>Location:</strong>
                <br />
                <span style={{ fontWeight: "600" }}>
                  {selectedEvent.location}
                </span>
              </p>
            </>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SingleEvent;
