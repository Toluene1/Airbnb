import Modal from "react-bootstrap/Modal";
import "./Navbar/Navbar.css";
import { MdOutlineCancel } from "react-icons/md";
import { useContext } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { Context } from "../Provider/Context";
import SearchBody from "./SearchBody";

function SearchProperties(props) {
  const { setFullscreen, setSearchShow } = useContext(Context);
  function hideFilter() {
    setSearchShow(false);
    setFullscreen(false);
  }
  return (
    <>
      <div id="modalDisplay">
        <Modal {...props} className="modalStyle" style={{ zIndex: "5000" }}>
          <Modal.Header className="p-1 pe-3 py-2 ">
            <div className="divCoverHeader py-3">
              <div>
                <button className="modalButtonHeader1" onClick={hideFilter}>
                  <MdOutlineCancel className="fs-3 text-dark" />
                </button>
              </div>
              <div>
                <button className="stays px-3 text-dark">Stays</button>
                <button className="experiences px-3 text-dark">
                  Experiences
                </button>
              </div>
            </div>
          </Modal.Header>
          <Modal.Body>
            <SearchBody hideFilter={hideFilter} />
          </Modal.Body>
          <Modal.Footer>
            <section className="divFilterFooter ">
              <button className="text-dark clearAll  border-0 bg-white">
                clear all
              </button>
              <div>
                <button className="SearchfooterButton">
                  <BiSearchAlt2 className="me-2" />
                  <span>search</span>
                </button>
              </div>
            </section>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default SearchProperties;
