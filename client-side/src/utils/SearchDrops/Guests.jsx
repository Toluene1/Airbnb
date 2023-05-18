toggle = { toggle };
import "./SearchDrops.css";

function Guests({ toggle }) {
  return (
    <main>
      <section
        className={` ${toggle == 3 ? "mainDivGuest shadow" : "tabcontent"}`}
      ></section>
    </main>
  );
}

export default Guests;
