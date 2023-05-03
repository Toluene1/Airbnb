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
          `property/findproperty/${propertyId}`
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
  console.log(property);
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
                new <BsStarFill style={{ fontSize: "12px" }} />
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
          <Link to={"/become-a-host/structure"}>Back</Link>
        </p>

        <button className="Navfooterbtn">Next</button>
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
          <Modal.Header>
            <div className="divCover">
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
            <h4>Centered Modal</h4>
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
                      {property.guests} guests - {property.Bedrooms} Bedroom -{" "}
                      {property.Beds} Bed - {property.Bathrooms} Bath
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
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae facere ipsa velit iure quod. Molestias, quia!
                  Corporis illo officia omnis reiciendis, similique vel!
                  Accusamus animi voluptate culpa asperiores tenetur atque et
                  quasi facilis molestiae perspiciatis nulla adipisci nostrum
                  delectus consectetur dignissimos, placeat eius, deleniti
                  tempora, consequuntur provident. Deleniti enim dicta, ab at
                  provident esse deserunt aliquid recusandae unde, adipisci
                  ratione labore delectus veniam accusantium dolorem, libero
                  odio debitis rem alias qui corporis! At voluptatibus similique
                  accusamus cupiditate fugit, vel libero? Quidem aut vel quis
                  mollitia consequatur facilis blanditiis delectus ut. Quo,
                  voluptatum nemo qui obcaecati deserunt dicta quaerat magnam
                  cupiditate, ullam vitae alias vel accusantium ducimus hic
                  perferendis. Perferendis eum, explicabo amet ea rerum culpa
                  nulla at tenetur quisquam impedit corporis dolore quis, quo
                  quibusdam itaque? Necessitatibus laboriosam similique eius
                  obcaecati iste temporibus unde dolores, incidunt nobis
                  voluptate sed, eos quidem molestias reiciendis porro
                  recusandae earum iusto cum assumenda maxime quisquam? Animi
                  praesentium libero error, cumque ducimus, perferendis incidunt
                  fuga, molestias quia et recusandae quas corrupti atque
                  mollitia consectetur totam magni adipisci iure. Ipsam
                  architecto nesciunt animi culpa eaque dignissimos voluptatibus
                  quisquam neque officia magnam esse dolore odit eos laborum,
                  quos molestias repellat perspiciatis amet iusto ut itaque quo
                  recusandae. Corrupti quia reiciendis iste illo expedita
                  deserunt, delectus atque porro itaque, magni voluptatibus ad
                  repudiandae quam! Tenetur magnam nam sit placeat possimus
                  voluptatum blanditiis, consectetur quas ad officiis tempore
                  itaque accusantium quaerat temporibus eligendi ducimus
                  voluptatibus delectus similique officia repellat. Hic, rerum
                  delectus! Maxime, earum. Cupiditate incidunt veniam ea.
                  Asperiores dolorum culpa facilis magnam alias. Cumque tenetur
                  dolorem magnam voluptates voluptate a omnis architecto maiores
                  officiis ullam. Aspernatur vitae iusto porro dignissimos modi
                  dolorem voluptatum voluptas repellat neque. Corporis quos
                  reprehenderit aut illum eaque totam deserunt, eum nulla
                  doloribus! Cupiditate pariatur esse consequuntur. Ipsam
                  debitis incidunt, ipsa doloribus necessitatibus nostrum!
                </p>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </section>
    </main>
  );
}

export default Review;
