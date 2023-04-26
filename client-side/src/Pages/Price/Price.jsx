import { useState } from "react";
import PropertyNav from "../../components/PropertyNav/PropertyNav";
import "./Price.css";
import { Link } from "react-router-dom";
const Price = () => {
  const [price, setprice] = useState(52);
  const handleIncreasePrice = () => {
    setprice((prev) => (prev += 5));
  };
  const handleDecreasePrice = () => {
    setprice((prev) => (prev -= 5));
  };
  return (
    <>
      <PropertyNav />
      <section className="Price   animate__animated animate__fadeInUp animate__delay-0.5s">
        <h2>Now, set your price</h2>
        <p className="time"> You can change it anytime.</p>
        <main>
          <div className="d-flex  justify-content-between align-items-center gap-3">
            <button
              onClick={handleDecreasePrice}
              disabled={price == 12 ? true : false}
            >
              {" "}
              -{" "}
            </button>
            <div className="showPrice">${price}</div>
            <button onClick={handleIncreasePrice}>+</button>
          </div>

          <div className="footers">
            <p>per night</p>
            <p className="p-3 fs-5">
              Places like yours in your area usually <br /> range from $39 to
              $65
            </p>
          </div>
        </main>
      </section>
      <footer className="Navfooter">
        <p className="text-decoration-underline fw-bold">
          <Link to={"/become-a-host/about-your-place"}>Back</Link>
        </p>

        <Link to={"/become-a-host/privacy-type"} className="text-white">
          <button className="Navfooterbtn">Next</button>
        </Link>
      </footer>
    </>
  );
};
export default Price;
