import React, { useState } from "react";
import EventsList from "./EventsList";
import EventsFilter from "./EventsFilter";
import FoodCampaign from "../../assets/events.jpg";
import "./Events.css";
import data from "./data";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

function Events() {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredEvents = data.filter((event) => {
    return event.id === filteredYear;
  });

  return (
    <article id="events-content" className="events-tabs">
      <div style={{ maxWidth: '80%', margin: '0 auto', border: '1px solid black',height:'30%' }}>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              src="https://images.unsplash.com/photo-1509099927777-1b8a87bc3b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFmcmljYW4lMjBjaGlsZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
              className="d-block w-100"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              src="https://images.unsplash.com/photo-1582307811683-75b18a39ab71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWZyaWNhbiUyMGNoaWxkfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
              className="d-block w-100"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://images.unsplash.com/flagged/photo-1555251255-e9a095d6eb9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWZyaWNhbiUyMGNoaWxkfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
              className="d-block w-100"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>


      <div className="events-wrapper">
        <EventsFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <div className="container-fluid reveal d-flex flex-wrap">
          <div className="row reveal">
            <EventsList eventItems={filteredEvents} />
          </div>
        </div>
      </div>
    </article>
  );
}
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

export default Events;
