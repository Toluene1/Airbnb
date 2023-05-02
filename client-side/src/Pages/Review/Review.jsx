import PropertyNav from "../../components/PropertyNav/PropertyNav";
import "./Review.css";
import { Link, useNavigate } from "react-router-dom";
import { BiNote } from "react-icons/bi";
import { BsCalendar4Week, BsPen } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import httpAuth from "../../Services/config";
import { Context } from "../../Provider/Context";
function Review() {
  const [property, setProperty] = useState({});
  const { propertyId } = useContext(Context);
  let isMounted = true;
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await httpAuth.get(
          `property/findproperty/${propertyId}`
        );
        setProperty(response.data.prop);
      } catch (error) {
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
  console.log(property);

  return (
    <main>
      <PropertyNav />
      <section className="mt-5 px-3">
        <div className="texts">
          <h5 className="reduceText">Review your listing</h5>
          <p className="fw-light mt-3" style={{ fontSize: "18px" }}>
            Here's what we'll show to guests. Make sure everything looks good.
          </p>
        </div>
        <div className="sectionsDiv gap-3">
          <div className="getImages shadow">
            <h1>Tolu</h1>
          </div>
          <div className="getDetails">
            <h3>What's next?</h3>
            <div className="d-flex mb-1">
              <div>
                {" "}
                <BiNote className="fs-2 me-3" />
              </div>
              <div>
                <h5>Confirm a few details and publish</h5>
                <p
                  style={{ fontSize: "14px", marginTop: "-5px" }}
                  className="fw-light"
                >
                  We’ll let you know if you need to verify your identity or
                  register with the local government.
                </p>
              </div>
            </div>
            <div className="d-flex mb-1">
              <div>
                {" "}
                <BsCalendar4Week className="fs-2 me-3" />
              </div>
              <div>
                <h5>Set up your calendar</h5>
                <p
                  style={{ fontSize: "14px", marginTop: "-5px" }}
                  className="fw-light"
                >
                  Choose which dates your listing is available. It will be
                  visible 24 hours after you publish.
                </p>
              </div>
            </div>
            <div className="d-flex mb-1">
              <div>
                {" "}
                <BsPen className="fs-2 me-3" />
              </div>
              <div>
                <h5>Adjust your settings</h5>
                <p
                  style={{ fontSize: "14px", marginTop: "-5px" }}
                  className="fw-light"
                >
                  Set house rules, select a cancellation policy, choose how
                  guests book, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="Navfooter">
        <p className="text-decoration-underline fw-bold">
          <Link to={"/become-a-host/structure"}>Back</Link>
        </p>

        {/* <button
          disabled={isDisabled}
          className={`${isDisabled ? "disabledbtn" : "Navfooterbtn"}`}
          onClick={postPrivacy}
        >
          {loading ? (
            <span className="spinner-border text-secondary"></span>
          ) : (
            "Next"
          )}
        </button> */}
      </footer>
    </main>
  );
}

export default Review;
