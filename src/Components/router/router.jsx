import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import MyJobs from "../Layout/Pages/My Jobs/MyJobs";
import PostJob from "../Layout/Pages/Post Job/PostJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/myjob",
        element: <MyJobs></MyJobs>,
      },
      {
        path: "/postjob",
        element: <PostJob></PostJob>,
      },
    ],
  },
]);

export default router;
