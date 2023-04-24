import { Link } from "react-router-dom";
import PropertyNav from "../../components/PropertyNav/PropertyNav";
import "./FloorPlan.css";
import { useState } from "react";
const FloorPlan = () => {
  const [isDisabled, setisDisabled] = useState(true);
  const [plan, setplan] = useState({
    guests: 4,
    Bedrooms: 1,
    Beds: 1,
    Bathrooms: 1,
  });

  const increaseQty = (e) => {
    const plantype = e.target.id;
    setplan({ ...plan, [plantype]: plan[plantype] + 1 });
  };

  const decreaseQty = (e) => {
    const plantype = e.target.id;
    setplan({ ...plan, [plantype]: plan[plantype] - 1 });
  };

  return (
    <>
      <PropertyNav />
      <section className="floorplan">
        <h2> Let's start with the basics</h2>
        <h5 className="my-5">How many people can stay here?</h5>
        <div className="count">
          <p className="fs-6">Guests</p>
          <div>
            <button
              id="guests"
              onClick={decreaseQty}
              disabled={plan.guests == 1 ? true : false}
            >
              -
            </button>
            <p className="m-1">{plan.guests}</p>
            <button id="guests" onClick={increaseQty}>
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
            >
              -
            </button>
            <p className="m-1">{plan.Bedrooms}</p>
            <button id="Bedrooms" onClick={increaseQty}>
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
            >
              -
            </button>
            <p className="m-1">{plan.Beds}</p>
            <button id="Beds" onClick={increaseQty}>
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
            >
              -
            </button>
            <p className="m-1">{plan.Bathrooms}</p>
            <button id="Bathrooms" onClick={increaseQty}>
              +
            </button>
          </div>
        </div>
      </section>
      <br /> <br /> <br /> <br /> <br />
      <footer className="Navfooter">
        <p className="text-decoration-underline fw-bold">
          <Link to={"/become-a-host/overview"}>Back</Link>
        </p>
        <button className="Navfooterbtn">Next</button>
      </footer>
    </>
  );
};
export default FloorPlan;
