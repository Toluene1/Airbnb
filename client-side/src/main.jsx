import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContextProvider from "./Provider/Context";

const App = React.lazy(() => import("./App"));

const Accounts = React.lazy(() => import("./Pages/Account/Account"));
const PersonalInfo = React.lazy(() =>
  import("./Pages/PersonalInfo/PersonalInfo"),
);
const Profile = React.lazy(() => import("./Pages/Profile/Profile"));
const Hosting = React.lazy(() => import("./Pages/Hosting/Hosting"));
const Error404 = React.lazy(() => import("./Pages/error404"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
  },

  {
    path: "/personalInfo",
    element: <PersonalInfo />,
  },

  {
    path: "/Accounts",
    element: <Accounts />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/become-a-host",
    element: <Hosting />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
    </ContextProvider>
  </React.StrictMode>,
);
