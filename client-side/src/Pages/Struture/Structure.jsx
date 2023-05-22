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
  const [selected, setselected] = useState(null);
  const [isDisabled, setisDisabled] = useState(true);
  const [structure, setstructure] = useState("");
  const [loading, setloading] = useState(false);
  const { propertyId } = useContext(Context);

  const navigate = useNavigate();

  const handleToggle = (id, val) => {
    if (selected == id) {
      return setselected(null);
    }
    setisDisabled(false);
    setselected(id);
    setstructure(val);
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
            id="1"
            className={` ${selected == 1 ? "structuresClicked" : "structures"}`}
            onClick={(e) =>
              handleToggle(
                e.currentTarget.id,
                e.currentTarget.children[1].innerHTML,
              )
            }
          >
            <p className="m-1">
              <BsHouseCheck />
            </p>
            <p className="fs-6">House</p>
          </div>
          <div
            id="2"
            className={`${selected == 2 ? "structuresClicked" : "structures"}`}
            onClick={(e) =>
              handleToggle(
                e.currentTarget.id,
                e.currentTarget.children[1].innerHTML,
              )
            }
          >
            <p className="m-1">
              <AiOutlineApartment />
            </p>
            <p className="fs-6">Apartments</p>
          </div>
          <div
            id="3"
            className={`${selected == 3 ? "structuresClicked" : "structures"}`}
            onClick={(e) =>
              handleToggle(
                e.currentTarget.id,
                e.currentTarget.children[1].innerHTML,
              )
            }
          >
            <p className="m-1">
              <GiBarn />
            </p>
            <p className="fs-6">Barns</p>
          </div>
          <div
            id="4"
            className={`${selected == 4 ? "structuresClicked" : "structures"}`}
            onClick={(e) =>
              handleToggle(
                e.currentTarget.id,
                e.currentTarget.children[1].innerHTML,
              )
            }
          >
            <p className="m-1">
              <BsFillCupHotFill />
            </p>
            <p className="fs-6">Breakfast</p>
          </div>
          <div
            id="5"
            className={`${selected == 5 ? "structuresClicked" : "structures"}`}
            onClick={(e) =>
              handleToggle(
                e.currentTarget.id,
                e.currentTarget.children[1].innerHTML,
              )
            }
          >
            <p className="m-1">
              <GiFarmTractor />
            </p>
            <p className="fs-6">farm</p>
          </div>
          <div
            id="6"
            className={`${selected == 6 ? "structuresClicked" : "structures"}`}
            onClick={(e) =>
              handleToggle(
                e.currentTarget.id,
                e.currentTarget.children[1].innerHTML,
              )
            }
          >
            <p className="m-1">
              <GiTreehouse />
            </p>
            <p className="fs-6">Treehouse</p>
          </div>
          <div
            id="7"
            className={`${selected == 7 ? "structuresClicked" : "structures"}`}
            onClick={(e) =>
              handleToggle(
                e.currentTarget.id,
                e.currentTarget.children[1].innerHTML,
              )
            }
          >
            <p className="m-1">
              <GiKrakenTentacle />
            </p>
            <p className="fs-6">Tent</p>
          </div>
          <div
            id="8"
            className={`${selected == 8 ? "structuresClicked" : "structures"}`}
            onClick={(e) =>
              handleToggle(
                e.currentTarget.id,
                e.currentTarget.children[1].innerHTML,
              )
            }
          >
            <p className="m-1">
              <GiSiegeTower />
            </p>
            <p className="fs-6">Tower</p>
          </div>
          <div
            id="9"
            className={`${selected == 9 ? "structuresClicked" : "structures"}`}
            onClick={(e) =>
              handleToggle(
                e.currentTarget.id,
                e.currentTarget.children[1].innerHTML,
              )
            }
          >
            <p className="m-1">
              <GiWindmill />
            </p>
            <p className="fs-6">Windmill</p>
          </div>
          <div
            id="10"
            className={`${selected == 10 ? "structuresClicked" : "structures"}`}
            onClick={(e) =>
              handleToggle(
                e.currentTarget.id,
                e.currentTarget.children[1].innerHTML,
              )
            }
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
