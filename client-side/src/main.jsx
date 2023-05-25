import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContextProvider from "./Provider/Context";
import AirbnbHome from "./Pages/AirbnbHome/AirbnbHome";

const App = React.lazy(() => import("./App"));

const Accounts = React.lazy(() => import("./Pages/Account/Account"));
const PersonalInfo = React.lazy(() =>
  import("./Pages/PersonalInfo/PersonalInfo"),
);
const Profile = React.lazy(() => import("./Pages/Profile/Profile"));
const Hosting = React.lazy(() => import("./Pages/Hosting/Hosting"));
const Overview = React.lazy(() => import("./Pages/Overview/Overview"));
const Structure = React.lazy(() => import("./Pages/Struture/Structure"));
const Location = React.lazy(() => import("./Pages/Location/Location"));
const FloorPlan = React.lazy(() => import("./Pages/FloorPlan/FloorPlan"));
const Photos = React.lazy(() => import("./Pages/Photos/Photos"));
const StandOut = React.lazy(() => import("./Pages/Stand-out/Stand-out"));
const Amenities = React.lazy(() => import("./Pages/Amenities/Amenities"));
const Price = React.lazy(() => import("./Pages/Price/Price"));
const Finish = React.lazy(() => import("./Pages/Finish-Setup/FinishSetup"));
const Title = React.lazy(() => import("./Pages/Title/Title"));
const Review = React.lazy(() => import("./Pages/Review/Review"));
const Description = React.lazy(() => import("./Pages/Description/Description"));
const Property = React.lazy(() => import("./Pages/Property/Property"));
const Wishlist = React.lazy(() => import("./Pages/Wishlist/Wishlist"));
const Listings = React.lazy(() => import("./Pages/Listings/Listings"));
const Details = React.lazy(() => import("./Pages/EditListing/Details"));
const Trips = React.lazy(() => import("./Pages/Trips/Trips"));
const Messages = React.lazy(() => import("./Pages/Messages/Messages"));
const PublishCelebration = React.lazy(() =>
  import("./Pages/Publish-Celebration/PublishCelebration"),
);
const PrivacyType = React.lazy(() =>
  import("./Pages/Privacy-type/Privacy-type"),
);
const AboutYourPlace = React.lazy(() =>
  import("./Pages/About-your-place/About-your-place"),
);
const Error404 = React.lazy(() => import("./Pages/error404"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
  },

  {
    path: "/property/:id",
    element: <Property />,
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
    path: "/AirbnbHome",
    element: <AirbnbHome />,
  },
  {
    path: "/become-a-host",
    element: <Hosting />,
  },
  {
    path: "/become-a-host/overview",
    element: <Overview />,
  },
  {
    path: "/become-a-host/structure",
    element: <Structure />,
  },
  {
    path: "/become-a-host/location",
    element: <Location />,
  },
  {
    path: "/become-a-host/floor-plan",
    element: <FloorPlan />,
  },
  {
    path: "/become-a-host/about-your-place",
    element: <AboutYourPlace />,
  },
  {
    path: "/become-a-host/privacy-type",
    element: <PrivacyType />,
  },
  {
    path: "/become-a-host/stand-out",
    element: <StandOut />,
  },
  {
    path: "/become-a-host/photos",
    element: <Photos />,
  },
  {
    path: "/become-a-host/amenities",
    element: <Amenities />,
  },
  {
    path: "/become-a-host/price",
    element: <Price />,
  },
  {
    path: "/become-a-host/finish-setup",
    element: <Finish />,
  },
  {
    path: "/become-a-host/title",
    element: <Title />,
  },
  {
    path: "/become-a-host/description",
    element: <Description />,
  },
  {
    path: "/become-a-host/review",
    element: <Review />,
  },
  {
    path: "/become-a-host/publish-celebration",
    element: <PublishCelebration />,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
  },
  {
    path: "/listings",
    element: <Listings />,
  },
  {
    path: "/trips/v1",
    element: <Trips />,
  },
  {
    path: "/guests/inbox",
    element: <Messages />,
  },
  {
    path: "/manage-your-space/:id/details",
    element: <Details />,
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
