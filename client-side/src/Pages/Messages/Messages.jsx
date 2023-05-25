import { Link } from "react-router-dom";
import LoginFooter from "../../components/LoginFooter/LoginFooter";
import NavbarAuth from "../../components/Navbar/NavbarAuth";
import "./Messages.css";
import { BsFilter } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
const Messages = () => {
  return (
    <>
      <NavbarAuth />

      <section className="messages ">
        <main className="inbox ">
          <div className="d-flex justify-content-between align-items-center p-2 border-bottom info">
            <h5>Messages</h5>
            <p className="text-dark fs-4 ">
              <BsFilter />
            </p>
          </div>
          <div className="mob">
            <h5>You have no unread messages</h5>
            <p className="my-3">
              When you book a trip or experience, messages from your host will
              show up here.
            </p>
            <Link to={"/"}>
              <button className="text-dark">Explore Airbnb</button>
            </Link>
          </div>
        </main>
        <main className="middle ">
          <div className="info border-bottom"></div>
        </main>
        <main className="det ">
          <div className="d-flex justify-content-between align-items-center p-2 border-bottom info">
            <h5>Details</h5>
            <p className="text-dark fs-5  ">
              <AiOutlineClose className="fw-bold" />
            </p>
          </div>
        </main>
      </section>

      <LoginFooter />
    </>
  );
};
export default Messages;
