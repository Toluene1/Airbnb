import "./SearchDrops.css";
import calendar from "../../../src/assets/calendar.png";

function CheckInDates({ toggle }) {
  return (
    <main>
      <section
        className={` ${
          toggle == 1 ? "mainDiv shadow bg-primary" : "tabcontent"
        }`}
      >
        <div>
          <img
            src={calendar}
            alt=""
            style={{ height: "100%", width: "700px", borderRadius: "20px" }}
          />
        </div>
      </section>
    </main>
  );
}

export default CheckInDates;
