import { Link, useNavigate } from "react-router-dom";
import PropertyNav from "../../components/PropertyNav/PropertyNav";
import "./Title.css";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../Provider/Context";
import httpAuth from "../../Services/config";

function Title() {
  const [About, setAbout] = useState("");
  const [count, setCount] = useState(0);
  const { propertyId } = useContext(Context);
  const [loading, setloading] = useState(false);
  const [isDisabled, setisDisabled] = useState(true);
  const navigate = useNavigate();

  const about = (e) => {
    setAbout(e.target.value);
    setCount(e.target.value.length);
  };

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
      console.log(error);
    }
  };
  return (
    <main>
      <PropertyNav />
      <section className="px-3 animate__animated animate__fadeInRight">
        <div className="sectionDiv">
          <div className="texts">
            <h2>Now, let's give your castle a title</h2>
            <p className="fw-light mt-2" style={{ fontSize: "18px" }}>
              Short titles work best. Have fun with it—you can always change it
              later.
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
  );
}

export default Title;
