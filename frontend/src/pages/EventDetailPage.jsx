import React from "react";
import { useRouteLoaderData, json, redirect } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const data = useRouteLoaderData("event-details");

  return <EventItem event={data.event} />;
};

export default EventDetailPage;

export const loader = async ({ request, params }) => {
  const id = params.id;

  const response = await fetch(`http://localhost:8080/events/${id}`);
  if (!response.ok) {
    return json({ message: "something went wrong!" }, { status: 500 });
  } else {
    return response;
  }
};

export const action = async ({ params, request }) => {
  const response = await fetch(`http://localhost:8080/events/${params.id}`, {
    method: request.method,
  });

  if (response.status === 422) {
    return response;
  }
  if (!response.ok) {
    return json({ message: "something went wrong!" }, { status: 500 });
  }

  return redirect("/events");
};
