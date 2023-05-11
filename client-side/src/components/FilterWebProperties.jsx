import Modal from "react-bootstrap/Modal";
import "./Navbar/Navbar.css";
import FilterBody from "./FilterBody";
import { MdCancel } from "react-icons/md";
import { useContext } from "react";
import { Context } from "../Provider/Context";

function FilterWebProperties(props) {
  const { setFilterWeb } = useContext(Context);

  function hideFilterWeb() {
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
              <button className="modalButtonHeader1" onClick={hideFilterWeb}>
                <MdCancel className="fs-3" />
              </button>
            </div>
            <div>
              <span className="fw-bold">Full Preview</span>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body className="ms-2 modal-Body">
          <FilterBody />
        </Modal.Body>
      </Modal>
    </main>
  );
}

export default FilterWebProperties;
