import React, { createContext, useEffect, useState } from "react";

export const Context = createContext(null);

const ContextProvider = ({ children }) => {
  const [mail, setmail] = useState("");
  const [filterShow, setFilterShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const [modalShow, setModalShow] = useState(false);
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
<<<<<<< HEAD
    showOtp,
    setshowOtp,
    showCreateAcc,
    setshowCreateAcc,
    filterShow,
    setFilterShow,
    fullscreen,
    setFullscreen,
=======
    UserImg,
    setUserImg,
    User,
    setUser,
    Loggedin,
    setLoggedIn,
>>>>>>> 384339bebfb9017795de596ca1780e1c486cde35
  };

  return <Context.Provider value={initialState}>{children}</Context.Provider>;
};
export default ContextProvider;
