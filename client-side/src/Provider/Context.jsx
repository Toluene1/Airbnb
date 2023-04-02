import React, { createContext, useState } from "react";

export const Context = createContext(null);

const ContextProvider = ({ children }) => {
  const [mail, setmail] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [showOtp, setshowOtp] = useState(false);
  const [showCreateAcc, setshowCreateAcc] = useState(false);
  const initialState = {
    mail,
    setmail,
    modalShow,
    setModalShow,
    showOtp,
    setshowOtp,
    showCreateAcc,
    setshowCreateAcc,
  };

  return <Context.Provider value={initialState}>{children}</Context.Provider>;
};
export default ContextProvider;
