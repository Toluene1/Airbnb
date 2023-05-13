import React, { createContext, useState } from "react";

export const Context = createContext(null);

const ContextProvider = ({ children }) => {
  const [mail, setmail] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [filterShow, setFilterShow] = useState(false);
  const [filterWeb, setFilterWeb] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [User, setUser] = useState({});
  const [authloading, setauthloading] = useState(true);
  const [existingUser, setexistingUser] = useState({});
  const [wishlist, setwishlist] = useState([]);
  const [property, setProperty] = useState([]);

  const [activeButton, setActiveButton] = useState(
    localStorage.getItem("active")
      ? JSON.parse(localStorage.getItem("active"))
      : "first",
  );

  const [propertyId, setpropertyId] = useState(
    localStorage.getItem("propId")
      ? JSON.parse(localStorage.getItem("propId"))
      : "",
  );

  const [Loggedin, setLoggedIn] = useState(
    localStorage.getItem("loggedin")
      ? JSON.parse(localStorage.getItem("loggedin"))
      : false,
  );

  const [existing, setexisting] = useState(
    localStorage.getItem("existing")
      ? JSON.parse(localStorage.getItem("existing"))
      : false,
  );

  const initialState = {
    mail,
    setmail,
    modalShow,
    setModalShow,
    filterShow,
    setFilterShow,
    fullscreen,
    setFullscreen,
    User,
    setUser,
    Loggedin,
    setLoggedIn,
    existing,
    setexisting,
    existingUser,
    setexistingUser,
    authloading,
    setauthloading,
    propertyId,
    setpropertyId,
    wishlist,
    setwishlist,
    activeButton,
    setActiveButton,
    filterWeb,
    setFilterWeb,
    property,
    setProperty,
  };

  return <Context.Provider value={initialState}>{children}</Context.Provider>;
};
export default ContextProvider;
