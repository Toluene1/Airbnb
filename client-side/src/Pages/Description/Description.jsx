import { Link } from "react-router-dom";
import PropertyNav from "../../components/PropertyNav/PropertyNav";
import "./Description.css";
import { useEffect, useState } from "react";

function Title() {
  const [About, setAbout] = useState(
    "Feel refreshed when you stay in this rustic gem."
  );
  const [count, setCount] = useState(0);
  const [isDisabled, setisDisabled] = useState(true);

  const about = (e) => {
    setAbout(e.target.value);
    setCount(e.target.value.length);
  };
  console.log(About);

  useEffect(() => {
    if (count == 50) {
      setisDisabled(false);
    }
  }, [count]);

  return (
    <main>
      <PropertyNav />
      <section className="px-3 animate__animated animate__fadeInRight">
        <div className="sectionDiv">
          <div className="texts">
            <h2>Create your description</h2>
            <p className="fw-light mt-2" style={{ fontSize: "18px" }}>
              Share what makes your place special.
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
              maxLength={500}
            ></textarea>
            <p className="count mt-2">{count} / 500</p>
          </div>
        </div>
      </section>
      <footer className="Navfooter">
        <p className="text-decoration-underline fw-bold">
          <Link to={"/become-a-host/title"}>Back</Link>
        </p>

        <Link to={"/become-a-host/finish-setup"} className="text-white">
          <button
            disabled={isDisabled}
            className={`${isDisabled ? "disabledbtn" : "Navfooterbtn"}`}
          >
            Next
          </button>
        </Link>
      </footer>
    </main>
  );
}

export default Title;
