import { createBrowserRouter } from "react-router-dom";

import { Booking } from "./routes/booking";
import { Root } from "./routes/root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/booking",
    element: <Booking />,
  },
]);
