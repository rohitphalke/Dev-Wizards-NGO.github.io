import React, { useState } from "react";
import EventsList from "./EventsList";
import EventsFilter from "./EventsFilter";
// import FoodCampaign from "../../assets/events.jpg";
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
    <article id="events-content" className="events-tabs mt-5 mb-5">
      <div style={{ justifyContent: "center", width: "100%" }}>
        <div
          style={{
            maxWidth: "80%",
            margin: "0 auto",
            height: "30%",
          }}
        >
          <div style={{ justifyContent: "center", width: "100%" }}>
            <div className="car-sizing">
              <Carousel>
                <Carousel.Item interval={2500} className="car-item">
                  <img
                    src="https://images.unsplash.com/photo-1509099927777-1b8a87bc3b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFmcmljYW4lMjBjaGlsZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
                    className="d-block w-100"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3 className="carous-title">Hope for a Better Tomorrow</h3>
                    <p className="carous-details">
                      Our Food NGO brings hope and nourishment to children in
                      need, ensuring a brighter future for all.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2500} className="car-item">
                  <img
                    src="https://images.unsplash.com/photo-1582307811683-75b18a39ab71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWZyaWNhbiUyMGNoaWxkfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
                    className="d-block w-100"
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3 className="carous-title">
                      Curiosity Served on a Plate
                    </h3>
                    <p className="carous-details">
                      Discovering new flavors & nutritious meals is an exciting
                      journey; curiously embarked on by young minds.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2500} className="car-item">
                  <img
                    src="https://images.unsplash.com/flagged/photo-1555251255-e9a095d6eb9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWZyaWNhbiUyMGNoaWxkfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
                    className="d-block w-100"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3 className="carous-title">Happy and Healthy Together</h3>
                    <p className="carous-details">
                      Through the joy of nutritious meals, we see the smiles of
                      children, a testament to the scope of our impact.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>

        <div className="events-wrapper mt-5">
          <EventsFilter
            className="events-filter"
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
          <div
            className="container-fluid reveal d-flex flex-wrap events-cards"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="row reveal" style={{ marginLeft: "0" }}>
              <EventsList eventItems={filteredEvents} />
            </div>
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
