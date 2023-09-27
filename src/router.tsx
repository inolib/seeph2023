import { createBrowserRouter } from "react-router-dom";

import { Booking } from "./routes/booking";
import { Congratulations } from "./routes/congratulations";
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
  {
    path: "/congratulations",
    element: <Congratulations />,
  },
]);
