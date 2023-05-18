import "./SearchDrops.css";

function Guests({ toggle }) {
  return (
    <main>
      <section
        className={` ${toggle == 3 ? "divGuest d-block shadow" : "tabcontent"}`}
      >
        <section className="mainDivGuest shadow">
          <div className="justifyDiv">
            <div>
              <div
                style={{ float: "left", fontSize: "13px", fontWeight: "bold" }}
              >
                Adults
              </div>{" "}
              <br />
              <div style={{ float: "left", fontSize: "13px" }}>
                Age 13 or above
              </div>
            </div>
            <div>
              <button className="countButton"> - </button>
              <span className="mx-2"> 0 </span>
              <button className="countButton"> + </button>
            </div>
          </div>
          <hr className="my-3" />
          <div className="justifyDiv">
            <div>
              <div
                style={{ float: "left", fontSize: "13px", fontWeight: "bold" }}
              >
                Children
              </div>{" "}
              <br />
              <div style={{ float: "left", fontSize: "13px" }}>Age 2 -12</div>
            </div>
            <div>
              <button className="countButton"> - </button>
              <span className="mx-2"> 0 </span>
              <button className="countButton"> + </button>
            </div>
          </div>
          <hr className="my-3" />
          <div className="justifyDiv">
            <div>
              <div
                style={{ float: "left", fontSize: "13px", fontWeight: "bold" }}
              >
                infants
              </div>{" "}
              <br />
              <div style={{ float: "left", fontSize: "13px" }}>under 2</div>
            </div>
            <div>
              <button className="countButton"> - </button>
              <span className="mx-2"> 0 </span>
              <button className="countButton"> + </button>
            </div>
          </div>
          <hr className="my-3" />
          <div className="justifyDiv">
            <div>
              <div
                style={{ float: "left", fontSize: "13px", fontWeight: "bold" }}
              >
                Pets
              </div>{" "}
              <br />
              <div style={{ float: "left", fontSize: "13px" }}>
                bringing a service animal?
              </div>
            </div>
            <div>
              <button className="countButton"> - </button>
              <span className="mx-2"> 0 </span>
              <button className="countButton"> + </button>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Guests;
