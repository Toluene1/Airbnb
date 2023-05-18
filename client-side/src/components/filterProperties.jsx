import Modal from "react-bootstrap/Modal";
import "./Navbar/Navbar.css";
import FilterBody from "./FilterBody";
import { MdCancel } from "react-icons/md";
import { useContext } from "react";
import { Context } from "../Provider/Context";

function FilterProperties(props) {
  const { setFilterShow, setFullscreen } = useContext(Context);
  function hideFilter() {
    setFilterShow(false);
    setFullscreen(false);
  }
  return (
    <>
      <div id="modalDisplay">
        <Modal
          {...props}
          className="modalStyle pt-2"
          style={{ zIndex: "5000" }}
        >
          <Modal.Header className="p-1 pe-3 py-2 ">
            <div className="divCoverHeader">
              <div>
                <button className="modalButtonHeader1" onClick={hideFilter}>
                  <MdCancel className="fs-3" />
                </button>
              </div>
              <div>
                <span className="fw-bold">Full Preview</span>
              </div>
            </div>
          </Modal.Header>
          <Modal.Body className="ms-2">
            <FilterBody hideFilter={hideFilter} />
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default FilterProperties;
