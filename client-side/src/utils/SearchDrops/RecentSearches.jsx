import "./SearchDrops.css";

function RecentSearches({ toggle }) {
  return (
    <main>
      <section
        className={` ${toggle == 0 ? "mainDiv shadow" : "tabcontent"}`}
      ></section>
    </main>
  );
}

export default RecentSearches;
