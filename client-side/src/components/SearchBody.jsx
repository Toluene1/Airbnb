import flexible from "../../src/assets/flexible.jpg";
import Africa from "../../src/assets/Africa.webp";
import greece from "../../src/assets/greece.webp";
import canada from "../../src/assets/canada.webp";
import unitedkingdom from "../../src/assets/united-kingdom.webp";
import southamerica from "../../src/assets/south-america.webp";

function SearchBody() {
  return (
    <main className="py-3">
      <section>
        <div className="SearchMainDiv px-4 py-3 shadow">
          <h3>Where to?</h3>
          <input
            type="text"
            className="input-Search py-3 px-3"
            placeholder="search destinations"
          />
          <div className="flexBoxes gap-4 mt-3">
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
            <div>
              <div className="regionDivs">
                <img
                  src={Africa}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <p className="mt-1" style={{ fontSize: "13px" }}>
                Middle-East
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
                South-east Asia
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="date-guests px-3 py-3 shadow">
          <div>when</div>
          <div>Add dates</div>
        </div>
        <div className="date-guests px-3 py-3 shadow">
          <div>who</div>
          <div>Add guests</div>
        </div>
      </section>
    </main>
  );
}
export default SearchBody;
