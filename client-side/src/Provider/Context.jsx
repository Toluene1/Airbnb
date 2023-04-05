import React, { createContext, useEffect, useState } from "react";

export const Context = createContext(null);

const ContextProvider = ({ children }) => {
  const [mail, setmail] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [filterShow, setFilterShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [User, setUser] = useState({});
  const [authloading, setauthloading] = useState(true);
  const [existingUser, setexistingUser] = useState({});

  const [UserImg, setUserImg] = useState(
    localStorage.getItem("img")
      ? JSON.parse(localStorage.getItem("img"))
      : false,
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
    UserImg,
    setUserImg,
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
  };

  return <Context.Provider value={initialState}>{children}</Context.Provider>;
};
export default ContextProvider;
