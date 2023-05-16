import React from "react";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="bg-purple-600">Hello world!</div>,
  },
]);

export default router;
