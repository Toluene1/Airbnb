import { Link, useNavigate } from "react-router-dom";
import PropertyNav from "../../components/PropertyNav/PropertyNav";
import "./FloorPlan.css";
import { useContext, useEffect, useState } from "react";
import httpAuth from "../../Services/config";
import { Context } from "../../Provider/Context";
import PopModal from "../../components/SignUp";
import Alert from "../../components/Alert";
const FloorPlan = () => {
  const [plan, setplan] = useState({
    guests: 4,
    Bedrooms: 1,
    Beds: 1,
    Bathrooms: 1,
  });
  const { propertyId, setauthloading, setModalShow, modalShow, authloading } =
    useContext(Context);
  const [alert, setalert] = useState(false);
  const [alertMessage, setalertMessage] = useState("");
  const [loading, setloading] = useState();
  const navigate = useNavigate();
  const increaseQty = (e) => {
    const plantype = e.target.id;
    setplan({ ...plan, [plantype]: (plan[plantype] += 1) });
  };

  const decreaseQty = (e) => {
    const plantype = e.target.id;
    setplan({ ...plan, [plantype]: (plan[plantype] -= 1) });
  };
  const postFloorPlan = async () => {
    try {
      setloading(true);
      await httpAuth.post(`/property/updateproperty/${propertyId}`, {
        ...plan,
      });
      setloading(false);
      navigate("/become-a-host/stand-out");
    } catch (error) {
      if (error.response.status == 404) {
        setalert(true);
        setalertMessage("propertyId not found");
        setloading(false);
        return;
      }
      setalert(true);
      setalertMessage(error.response.data.msg);
      setloading(false);
    }
  };

  let isMounted = true;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        await httpAuth.get("/user/fetchUser");
      } catch (error) {
        setauthloading(true);
        setModalShow(true);
      }
    };

    if (isMounted) {
      fetchUser();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  const closeAlert = () => {
    setalert(false);
  };
  return (
    <>
      <PropertyNav />
      {authloading ? (
        <div className=" center-screen">
          <div className="spinner-border "></div>
        </div>
      ) : (
        <main>
          <section className="floorplan  animate__animated animate__fadeInUp">
            {alert && (
              <Alert closeAlert={closeAlert} alertMessage={alertMessage} />
            )}
            <h2> Let's start with the basics</h2>
            <h5 className="my-5">How many people can stay here?</h5>
            <div className="count">
              <p className="fs-6">Guests</p>
              <div>
                <button
                  id="guests"
                  onClick={decreaseQty}
                  disabled={plan.guests == 1 ? true : false}
                  className="text-dark"
                >
                  -
                </button>
                <p className="m-1">{plan.guests}</p>
                <button id="guests" onClick={increaseQty} className="text-dark">
                  +
                </button>
              </div>
            </div>
            <div className="count">
              <p className="fs-6">Bedrooms</p>
              <div className="">
                <button
                  id="Bedrooms"
                  onClick={decreaseQty}
                  disabled={plan.Bedrooms == 1 ? true : false}
                  className="text-dark"
                >
                  -
                </button>
                <p className="m-1">{plan.Bedrooms}</p>
                <button
                  id="Bedrooms"
                  onClick={increaseQty}
                  className="text-dark"
                >
                  +
                </button>
              </div>
            </div>
            <div className="count">
              <p className="fs-6">Beds</p>
              <div className="">
                <button
                  id="Beds"
                  onClick={decreaseQty}
                  disabled={plan.Beds == 1 ? true : false}
                  className="text-dark"
                >
                  -
                </button>
                <p className="m-1">{plan.Beds}</p>
                <button id="Beds" onClick={increaseQty} className="text-dark">
                  +
                </button>
              </div>
            </div>{" "}
            <div className="count">
              <p className="fs-6">Bathrooms</p>
              <div>
                <button
                  id="Bathrooms"
                  onClick={decreaseQty}
                  disabled={plan.Bathrooms == 1 ? true : false}
                  className="text-dark"
                >
                  -
                </button>
                <p className="m-1">{plan.Bathrooms}</p>
                <button
                  id="Bathrooms"
                  onClick={increaseQty}
                  className="text-dark"
                >
                  +
                </button>
              </div>
            </div>
          </section>
          <br /> <br /> <br /> <br /> <br />
          <footer className="Navfooter">
            <p className="text-decoration-underline fw-bold">
              <Link to={"/become-a-host/location"}>Back</Link>
            </p>

            <button className="Navfooterbtn" onClick={postFloorPlan}>
              {loading ? (
                <span className="spinner-border text-secondary"></span>
              ) : (
                "Next"
              )}
            </button>
          </footer>
        </main>
      )}
      <PopModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};
export default FloorPlan;
