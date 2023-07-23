import React, { useState } from "react";
import EventsList from "./EventsList";
import EventsFilter from "./EventsFilter";
import FoodCampaign from "../../assets/events.jpg";
import "./Events.css";
import data from "./data";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <div className="events-wrapper container-fluid">
        <div className="events-box row col-md-12 col-lg-10">
          <div className="events-wrapper ">
            <section className="events-column">
              <h2>
                <span>About Us</span>
              </h2>

              <div className="events-line">
                <figure className="events-left events-margin-right">
                  <img src={FoodCampaign} alt="food campaigners" />
                </figure>
                <p className="events-padding-bottom1">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
                <p className="events-padding-bottom2">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet, consectetur.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="events-wrapper">
        <EventsFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <div className="container-fluid reveal">
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
