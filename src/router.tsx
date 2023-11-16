import { createBrowserRouter } from "react-router-dom";

import { Booking } from "./routes/booking";
import { Home } from "./routes/home";
import { Thanks } from "./routes/thanks";
import { Video } from "./routes/video";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/booking",
    element: <Booking />,
  },
  {
    path: "/thanks",
    element: <Thanks />,
  },
  {
    path: "/video",
    element: <Video />,
  },
]);
