import "./SearchDrops.css";

function CheckInDates({ toggle }) {
  return (
    <main>
      <section
        className={` ${toggle == 1 ? "mainDiv shadow" : "tabcontent"}`}
      ></section>
    </main>
  );
}

export default CheckInDates;
