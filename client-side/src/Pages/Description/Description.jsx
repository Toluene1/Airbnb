import { Link, useNavigate } from "react-router-dom";
import PropertyNav from "../../components/PropertyNav/PropertyNav";
import "./Description.css";
import { useContext, useEffect, useState } from "react";
import httpAuth from "../../Services/config";
import { Context } from "../../Provider/Context";

function Title() {
  const [description, setDescription] = useState(
    "Feel refreshed when you stay in this rustic gem."
  );
  const [count, setCount] = useState(0);
  const [isDisabled, setisDisabled] = useState(true);
  const { propertyId } = useContext(Context);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const about = (e) => {
    setDescription(e.target.value);
    setCount(e.target.value.length);
  };
  console.log(description);

  useEffect(() => {
    if (count == 50) {
      setisDisabled(false);
    }
  }, [count]);
  const postdescription = async () => {
    try {
      setloading(true);
      await httpAuth.post(`/property/updateproperty/${propertyId}`, {
        description,
      });
      setloading(false);
      navigate("/become-a-host/finish-setup");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main>
      <PropertyNav />
      <section
        className="px-3 animate__animated animate__fadeInRight "
        style={{ marginBottom: "100px" }}
      >
        <div className="sectionDiv">
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
  );
}

export default Title;
