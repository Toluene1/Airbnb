import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContextProvider from "./Provider/Context";

const App = React.lazy(() => import("./App"));
const Authroute = React.lazy(() => import("./Pages/Authroute"));
const Login = React.lazy(() => import("./Pages/Login"));
const Register = React.lazy(() => import("./Pages/SignUp"));
const OtpVerify = React.lazy(() => import("./Pages/OtpVerify"));
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
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/verifyOtp",
    element: <OtpVerify />,
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
