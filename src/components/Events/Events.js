import React, { useState } from "react";
import EventsList from "./EventsList";
import EventsFilter from "./EventsFilter";
import lilgirl from "../../assets/events.jpg";
import "./Events.css";
import data from "./data";

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
      <div className="events-wrapper">
        <div className="events-box">
          <div className="events-wrapper">
            <section className="events-column">
              <h2>
                <strong>P</strong>ress<span>About Us</span>
              </h2>
              <div className="events-line">
                <figure className="events-left events-margin-right">
                  <img src={lilgirl} alt="Little girl" />
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
        <EventsList eventItems={filteredEvents} />
      </div>
    </article>
  );
}

export default Events;
