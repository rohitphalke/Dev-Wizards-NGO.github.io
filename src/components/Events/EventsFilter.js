import React from "react";
import "./EventsFilter.css";
import "bootstrap/dist/css/bootstrap.min.css";

const EventsFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="events-filter ">
      <label
        className="filter-label dropdown-menu position-static d-grid gap-1 p-2 rounded-3 mx-0 border-0 shadow w-220px"
        data-bs-theme="dark"
      >
        Filter by year
      </label>
      <select
        value={props.selected}
        onChange={dropdownChangeHandler}
        className="filter-select dropdown-item rounded-2 active"
      >
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>
    </div>
  );
};

export default EventsFilter;
