import { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import RecentSearches from "../../utils/SearchDrops/RecentSearches";
import CheckInDates from "../../utils/SearchDrops/CheckInDates";
import CheckOutDates from "../../utils/SearchDrops/CheckOutDate";
import Guests from "../../utils/SearchDrops/Guests";

const SearchDropdown = () => {
  const [toggle, settoggle] = useState(0);
  const [searchDropdown, setSearchDropdown] = useState(false);
  const [SearchBar, setSearchBar] = useState(true);
  const SearchDropdownRef = useRef(null);

  const handleTab = (id) => {
    settoggle(id);
  };
  //showSearchDropdown
  function showSearchDropdown() {
    setSearchBar(false);
    setSearchDropdown(true);
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        SearchDropdownRef.current &&
        !SearchDropdownRef.current.contains(e.target)
      ) {
        setSearchDropdown(false);
        setSearchBar(true);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [SearchDropdownRef]);
  return (
    <main>
      <div className="navDiv2" onClick={showSearchDropdown}>
        {SearchBar ? (
          <div>
            <button className="div2Button1">Anywhere</button>
            <button className="div2Button2">Any Week</button>
            <button className="div2Button3">
              <span className="anyGuest">Any guest</span>
              <AiOutlineSearch className="iconButton" />
            </button>
          </div>
        ) : (
          <section>
            <div>
              <button className="divSearch">Stays</button>
              <button className="divSearch">Experiences</button>
              <button className="divSearch">Online experiences</button>
            </div>
            {searchDropdown && (
              <main className="searchDropdown">
                <div ref={SearchDropdownRef} className=" bg-light py-2 shadow">
                  <div className="searchDropdown-div">
                    <button
                      className={` ${
                        toggle == 0 ? "activeTab1 shadow" : "searchButton1"
                      } alignTexts`}
                      onClick={() => handleTab(0)}
                    >
                      <span style={{ float: "left", fontWeight: "bold" }}>
                        where
                      </span>{" "}
                      <br />
                      <span style={{ float: "left", fontWeight: "lighter" }}>
                        search destinations
                      </span>
                    </button>
                    <button
                      className={` ${
                        toggle == 1 ? "activeTab2 shadow" : "searchButton2"
                      } alignTexts`}
                      onClick={() => handleTab(1)}
                    >
                      <span style={{ float: "left", fontWeight: "bold" }}>
                        Check-in
                      </span>{" "}
                      <br />
                      <span style={{ float: "left", fontWeight: "lighter" }}>
                        Add dates
                      </span>
                    </button>
                    <button
                      className={` ${
                        toggle == 2 ? "activeTab2 shadow" : "searchButton2"
                      } alignTexts`}
                      onClick={() => handleTab(2)}
                    >
                      <span style={{ float: "left", fontWeight: "bold" }}>
                        Check-out
                      </span>{" "}
                      <br />
                      <span style={{ float: "left", fontWeight: "lighter" }}>
                        Add dates
                      </span>
                    </button>
                    <button
                      className={` ${
                        toggle == 3 ? "activeTab4 shadow" : "searchButton4"
                      } alignTexts`}
                      onClick={() => handleTab(3)}
                    >
                      <div className="d-block">
                        <span style={{ float: "left", fontWeight: "bold" }}>
                          where
                        </span>{" "}
                        <br />
                        <span style={{ float: "left", fontWeight: "lighter" }}>
                          search destinations
                        </span>
                      </div>
                      <div>
                        <button className="SearchButtonDrop">
                          <AiOutlineSearch />
                          <span className="ms-2">Search</span>
                        </button>
                      </div>
                    </button>
                  </div>
                </div>
                <RecentSearches toggle={toggle} />
                <CheckInDates toggle={toggle} />
                <CheckOutDates toggle={toggle} />
                <Guests toggle={toggle} />
                <div className="opacity-div"></div>
              </main>
            )}
          </section>
        )}
      </div>
    </main>
  );
};
export default SearchDropdown;
