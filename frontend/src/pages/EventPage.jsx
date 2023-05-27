import React from "react";
import { Link } from "react-router-dom";

const events = [
  { id: "e1", title: "Event 1" },
  { id: "e2", title: "Event 2" },
  { id: "e3", title: "Event 3" },
  { id: "e4", title: "Event 4" },
];

const EventPage = () => {
  return (
    <>
      <h1>Events</h1>
      <ul>
        {events.map((event) => (
          <li>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventPage;
