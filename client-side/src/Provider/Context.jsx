import React, { createContext, useEffect, useState } from "react";

export const Context = createContext(null);

const ContextProvider = ({ children }) => {
  const [mail, setmail] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [filterShow, setFilterShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [UserImg, setUserImg] = useState(
    localStorage.getItem("img")
      ? JSON.parse(localStorage.getItem("img"))
      : false,
  );
  const [User, setUser] = useState({});
  const [Loggedin, setLoggedIn] = useState(
    localStorage.getItem("loggedin")
      ? JSON.parse(localStorage.getItem("loggedin"))
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
  };

  return <Context.Provider value={initialState}>{children}</Context.Provider>;
};
export default ContextProvider;
