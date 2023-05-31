import { Suspense } from "react";
import EventList from "../components/EventsList";
import { useLoaderData, json, defer, Await } from "react-router-dom";

const EventPage = () => {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
};

export default EventPage;

const loadEvents = async () => {
  const res = await fetch("http://localhost:8080/events");

  if (!res.ok) {
    // throw new Response(JSON.stringify({ message: "could not fetch data!" }), {
    //   status: 500,
    // });
    return json({ message: "could not fetch data!" }, { status: 500 });
  } else {
    const loadedEvents = await res.json();
    return loadedEvents.events;
  }
};

export const loader = () => {
  return defer({
    events: loadEvents(),
  });
};
