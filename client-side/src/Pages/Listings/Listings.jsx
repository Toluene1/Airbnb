import { useContext, useEffect, useState } from "react";
import { Context } from "../../Provider/Context";
import httpAuth from "../../Services/config";
import "./Listings.css";
import ListingsNav from "../../components/ListingsNav/ListingsNav";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import LoginFooter from "../../components/LoginFooter/LoginFooter";
import { AiOutlineDelete } from "react-icons/ai";
import PopModal from "../../components/SignUp";
import Alert from "../../components/Alert";

function Listings() {
  const [listings, setListings] = useState({});
  const [loading, setLoading] = useState(true);
  const [list, setlist] = useState(null);
  const [alert, setalert] = useState(false);
  const [alertMessage, setalertMessage] = useState("");
  const { modalShow, setModalShow } = useContext(Context);
  let isMounted = true;

  const handleShowDelete = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    setlist(id);
  };

  const deleteProperty = async (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      setLoading(true);
      const response = await httpAuth.delete(`/property/${id}`);
      setListings(response.data.prop);
      setlist(null);
      setalert(true);
      setLoading(false);
      setalertMessage("property deleted successfully");
    } catch (error) {
      setalert(true);
      setalertMessage(error.response.data.msg);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await httpAuth.get(`property/findhostproperty`);
        setListings(response.data.prop);
        setLoading(false);
      } catch (error) {
        if (error.response.data.msg == "unauthorised") {
          return setModalShow(true);
        }
        setListings({});
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
                <h2>{listings.length > 0 && listings?.length}listings</h2>
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
              {alert && (
                <Alert closeAlert={closeAlert} alertMessage={alertMessage} />
              )}
              {listings.length > 0 ? (
                <article>
                  {listings.map((listings, index) => (
                    <>
                      <Link to={`/property/${listings?._id}`} key={index}>
                        <main className="shadow">
                          <div>
                            <img src={listings.images[0]} alt="" />
                          </div>

                          <span onClick={(e) => handleShowDelete(e, index)}>
                            {" "}
                            <AiOutlineDelete />
                          </span>
                        </main>
                      </Link>
                      <aside className={list == index ? "d-block" : "d-none"}>
                        <h6 className="text-danger">
                          Are you sure you want to delete property?
                        </h6>
                        <p>
                          <button
                            className="btn btn-danger "
                            onClick={(e) => deleteProperty(e, listings._id)}
                          >
                            {" "}
                            Yes
                          </button>
                          <button
                            className="btn btn-dark mx-3"
                            onClick={() => setlist(null)}
                          >
                            No
                          </button>
                        </p>
                      </aside>
                    </>
                  ))}
                </article>
              ) : (
                <h5 className=" text-secondary">
                  you dont have any available listings
                </h5>
              )}
            </section>
          </section>
        </main>
      )}
      <PopModal show={modalShow} onHide={() => setModalShow(false)} />

      <LoginFooter />
    </main>
  );
}

export default Listings;
