import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import httpAuth from "./Services/config";

function App() {
  return (
    <div>
      <Navbar />
      <h1>welcome to home</h1>
    </div>
  );
}

export default App;
