import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventPage from "./pages/EventPage";
import EventDetailPage from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import Root from "./pages/Root";
import EventRoot from "./pages/EventRoot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventRoot />,
        children: [
          { index: true, element: <EventPage /> },
          { path: ":id", element: <EventDetailPage /> },
          { path: "new", element: <NewEventPage /> },
          { path: ":id/edit", element: <EditEventPage /> },
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
