import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContextProvider from "./Provider/Context";

const App = React.lazy(() => import("./App"));
const Authroute = React.lazy(() => import("./Pages/Authroute"));
const Register = React.lazy(() => import("./Pages/CreateAcc"));

const Error404 = React.lazy(() => import("./Pages/error404"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
  },

  {
    path: "/Auth",
    element: <Authroute />,
  },

  {
    path: "/register",
    element: <Register />,
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
