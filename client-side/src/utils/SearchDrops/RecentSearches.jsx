import "./SearchDrops.css";
import flexible from "../../../src/assets/flexible.jpg";
import Africa from "../../../src/assets/Africa.webp";
import greece from "../../../src/assets/greece.webp";
import canada from "../../../src/assets/canada.webp";
import unitedkingdom from "../../../src/assets/united-kingdom.webp";
import southamerica from "../../../src/assets/south-america.webp";

function RecentSearches({ toggle }) {
  return (
    <main>
      <section className={` ${toggle == 0 ? "mainDiv shadow" : "tabcontent"}`}>
        <div className="divContain">
          <div className="sideDiv1">
            <p style={{ fontSize: "10px", fontWeight: "bold" }}>
              Recent searches
            </p>
          </div>
          <div className="sideDiv2">
            <p style={{ fontSize: "10px", fontWeight: "bold" }}>
              search by region
            </p>
            <div className="flexDiv gap-3">
              <div>
                <div className="regionDivs">
                  <img
                    src={flexible}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <p className="mt-1" style={{ fontSize: "13px" }}>
                  i'm flexible
                </p>
              </div>
              <div>
                <div className="regionDivs">
                  <img
                    src={greece}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <p className="mt-1" style={{ fontSize: "13px" }}>
                  Greece
                </p>
              </div>
              <div>
                <div className="regionDivs">
                  <img
                    src={Africa}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <p className="mt-1" style={{ fontSize: "13px" }}>
                  Africa
                </p>
              </div>
              <div>
                <div className="regionDivs">
                  <img
                    src={unitedkingdom}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <p className="mt-1" style={{ fontSize: "13px" }}>
                  United kingdom
                </p>
              </div>
              <div>
                <div className="regionDivs">
                  <img
                    src={southamerica}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <p className="mt-1" style={{ fontSize: "13px" }}>
                  South America
                </p>
              </div>
              <div>
                <div className="regionDivs">
                  <img
                    src={canada}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <p className="mt-1" style={{ fontSize: "13px" }}>
                  Canada
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default RecentSearches;
