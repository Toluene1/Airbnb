import "./SearchDrops.css";

function CheckOutDates({ toggle }) {
  return (
    <main>
      <section
        className={` ${toggle == 2 ? "mainDiv shadow" : "tabcontent"}`}
      ></section>
    </main>
  );
}

export default CheckOutDates;
