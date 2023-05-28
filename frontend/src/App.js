import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventPage, { loader as eventLoader } from "./pages/EventPage";
import EventDetailPage, {
  loader as EventDetailLoader,
} from "./pages/EventDetailPage";
import NewEventPage, { action as NewEventAction } from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import Root from "./pages/Root";
import EventRoot from "./pages/EventRoot";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventRoot />,
        children: [
          {
            index: true,
            element: <EventPage />,
            loader: eventLoader,
          },
          {
            path: ":id",
            id: "event-details",
            loader: EventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
              },
              { path: "edit", element: <EditEventPage /> },
            ],
          },
          { path: "new", element: <NewEventPage />, action: NewEventAction },
        ],
      },
    ],
  },
]);
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
