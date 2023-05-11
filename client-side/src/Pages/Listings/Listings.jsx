import { useContext, useEffect, useState } from "react";
import { Context } from "../../Provider/Context";
import httpAuth from "../../Services/config";
import "./Listings.css";
import ListingsNav from "../../components/ListingsNav/ListingsNav";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import LoginFooter from "../../components/LoginFooter/LoginFooter";

function Listings() {
  const [listings, setListings] = useState({});
  const [loading, setLoading] = useState(false);
  let isMounted = true;
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await httpAuth.get(`property/findhostproperty`);
        setListings(response.data.prop);
        setLoading(false);
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
      {loading ? (
        <div className="center-screen">
          <span className="spinner-border text-danger"></span>
        </div>
      ) : (
        <main>
          <section className="px-4">
            <div className="firstSection">
              <div>
                <h2>{listings?.length} listings</h2>
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
          <section>
            <section className="Listings mb-5">
              {listings.length > 0 ? (
                <article>
                  {listings.map((listings, index) => (
                    <Link to={`/property/${listings?._id}`} key={index}>
                      <main className="shadow">
                        <div>
                          <img src={listings.images[0]} alt="" />
                        </div>

                        {/* <button onClick={(e) => deleteWishlist(e, wish._id)}>
                      {" "}
                      <AiOutlineDelete />
                    </button> */}
                      </main>
                    </Link>
                  ))}
                </article>
              ) : (
                <h5 className=" text-secondary">
                  No property has been added to wish list
                </h5>
              )}
            </section>
          </section>
        </main>
      )}

      <LoginFooter />
    </main>
  );
}

export default Listings;
