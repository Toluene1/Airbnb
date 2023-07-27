import { Link, useNavigate } from "react-router-dom";
import PropertyNav from "../../components/PropertyNav/PropertyNav";
import "./Title.css";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../Provider/Context";
import httpAuth from "../../Services/config";
import PopModal from "../../components/SignUp";
import Alert from "../../components/Alert";

function Title() {
  const [About, setAbout] = useState("");
  const [count, setCount] = useState(0);
  const [alert, setalert] = useState(false);
  const [alertMessage, setalertMessage] = useState("");
  const { propertyId, setauthloading, setModalShow, modalShow, authloading } =
    useContext(Context);
  const [loading, setloading] = useState(false);
  const [isDisabled, setisDisabled] = useState(true);
  const navigate = useNavigate();

  const about = (e) => {
    setAbout(e.target.value);
    setCount(e.target.value.length);
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

  useEffect(() => {
    if (count >= 5) {
      return setisDisabled(false);
    }
    setisDisabled(true);
  }, [count]);

  const postAbout = async () => {
    try {
      setloading(true);
      await httpAuth.post(`/property/updateproperty/${propertyId}`, {
        About,
      });
      setloading(false);
      navigate("/become-a-host/description");
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
          <section className="px-3 animate__animated animate__fadeInRight">
            <div className="sectionDiv">
              {alert && (
                <Alert closeAlert={closeAlert} alertMessage={alertMessage} />
              )}
              <div className="texts">
                <h2>Now, let's give your castle a title</h2>
                <p className="fw-light mt-2" style={{ fontSize: "18px" }}>
                  Short titles work best. Have fun with it—you can always change
                  it later.
                </p>
              </div>
              <div>
                <textarea
                  value={About}
                  id="about"
                  required
                  type="text"
                  className=" titleInput"
                  onChange={about}
                  placeholder="Castle Title"
                  cols="30"
                  rows="10"
                  maxLength={32}
                ></textarea>
                <p className="count mt-2">{count} / 32</p>
              </div>
            </div>
          </section>
          <footer className="Navfooter">
            <p className="text-decoration-underline fw-bold">
              <Link to={"/become-a-host/photos"}>Back</Link>
            </p>

            <button
              disabled={isDisabled}
              className={`${isDisabled ? "disabledbtn" : "Navfooterbtn"}`}
              onClick={postAbout}
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
