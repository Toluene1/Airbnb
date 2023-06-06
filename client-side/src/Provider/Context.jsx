import React, { createContext, useEffect, useState } from "react";
import httpAuth from "../Services/config";

export const Context = createContext(null);

const ContextProvider = ({ children }) => {
  const [mail, setmail] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [filterShow, setFilterShow] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
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
      : "first"
  );

  const [propertyId, setpropertyId] = useState(
    localStorage.getItem("propId")
      ? JSON.parse(localStorage.getItem("propId"))
      : ""
  );

  const [Loggedin, setLoggedIn] = useState(
    localStorage.getItem("loggedin")
      ? JSON.parse(localStorage.getItem("loggedin"))
      : false
  );

  const [existing, setexisting] = useState(
    localStorage.getItem("existing")
      ? JSON.parse(localStorage.getItem("existing"))
      : false
  );
  let isMounted = true;
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await httpAuth.get("/user/fetchUser");
        setUser(response.data.user);
      } catch (error) {
        if (error.response.data.msg == "unauthorised") {
          setUser({});
        }
      }
    };

    if (isMounted) {
      fetchUser();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await httpAuth.get("/wishlist");
        setwishlist(response.data.wish);
      } catch (error) {
        if (error.response.data.msg == "unauthorised") {
          setwishlist([]);
        }
      }
    };

    if (isMounted) {
      fetchWishlist();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  const initialState = {
    mail,
    setmail,
    modalShow,
    setModalShow,
    filterShow,
    setFilterShow,
    searchShow,
    setSearchShow,
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
