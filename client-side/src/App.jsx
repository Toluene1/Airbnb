import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import httpAuth from "./Services/config";
import DisplayModal from "./utils/DisplayModal";

function App() {
  const [User, setUser] = useState({});
  const [loading, setloading] = useState(false);
  let isMounted = true;
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setloading(true);
        const response = await httpAuth.get("/fetchUser");
        setUser(response.data.user);
        setloading(false);
      } catch (error) {
        setloading(false);
        // navigate("/login", {
        //   state: { previousUrl: location.pathname },
        // });
      }
    };

    if (isMounted) {
      fetchUser();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return <h1>Loading .....</h1>;
  }

  return (
    <div>
      <Navbar />
      <h1>welcome to home {User.FirstName}</h1>
      <DisplayModal />
    </div>
  );
}

export default App;
