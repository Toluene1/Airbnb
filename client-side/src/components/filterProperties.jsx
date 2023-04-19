import Modal from "react-bootstrap/Modal";
import "./Navbar/Navbar.css";
import FilterBody from "./FilterBody";

function FilterProperties(props) {
  return (
    <>
      <div id="modalDisplay">
        <Modal {...props} className="modalStyle ">
          <Modal.Header closeButton className="p-1 pe-3 ">
            <Modal.Title className="text-center ms-auto">Filters</Modal.Title>
          </Modal.Header>
          <Modal.Body className="ms-2">
            <FilterBody />
          </Modal.Body>
          <Modal.Footer>
            <div>
              <a href="#" className="text-dark  clearAll">
                clear all
              </a>
            </div>
            <button
              onClick={props.onHide}
              type="submit"
              className="footerButton"
            >
              Show *** stays
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default FilterProperties;
