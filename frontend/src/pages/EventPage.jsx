import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

let events;

const EventPage = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8080/events");

      if (!res.ok) {
        throw new Error("Somethimg went wrong!");
      }

      const data = await res.json();
      setEvents(data.events);
    };
    try {
      fetchData();
    } catch (err) {
      console.log(err.message);
    }
  }, []);

  return (
    <>
      <h1>Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventPage;
