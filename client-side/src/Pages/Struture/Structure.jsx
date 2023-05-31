import { useContext, useState } from "react";
import PropertyNav from "../../components/PropertyNav/PropertyNav";
import { BsHouseCheck, BsFillCupHotFill } from "react-icons/bs";
import { AiOutlineApartment } from "react-icons/ai";
import {
  GiBarn,
  GiFarmTractor,
  GiTreehouse,
  GiSiegeTower,
  GiCaveEntrance,
  GiWindmill,
  GiKrakenTentacle,
} from "react-icons/gi";

import "./Structure.css";
import { Link, useNavigate } from "react-router-dom";
import httpAuth from "../../Services/config";
import { Context } from "../../Provider/Context";
const Structure = () => {
  const [isDisabled, setisDisabled] = useState(true);
  const [structure, setstructure] = useState("");
  const [loading, setloading] = useState(false);
  const { propertyId } = useContext(Context);

  const navigate = useNavigate();

  const handleToggle = (id) => {
    if (structure == id) {
      setisDisabled(true);
      return setstructure("");
    }
    setstructure(id);
    setisDisabled(false);
  };

  const postStructure = async () => {
    try {
      setloading(true);
      await httpAuth.post(`/property/updateproperty/${propertyId}`, {
        structure,
      });
      setloading(false);
      navigate("/become-a-host/privacy-type");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <PropertyNav />
      <section className="structure">
        <h2>Which of these best describes your place?</h2>
        <main className="animate__animated animate__fadeInRight animate__delay-0.5s">
          <div
            className={` ${
              structure == "House" ? "structuresClicked" : "structures"
            }`}
            onClick={(e) => handleToggle(e.currentTarget.children[1].innerHTML)}
          >
            <p className="m-1">
              <BsHouseCheck />
            </p>
            <p className="fs-6">House</p>
          </div>
          <div
            className={`${
              structure == "Apartments" ? "structuresClicked" : "structures"
            }`}
            onClick={(e) => handleToggle(e.currentTarget.children[1].innerHTML)}
          >
            <p className="m-1">
              <AiOutlineApartment />
            </p>
            <p className="fs-6">Apartments</p>
          </div>
          <div
            className={`${
              structure == "Barns" ? "structuresClicked" : "structures"
            }`}
            onClick={(e) => handleToggle(e.currentTarget.children[1].innerHTML)}
          >
            <p className="m-1">
              <GiBarn />
            </p>
            <p className="fs-6">Barns</p>
          </div>
          <div
            className={`${
              structure == "Breakfast" ? "structuresClicked" : "structures"
            }`}
            onClick={(e) => handleToggle(e.currentTarget.children[1].innerHTML)}
          >
            <p className="m-1">
              <BsFillCupHotFill />
            </p>
            <p className="fs-6">Breakfast</p>
          </div>
          <div
            className={`${
              structure == "farm" ? "structuresClicked" : "structures"
            }`}
            onClick={(e) => handleToggle(e.currentTarget.children[1].innerHTML)}
          >
            <p className="m-1">
              <GiFarmTractor />
            </p>
            <p className="fs-6">farm</p>
          </div>
          <div
            className={`${
              structure == "Treehouse" ? "structuresClicked" : "structures"
            }`}
            onClick={(e) => handleToggle(e.currentTarget.children[1].innerHTML)}
          >
            <p className="m-1">
              <GiTreehouse />
            </p>
            <p className="fs-6">Treehouse</p>
          </div>
          <div
            className={`${
              structure == "Tent" ? "structuresClicked" : "structures"
            }`}
            onClick={(e) => handleToggle(e.currentTarget.children[1].innerHTML)}
          >
            <p className="m-1">
              <GiKrakenTentacle />
            </p>
            <p className="fs-6">Tent</p>
          </div>
          <div
            className={`${
              structure == "Tower" ? "structuresClicked" : "structures"
            }`}
            onClick={(e) => handleToggle(e.currentTarget.children[1].innerHTML)}
          >
            <p className="m-1">
              <GiSiegeTower />
            </p>
            <p className="fs-6">Tower</p>
          </div>
          <div
            className={`${
              structure == "Windmill" ? "structuresClicked" : "structures"
            }`}
            onClick={(e) => handleToggle(e.currentTarget.children[1].innerHTML)}
          >
            <p className="m-1">
              <GiWindmill />
            </p>
            <p className="fs-6">Windmill</p>
          </div>
          <div
            className={`${
              structure == "Caves" ? "structuresClicked" : "structures"
            }`}
            onClick={(e) => handleToggle(e.currentTarget.children[1].innerHTML)}
          >
            <p className="m-1">
              <GiCaveEntrance />
            </p>
            <p className="fs-6">Caves</p>
          </div>
        </main>
      </section>
      <br /> <br /> <br />
      <footer className="Navfooter">
        <p className="text-decoration-underline fw-bold">
          <Link to={"/become-a-host/about-your-place"}>Back</Link>
        </p>

        <button
          disabled={isDisabled}
          className={`${isDisabled ? "disabledbtn" : "Navfooterbtn"}`}
          onClick={postStructure}
        >
          {loading ? (
            <span className="spinner-border text-secondary"></span>
          ) : (
            "Next"
          )}
        </button>
      </footer>
    </section>
  );
};
export default Structure;
