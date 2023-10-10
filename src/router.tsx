import { createBrowserRouter } from "react-router-dom";

import { Booking } from "./routes/booking";
import { Home } from "./routes/home";
import { Thanks } from "./routes/thanks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/booking/:datetime?",
    element: <Booking />,
  },
  {
    path: "/thanks",
    element: <Thanks />,
  },
]);
