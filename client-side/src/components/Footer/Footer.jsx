import "./footer.css";
import { FaRegCopyright } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
const Footer = () => {
  return (
    <main className="footer">
      <footer>
        <div>
          <h6>Support</h6>
          <p>Help Center</p>
          <p>Air cover</p>
          <p>Supporting people with disabilities</p>
          <p>Cancellation options</p>
          <p>Our COVID-19 Response</p>
          <p>Report a neighborhood concern</p>
        </div>{" "}
        <div>
          <h6>Community</h6>
          <p>Airbnb.org: disaster relief housing</p>
          <p>Combating discrimination</p>
        </div>{" "}
        <div>
          <h6>Hosting</h6>
          <p>Airbnb your home</p>
          <p>AirCover for Hosts</p>
          <p>Explore hosting resources</p>
          <p>Visit our community forum</p>
          <p>How to host responsibly</p>
          <p>Airbnb-friendly apartments</p>
        </div>
        <div>
          <h6>Airbnb</h6>
          <p>Learn about new features</p>
          <p>AirCover for Hosts</p>
          <p>Explore hosting resources</p>
          <p>carrers</p>
          <p>investors</p>
          <p>Gift-card</p>
        </div>
      </footer>
      <hr />

      <main className="copyright">
        <div>
          <p>
            {" "}
            <FaRegCopyright />
          </p>
          <p>Airbnb,</p>
          <p>Inc.</p>
          <p> . </p>
          <p>Terms . </p>
          <p> site map . </p>
          <p>Privacy . </p>
          <p>Your Privacy choices</p>
        </div>
        <div className="icon">
          <p>
            <TbWorld />
          </p>
          <p>English (US) </p>
          <p>$</p>
          <p>USD</p>
          <p>
            {" "}
            <AiFillFacebook className="fs-5" />{" "}
          </p>
          <p>
            <AiOutlineInstagram className="text-dark fs-5" />
          </p>
          <p>
            {" "}
            <AiFillTwitterSquare className="fs-5" />
          </p>
        </div>
      </main>
    </main>
  );
};

export default Footer;
