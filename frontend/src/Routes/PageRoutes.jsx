import { lazy, Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";

import FullScreenLoader from "@/components/Loader/FullScreenLoader";
import ProtectedRoute from "./ProtectedRoute";

const NotFound = lazy(() => import("./NotFound"));
const ProjectDetails = lazy(() => import("@/pages/Projects/ProjectDetails"));
const Register = lazy(() => import("@/pages/Auth/Register"));
const Login = lazy(() => import("@/pages/Auth/Login"));
const Dashboard = lazy(() => import("@/pages/Dashboard/Dashboard"));
const Instruments = lazy(() => import("@/pages/Instruments/Instruments"));
const Projects = lazy(() => import("@/pages/Projects/Projects"));
const ManageStorage = lazy(() => import("@/pages/Projects/ManageStorage"));
const ManageInstrument = lazy(() =>
  import("@/pages/Projects/ManageInstrument")
);
const NewImage = lazy(() => import("@/pages/Projects/NewImage"));
const Storage = lazy(() => import("@/pages/Storage/Storage"));

function PageRoutes() {
  const routes = useRoutes([
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/",
          element: <Navigate to="/dashboard" />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/instruments",
          element: <Instruments />,
        },
        {
          path: "/projects",
          children: [
            {
              index: true,
              element: <Projects />,
            },
            {
              path: ":id/",
              children: [
                {
                  index: true,
                  element: <ProjectDetails />,
                },
                {
                  path: "manageStorage/",
                  element: <ManageStorage />,
                },
                {
                  path: "manageInstrument/",
                  element: <ManageInstrument />,
                },
                {
                  path: "newImage/",
                  element: <NewImage />,
                },
              ],
            },
          ],
        },
        {
          path: "/storage",
          element: <Storage />,
        },
        {
          path: "/storage",
          element: <Storage />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ]);
  return <Suspense fallback={<FullScreenLoader />}>{routes}</Suspense>;
}

export default PageRoutes;
