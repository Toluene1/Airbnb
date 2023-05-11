import { useContext, useEffect, useState } from "react";
import { Context } from "../../Provider/Context";
import httpAuth from "../../Services/config";
import "./Listings.css";
import ListingsNav from "../../components/ListingsNav/ListingsNav";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

function Listings() {
  const [property, setProperty] = useState({});
  let isMounted = true;
  useEffect(() => {
    const fetchUser = async () => {
      try {
        //    setloading(true);
        const response = await httpAuth.get(`property/findhostproperty`);
        setProperty(response.data.prop);
        //    setloading(false);
      } catch (error) {
        setProperty({});
        console.log(error.response.data.msg);
      }
    };

    if (isMounted) {
      fetchUser();
    }
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <main>
      <ListingsNav />
      <section className="px-4">
        <div className="firstSection">
          <div>
            <h2>{property?.length} listings</h2>
          </div>
          <div>
            <Link to={"/become-a-host/overview"}>
              <button className="createButton">
                <BiPlus className="fs-5" />
                <span className="ms-2">Create Listing</span>
              </button>
            </Link>
            <Link to={"/become-a-host/overview"}>
              <button className="plusButton">
                <BiPlus className="fs-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="property">
        {property.length > 0 ? (
          <>
            <ul>
              {property.map((property) => (
                <li>
                  {" "}
                  <h3>{property?.structure} </h3>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="">
            {" "}
            <h6 className="text-danger">
              properties of the selected category cant be found
            </h6>
          </div>
        )}
      </section>
    </main>
  );
}

export default Listings;
