import EventForm from "../components/EventForm";
import { useRouteLoaderData } from "react-router-dom";

const EditEventPage = () => {
  const data = useRouteLoaderData("event-details");
  return <EventForm method={"PATCH"} event={data.event} />;
};

export default EditEventPage;
