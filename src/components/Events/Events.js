import React, {useState} from "react";
import EventsList from "./EventsList";
import EventsFilter from "./EventsFilter";
import "./Events.css";
import data from './data';

function Events() {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredEvents = data.filter((event) => {
    return event.id === filteredYear;
  });

  return (
    <article id="content" className="tabs">
      <div className="wrapper">
        <div className="box1">
          <div className="wrapper">
            <section className="col1">
              <h2>
                <strong>P</strong>ress<span>About Us</span>
              </h2>
              <div className="line1">
                <figure className="left marg_right1">
                  <img src="images/page3_img1.jpg" alt="" />
                </figure>
                <p className="pad_bot1">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
                <p className="pad_bot2">
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

      <div className="wrapper">
        <div className="box2">
          <EventsFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
          <EventsList eventItems={filteredEvents} />
        </div>
      </div>
    </article>
  );
}

export default Events;
