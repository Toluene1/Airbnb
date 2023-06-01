import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import FooterProp from "../components/FooterProp.jsx/FooterProp";

const Error404 = () => {
  return (
    <main>
      <Navbar />
      <section className="errorDivMain mx-auto mt-5 px-3">
        <div className="errorDiv1">
          <p className="fs-3 fw-bold">
            We can’t seem to find the page you’re looking for
          </p>
          <p className="mt-4">here are some helpful links instead</p>
          <ul>
            <Link to={"/"}>
              <li className="text-decoration-underline fw-bold fs-5 py-2">
                home
              </li>
            </Link>
            <Link to={"/"}>
              <li className="text-decoration-underline fw-bold fs-5  py-2">
                Travelling on Airbnb
              </li>
            </Link>
            <Link to={"/AirbnbHome"}>
              <li className="text-decoration-underline fw-bold fs-5   py-2">
                Hosting on Airbnb
              </li>
            </Link>
            <Link to={"/"}>
              <li className="text-decoration-underline fw-bold fs-5   py-2">
                Trust and safety
              </li>
            </Link>
            <Link to={"/"}>
              <li className="text-decoration-underline fw-bold fs-5  py-2">
                Sitemap
              </li>
            </Link>
          </ul>
        </div>

        <div className="errorDiv bg-primary">
          <div className="giphyStyle">
            <iframe
              src="https://giphy.com/embed/GCOJUp80i4SiqA2IxJ"
              width="100%"
              height="100%"
              frameBorder="0"
              className="giphy-embed position-absolute"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      <FooterProp />
    </main>
  );
};
export default Error404;
