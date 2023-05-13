import Modal from "react-bootstrap/Modal";
import "./Navbar/Navbar.css";
import FilterBody from "./FilterBody";
import { MdCancel } from "react-icons/md";
import { useContext } from "react";
import { Context } from "../Provider/Context";

function FilterWebProperties(props) {
  const { setFilterWeb, setFilterShow } = useContext(Context);

  function hideFilter() {
    setFilterShow(false);
    setFilterWeb(false);
  }

  return (
    <main>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
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
        <Modal.Body className="ms-2" style={{ height: "80vh" }}>
          <FilterBody hideFilter={hideFilter} />
        </Modal.Body>
      </Modal>
    </main>
  );
}

export default FilterWebProperties;
