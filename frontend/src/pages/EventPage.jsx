import EventList from "../components/EventsList";
import { useLoaderData, json } from "react-router-dom";

const EventPage = () => {
  const data = useLoaderData();
  const events = data.events;
  return (
    <>
      <EventList events={events} />
    </>
  );
};

export default EventPage;

export const loader = async () => {
  const res = await fetch("http://localhost:8080/events");

  if (!res.ok) {
    // throw new Response(JSON.stringify({ message: "could not fetch data!" }), {
    //   status: 500,
    // });
    return json({ message: "could not fetch data!" }, { status: 500 });
  } else {
    return res;
  }
};
