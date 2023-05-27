import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await fetch("http://localhost:8080/events");

      if (!res.ok) {
        setError("Something went wrong!");
      } else {
        const data = await res.json();
        setEvents(data.events);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Events</h1>
      {isLoading && (
        <p style={{ textAlign: "center", fontSize: "32px" }}>
          Loading Events...
        </p>
      )}
      {error && <p>{error.message}</p>}
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
