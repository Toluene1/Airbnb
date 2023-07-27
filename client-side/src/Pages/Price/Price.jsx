import { useContext, useEffect, useState } from "react";
import PropertyNav from "../../components/PropertyNav/PropertyNav";
import "./Price.css";
import { Link, useNavigate } from "react-router-dom";
import httpAuth from "../../Services/config";
import { Context } from "../../Provider/Context";
import PopModal from "../../components/SignUp";
import Alert from "../../components/Alert";
const Price = () => {
  const [price, setprice] = useState(52);
  const { propertyId, setauthloading, setModalShow, modalShow, authloading } =
    useContext(Context);
  const [alert, setalert] = useState(false);
  const [alertMessage, setalertMessage] = useState("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const handleIncreasePrice = () => {
    setprice((prev) => (prev += 5));
  };
  const handleDecreasePrice = () => {
    setprice((prev) => (prev -= 5));
  };
  let isMounted = true;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        await httpAuth.get("/user/fetchUser");
        setauthloading(false);
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

  const postPrice = async () => {
    try {
      setloading(true);
      await httpAuth.post(`/property/updateproperty/${propertyId}`, {
        price,
      });
      setloading(false);
      navigate("/become-a-host/review");
    } catch (error) {
      setalert(true);
      setalertMessage(error.response.data.msg);
      setloading(false);
    }
  };

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
          <section className="Price   animate__animated animate__fadeInRight animate__delay-0.5s">
            {alert && (
              <Alert closeAlert={closeAlert} alertMessage={alertMessage} />
            )}

            <h2>Now, set your price</h2>
            <p className="time"> You can change it anytime.</p>
            <main>
              <div className="d-flex  justify-content-between align-items-center gap-3">
                <button
                  onClick={handleDecreasePrice}
                  disabled={price == 12 ? true : false}
                  className="text-dark"
                >
                  {" "}
                  -{" "}
                </button>
                <div className="showPrice">${price}</div>
                <button onClick={handleIncreasePrice} className="text-dark">
                  +
                </button>
              </div>

              <div className="footers">
                <p>per night</p>
                <p className="p-3 fs-5">
                  Places like yours in your area usually <br /> range from $39
                  to $65
                </p>
              </div>
            </main>
          </section>
          <footer className="Navfooter">
            <p className="text-decoration-underline fw-bold">
              <Link to={"/become-a-host/finish-setup"}>Back</Link>
            </p>

            <button className="Navfooterbtn" onClick={postPrice}>
              {loading ? (
                <span className="spinner-border text-secondary"></span>
              ) : (
                "Next"
              )}{" "}
            </button>
          </footer>
        </main>
      )}
      <PopModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};
export default Price;
