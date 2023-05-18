import "./SearchDrops.css";
import checkout from "../../../src/assets/checkout.png";

function CheckOutDates({ toggle }) {
  return (
    <main>
      <section className={` ${toggle == 2 ? "mainDiv shadow" : "tabcontent"}`}>
        <div>
          <img
            src={checkout}
            alt=""
            style={{ height: "100%", width: "700px", borderRadius: "20px" }}
          />
        </div>
      </section>
    </main>
  );
}

export default CheckOutDates;
