import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import httpAuth from "./Services/config";
import LoginFooter from "./components/LoginFooter/LoginFooter";

function App() {
  return (
    <section>
      <div>
        <Navbar />
        <h1>welcome to home</h1>
      </div>
      <div>
        <LoginFooter />
      </div>
    </section>
  );
}

export default App;
