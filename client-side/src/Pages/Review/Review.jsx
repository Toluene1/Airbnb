import PropertyNav from "../../components/PropertyNav/PropertyNav";
import React from "react";
import "./Review.css";
import { Link, useNavigate } from "react-router-dom";
import UserPics from "../../../src/assets/User.jpg";
import { BiNote } from "react-icons/bi";
import { BsCalendar4Week, BsPen, BsStarFill } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import httpAuth from "../../Services/config";
import { MdCancel } from "react-icons/md";
import { Context } from "../../Provider/Context";
import Modal from "react-bootstrap/Modal";
function Review(props) {
  const [property, setProperty] = useState({});
  const { propertyId } = useContext(Context);
  const [loading, setloading] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  let isMounted = true;
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setloading(true);
        const response = await httpAuth.get(
          `property/findproperty/${propertyId}`,
        );
        setProperty(response.data.prop);
        setloading(false);
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
      <PropertyNav />
      <section className="mt-5 px-4" style={{ marginBottom: "100px" }}>
        <div className="texts">
          <h5 className="reduceText">Review your listing</h5>
          <p className="fw-light mt-3" style={{ fontSize: "18px" }}>
            Here's what we'll show to guests. Make sure everything looks good.
          </p>
        </div>
        <div className="sectionsDiv gap-4 ">
          <div
            className="getImages shadow px-3"
            onClick={() => setModalShow(true)}
          >
            <div className="Images">
              {loading ? (
                <span className="spinner-border text-secondary"></span>
              ) : (
                <img
                  src={property.images[0]}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                  }}
                  alt=""
                />
              )}
            </div>
            <div className=" mt-3 flexDiv">
              <div>
                <h5>{property.About}</h5>
                <p style={{ marginTop: "-8px" }}>
                  <b>${property.price}</b>{" "}
                  <span className="fw-light">night</span>
                </p>
              </div>
              <div>
                new{" "}
                <BsStarFill style={{ fontSize: "12px", marginTop: "-2px" }} />
              </div>
            </div>
          </div>
          <div className="getDetails">
            <h3>What's next?</h3>
            <div className="d-flex mb-2 mt-3">
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
            <div className="d-flex my-2">
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
          <Link to={"/become-a-host/price"}>Back</Link>
        </p>
        <Link to={"/become-a-host/publish-celebration"}>
          <button className="Navfooterbtn">Next</button>
        </Link>
      </footer>
      <section>
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          {...props}
          size="xl"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header className=" reviewheader">
            <div>
              <div>
                <button
                  className="modalButtonHeader"
                  onClick={() => setModalShow(false)}
                >
                  <MdCancel className="fs-3" />
                </button>
              </div>
              <div>
                <span className="fw-bold">Full Preview</span>
              </div>
            </div>
          </Modal.Header>
          <Modal.Body className="modalBody">
            <div className="ModalBigDiv gap-4">
              <div className="divImage">
                {loading ? (
                  <span className="spinner-border text-secondary"></span>
                ) : (
                  <img
                    src={property.images[0]}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "10px",
                    }}
                    alt=""
                  />
                )}
              </div>
              <div className="divtextPreview">
                <h2>{property.About}</h2>
                <div className="divCover3">
                  <div>
                    <p className="fs-4">
                      {property?.privacy} hosted by {property?.host?.LastName}
                    </p>
                    <p style={{ marginTop: "-16px" }}>
                      {property.guests} guests - {property.Bedrooms} Bedrooms -{" "}
                      {property.Beds} Beds - {property.Bathrooms} Baths
                    </p>
                  </div>
                  <div className="UserImage">
                    <img
                      src={property?.host?.Avatar || UserPics}
                      alt=""
                      style={{
                        width: "100%",
                        borderRadius: "50px",
                        height: "100%",
                      }}
                    />
                  </div>
                </div>
                <hr className="my-4" />
                <div>
                  <p className="fs-5">
                    Make some memories at this unique and family-friendly place.
                  </p>
                </div>
                <hr className="my-4" />
                <div>
                  <p className="fw-bold">Amenities</p>
                  <ul>
                    {property?.Amenities?.map((Amenities, index) => (
                      <li key={index}>{Amenities}</li>
                    ))}
                  </ul>
                </div>
                <hr className="my-4" />
                <div>
                  <p className="fw-bold">Location</p>
                  <p>
                    {property?.Location?.address}, {property?.Location?.city},{" "}
                    {property?.Location?.state}, {property?.Location?.country},{" "}
                    {property?.Location?.postal_code}.{" "}
                  </p>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </section>
    </main>
  );
}

export default Review;
