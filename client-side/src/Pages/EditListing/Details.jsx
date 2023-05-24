import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ListingsNav from "../../components/ListingsNav/ListingsNav";
import httpAuth from "../../Services/config";
import FooterProp from "../../components/FooterProp.jsx/FooterProp";
import "./Details.css";
import { FaAngleRight } from "react-icons/fa";
const Details = () => {
  const { id } = useParams();
  const [details, setdetails] = useState({});
  const [loading, setloading] = useState(true);
  const [color, setcolor] = useState("Photos");
  const [tab, settab] = useState("listing");

  let isMounted = true;

  const handleToggleColor = (e) => {
    setcolor(e.currentTarget.textContent);
  };

  const handleWindowToggle = () => {
    const currentscrollposition = window.scrollY;
    if (currentscrollposition > 0 && currentscrollposition < 382) {
      return setcolor("Photos");
    }
    if (currentscrollposition > 382 && currentscrollposition < 777) {
      return setcolor("Listing basics");
    }
    if (currentscrollposition == 780) {
      return setcolor("Amenities");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleWindowToggle);
    return () => {
      window.removeEventListener("scroll", handleWindowToggle);
    };
  }, [window.scrollY]);

  useEffect(() => {
    const EditListing = async () => {
      try {
        setloading(true);
        const response = await httpAuth.get(`property/edithostproperty${id}`);
        setdetails(response.data.prop);
        setloading(false);
      } catch (error) {
        setdetails({});
        console.log(error.response.data.msg);
      }
    };

    if (isMounted) {
      EditListing();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <ListingsNav />
      {loading ? (
        <div className="center-screen">
          <span className="spinner-border text-danger"></span>
        </div>
      ) : (
        <>
          <main className="details">
            <div className="d-flex justify-content-between align-items-baseline">
              <div>
                <h3>{details.About}</h3>
              </div>
              <div>
                <Link to={`/property/${details._id}`}>
                  <button className="btn btn-dark">preview lisiting</button>
                </Link>
              </div>
            </div>
            <div className="mobile_tab">
              <p className={`${tab == "listing" ? "clickedtab" : ""}`}>
                Listing Details
              </p>
              <p>Pricing and availability</p>
              <p>Policies and rules</p>
              <p>info for guest</p>
              <p>Co-Hosts</p>
            </div>
            <section className="d-flex justify-content-between mt-3 ">
              <main className="side">
                <button className="border-0 p-2 fw-bold text-start w-100">
                  Listing details
                </button>

                <div className="mt-3" style={{ cursor: "pointer" }}>
                  <a href="#photos">
                    {" "}
                    <p
                      className={`${
                        color == "Photos" ? "clickedTab" : "sidep"
                      }`}
                      onClick={handleToggleColor}
                    >
                      Photos
                    </p>
                  </a>
                  <a href="#list">
                    {" "}
                    <p
                      className={`${
                        color == "Listing basics" ? "clickedTab" : "sidep"
                      }`}
                      onClick={handleToggleColor}
                    >
                      Listing basics
                    </p>
                  </a>
                  <a href="#amenity">
                    <p
                      className={`${
                        color == "Amenities" ? "clickedTab" : "sidep"
                      }`}
                      onClick={handleToggleColor}
                    >
                      Amenities
                    </p>
                  </a>
                  <a href="#location">
                    <p
                      className={`${
                        color == "Location" ? "clickedTab" : "sidep"
                      }`}
                      onClick={handleToggleColor}
                    >
                      Location
                    </p>
                  </a>{" "}
                  <a href="#prop">
                    <p
                      className={`${
                        color == "Property and rooms" ? "clickedTab" : "sidep"
                      }`}
                      onClick={handleToggleColor}
                    >
                      Property and rooms
                    </p>
                  </a>
                  <p className="sidep">Accessibility</p>
                </div>

                <div className="mt-3">
                  <h6>pricing and availability</h6>
                  <h6 className="my-4">policies and rules</h6>
                  <h6> Info for guests</h6>
                  <h6 className="my-4"> Co-Host</h6>
                </div>
              </main>

              <main className="content">
                <div className="border-bottom">
                  <div className="d-flex justify-content-between align-items-center ">
                    <h5 id="photos">Photos</h5>
                    <button className=" border-0  bg-white text-dark">
                      <span className="text-decoration-underline"> Edit</span>
                      <span className="mx-2 fw-bold fs-6">
                        {" "}
                        <FaAngleRight />{" "}
                      </span>
                    </button>
                  </div>

                  <main className="Photo">
                    {details?.images.map((image, index) => (
                      <div key={index}>
                        <img src={image} alt="" />
                      </div>
                    ))}
                    <h4>{details?.images.length}Photos</h4>
                  </main>
                </div>

                {/* title  */}
                <div id="list" className="my-3 border-bottom">
                  <h5 className="mt-1">Listing Basics</h5>
                  <div className="d-flex justify-content-between align-items-center mt-5">
                    <p>Listing Title</p>
                    <button className=" border-0 fw-bold bg-white text-dark">
                      <span className="text-decoration-underline"> Edit</span>
                      <span className="mx-2 fw-bold fs-6">
                        {" "}
                        <FaAngleRight />{" "}
                      </span>
                    </button>
                  </div>
                  <p className="my-1">{details?.About}</p>
                </div>
                {/* description  */}
                <div className="my-5 border-bottom">
                  <div className="d-flex justify-content-between align-items-center mt-5">
                    <p>Listing description</p>
                    <button className=" border-0 fw-bold bg-white text-dark">
                      <span className="text-decoration-underline"> Edit</span>
                      <span className="mx-2 fw-bold fs-6">
                        {" "}
                        <FaAngleRight />{" "}
                      </span>
                    </button>
                  </div>
                  <p className="my-1">{details?.description}</p>
                </div>
                {/* guests  */}

                <div className="d-flex justify-content-between align-items-baseline mt-3 border-bottom ">
                  <p>Number of Guests</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <button className="round_btn border text-dark bg-light">
                      -
                    </button>
                    <span className="mx-3 fw-bold fs-6">{details?.guests}</span>
                    <button className="round_btn border text-dark bg-light">
                      +
                    </button>
                  </div>
                </div>
                {/* amenities  */}
                <div id="amenity" className="mt-3 border-bottom ">
                  <div className="d-flex justify-content-between align-items-baseline ">
                    <h6>Amenities</h6>
                    <button className=" border-0 fw-bold bg-white">
                      <span className="text-decoration-underline text-dark">
                        {" "}
                        Edit
                      </span>
                      <span className="mx-2 fw-bold fs-6">
                        {" "}
                        <FaAngleRight />{" "}
                      </span>
                    </button>
                  </div>
                  <div className="mt-3">
                    {details?.Amenities.map((amenities, index) => (
                      <p key={index}>{amenities}</p>
                    ))}
                  </div>
                </div>

                {/* Location  */}
                <div id="location" className="my-1 border-bottom">
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <h6>Location</h6>
                    <button className=" border-0 fw-bold bg-white text-dark">
                      <span className="text-decoration-underline"> Edit</span>
                      <span className="mx-2 fw-bold fs-6">
                        {" "}
                        <FaAngleRight />{" "}
                      </span>
                    </button>
                  </div>
                  <p className="my-1">
                    {details?.Location.address +
                      ", " +
                      details?.Location.city +
                      ", " +
                      details?.Location.state +
                      ", " +
                      details?.Location.country}
                  </p>
                </div>

                {/* prop and rooms  */}

                <div className="my-2 border-bottom">
                  <div className="d-flex justify-content-between align-items-center mt-5">
                    <h6 id="prop">Property and Rooms</h6>
                    <button className=" border-0 fw-bold bg-white text-dark">
                      <span className="text-decoration-underline"> Edit</span>
                      <span className="mx-2 fw-bold fs-6">
                        {" "}
                        <FaAngleRight />{" "}
                      </span>
                    </button>
                  </div>
                  <p>Rooms and Spaces</p>
                  <div>
                    <p className="m-0 text-secondary">
                      Bedrooms:{details?.Bedrooms}
                    </p>
                    <p className="m-0 text-secondary">
                      Bathrooms:{details?.Bathrooms}
                    </p>
                    <p className="mb-3 text-secondary">Beds:{details?.Beds}</p>
                  </div>
                </div>
              </main>
            </section>
          </main>
          <FooterProp />
        </>
      )}
    </>
  );
};
export default Details;
