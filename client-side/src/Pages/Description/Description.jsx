import { Link, useNavigate } from "react-router-dom";
import PropertyNav from "../../components/PropertyNav/PropertyNav";
import "./Description.css";
import { useContext, useEffect, useState } from "react";
import httpAuth from "../../Services/config";
import { Context } from "../../Provider/Context";
import PopModal from "../../components/SignUp";
import Alert from "../../components/Alert";

function Title() {
  const [description, setDescription] = useState(
    "Feel refreshed when you stay in this rustic gem.",
  );
  const [count, setCount] = useState(0);
  const [isDisabled, setisDisabled] = useState(true);
  const [alert, setalert] = useState(false);
  const [alertMessage, setalertMessage] = useState("");
  const { propertyId, setauthloading, setModalShow, modalShow, authloading } =
    useContext(Context);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const about = (e) => {
    setDescription(e.target.value);
    setCount(e.target.value.length);
  };

  useEffect(() => {
    setCount(description.length);
    if (count >= 48) {
      setisDisabled(false);
    } else {
      setisDisabled(true);
    }
  }, [count]);

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

  const postdescription = async () => {
    try {
      setloading(true);
      await httpAuth.post(`/property/updateproperty/${propertyId}`, {
        description,
      });
      setloading(false);
      navigate("/become-a-host/finish-setup");
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
    <main>
      <PropertyNav />
      {authloading ? (
        <div className=" center-screen">
          <div className="spinner-border "></div>
        </div>
      ) : (
        <main>
          <section
            className="px-3 animate__animated animate__fadeInRight "
            style={{ marginBottom: "100px" }}
          >
            <div className="sectionDiv">
              {alert && (
                <Alert closeAlert={closeAlert} alertMessage={alertMessage} />
              )}
              <div className="texts">
                <h2>Create your description</h2>
                <p className="fw-light mt-2" style={{ fontSize: "18px" }}>
                  Share what makes your place special.
                </p>
              </div>
              <div>
                <textarea
                  value={description}
                  id="about"
                  required
                  type="text"
                  className=" titleInput"
                  onChange={about}
                  placeholder="Castle Title"
                  cols="30"
                  rows="10"
                  maxLength={500}
                ></textarea>
                <p className="count mt-2">{count} / 500</p>
              </div>
            </div>
          </section>{" "}
          <footer className="Navfooter">
            <p className="text-decoration-underline fw-bold">
              <Link to={"/become-a-host/title"}>Back</Link>
            </p>

            <button
              disabled={isDisabled}
              className={`${isDisabled ? "disabledbtn" : "Navfooterbtn"}`}
              onClick={postdescription}
            >
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
    </main>
  );
}

export default Title;
