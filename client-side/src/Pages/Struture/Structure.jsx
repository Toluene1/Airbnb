import { useState } from "react";
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
} from "react-icons/Gi";
import { TbTentOff } from "react-icons/Tb";
import "./Structure.css";
import { Link } from "react-router-dom";
const Structure = () => {
  const [selected, setselected] = useState(null);

  const handleToggle = (id) => {
    if (selected == id) {
      return setselected(null);
    }

    setselected(id);
  };
  return (
    <section>
      <PropertyNav />

      <section className="structure">
        <h2>Which of these best describes your place?</h2>
        <main>
          <div
            id="1"
            className={`${selected == 1 ? "structuresClicked" : "structures"}`}
            onClick={(e) => handleToggle(e.currentTarget.id)}
          >
            <p className="m-1">
              <BsHouseCheck />
            </p>
            <p className="fs-6">House</p>
          </div>
          <div
            id="2"
            className={`${selected == 2 ? "structuresClicked" : "structures"}`}
            onClick={(e) => handleToggle(e.currentTarget.id)}
          >
            <p className="m-1">
              <AiOutlineApartment />
            </p>
            <p className="fs-6">Apartments</p>
          </div>
          <div
            id="3"
            className={`${selected == 3 ? "structuresClicked" : "structures"}`}
            onClick={(e) => handleToggle(e.currentTarget.id)}
          >
            <p className="m-1">
              <GiBarn />
            </p>
            <p className="fs-6">Barns</p>
          </div>
          <div
            id="4"
            className={`${selected == 4 ? "structuresClicked" : "structures"}`}
            onClick={(e) => handleToggle(e.currentTarget.id)}
          >
            <p className="m-1">
              <BsFillCupHotFill />
            </p>
            <p className="fs-6">Bed & Breakfast</p>
          </div>
          <div
            id="5"
            className={`${selected == 5 ? "structuresClicked" : "structures"}`}
            onClick={(e) => handleToggle(e.currentTarget.id)}
          >
            <p className="m-1">
              <GiFarmTractor />
            </p>
            <p className="fs-6">farm</p>
          </div>
          <div
            id="6"
            className={`${selected == 6 ? "structuresClicked" : "structures"}`}
            onClick={(e) => handleToggle(e.currentTarget.id)}
          >
            <p className="m-1">
              <GiTreehouse />
            </p>
            <p className="fs-6">Treehouse</p>
          </div>
          <div
            id="7"
            className={`${selected == 7 ? "structuresClicked" : "structures"}`}
            onClick={(e) => handleToggle(e.currentTarget.id)}
          >
            <p className="m-1">
              <TbTentOff />
            </p>
            <p className="fs-6">Tent</p>
          </div>
          <div
            id="8"
            className={`${selected == 8 ? "structuresClicked" : "structures"}`}
            onClick={(e) => handleToggle(e.currentTarget.id)}
          >
            <p className="m-1">
              <GiSiegeTower />
            </p>
            <p className="fs-6">Tower</p>
          </div>
          <div
            id="9"
            className={`${selected == 9 ? "structuresClicked" : "structures"}`}
            onClick={(e) => handleToggle(e.currentTarget.id)}
          >
            <p className="m-1">
              <GiWindmill />
            </p>
            <p className="fs-6">Windmill</p>
          </div>
          <div
            id="10"
            className={`${selected == 10 ? "structuresClicked" : "structures"}`}
            onClick={(e) => handleToggle(e.currentTarget.id)}
          >
            <p className="m-1">
              <GiCaveEntrance />
            </p>
            <p className="fs-6">Caves</p>
          </div>
        </main>
      </section>
      <footer className="Navfooter">
        <p className="text-decoration-underline fw-bold">
          <Link to={"/become-a-host/overview"}>Back</Link>
        </p>
        <button>Next</button>
      </footer>
    </section>
  );
};
export default Structure;
