import "./Searchdrops/SearchDrops.css";
import { TbWorld } from "react-icons/tb";
import { BiCopyright } from "react-icons/bi";

function HomepageFooter() {
  return (
    <main className=" footerDiv bg-light px-5 py-2 shadow fixed-bottom">
      <div className="d-flex gap-3">
        <div>
          {" "}
          <BiCopyright className="me-1 adjustMargin" /> 2023 Airbnb, Inc{" "}
        </div>
        <div>Terms</div>
        <div>Sitemap</div>
        <div>Privacy</div>
        <div>your privacy choices</div>
      </div>
      <div className="d-flex gap-3">
        <div>
          {" "}
          <TbWorld className="me-1 adjustMargin" /> English (Us)
        </div>
        <div>$ USD</div>
        <div>support & resources</div>
      </div>
    </main>
  );
}

export default HomepageFooter;
