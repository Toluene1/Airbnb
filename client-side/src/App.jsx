import { useContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import LoginFooter from "./components/LoginFooter/LoginFooter";
import httpClient from "./Services/httpclient";
import {
  FaSlidersH,
  FaRegHeart,
  FaHouseUser,
  FaAirbnb,
  FaRenren,
  FaKhanda,
  FaIcons,
  FaHotTub,
  FaIgloo,
  FaKeyboard,
  FaLifeRing,
  FaRainbow,
  FaTicketAlt,
} from "react-icons/fa";
import { Context } from "./Provider/Context";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import httpAuth from "./Services/config";
import Alert from "./components/Alert";
import PopModal from "./components/SignUp";
import FilterWebProperties from "./components/FilterWebProperties";
import Airbnblogo from "../src/assets/airbnb-logo.png";
import HomepageFooter from "./utils/SearchDrops/HomepageFooter";

function App() {
  const [loading, setloading] = useState(true);
  const [loadingCatgory, setloadingCategory] = useState(true);
  const [categories, setcategories] = useState([]);
  const [clickedFilter, setclickedFilter] = useState("All");
  const [query, setquery] = useState("");
  const [alert, setalert] = useState(false);
  const [alertMessage, setalertMessage] = useState("");
  const {
    modalShow,
    setModalShow,
    setActiveButton,
    filterWeb,
    setFilterWeb,
    property,
    setProperty,
    setwishlist,
  } = useContext(Context);
  const [index, setIndex] = useState(0);
  const [_id, setId] = useState("");
  let isMounted = true;
  let isMountedCat = true;

  let icons = [
    FaAirbnb,
    FaHouseUser,
    FaRenren,
    FaKhanda,
    FaIcons,
    FaHotTub,
    FaIgloo,
    FaKeyboard,
    FaLifeRing,
    FaRainbow,
    FaTicketAlt,
  ];

  // select carousel images
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  // show filter Web
  function showFilterWeb() {
    setFilterWeb(true);
  }

  //query db by structure
  const handleClickFilter = (category) => {
    if (category == "All") {
      setclickedFilter(category);
      return setquery("");
    }
    setclickedFilter(category);
    setquery(category);
  };

  const closeAlert = () => {
    setalert(false);
  };

  // fetchCategories
  useEffect(() => {
    const FetchCategories = async () => {
      try {
        setloadingCategory(true);
        const response = await httpClient.get(`/category/getallcategory`);
        setcategories(["All", ...response.data.category]);
        setTimeout(() => {
          setloadingCategory(false);
        }, 1000);
      } catch (error) {
        setcategories([]);
        setloadingCategory(true);
      }
    };

    if (isMountedCat) {
      FetchCategories();
    }
    return () => {
      isMountedCat = false;
    };
  }, []);

  // fetchProperties
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setloading(true);
        const response = await httpClient.get(
          `property/getallproperty/?structure=${query}`,
        );
        setProperty(response.data.prop);
        setTimeout(() => {
          setloading(false);
        }, 1000);
      } catch (error) {
        setProperty([]);
        setloading(true);
      }
    };

    if (isMounted) {
      fetchProperties();
    }
    return () => {
      isMounted = false;
    };
  }, [query]);

  const categorySkeleton = Array.from(
    { length: categories.length },
    (_, index) => <p key={index} className="catload"></p>,
  );

  const skeletonItems = Array.from({ length: property.length }, (_, index) => (
    <div key={index}>
      <div style={{ height: "200px" }} className="loadings animate"></div>
      <div>
        <div className="foot my-3">
          <p className="loadings animate" style={{ height: "20px" }}></p>
          <p className="loadings animate my-3" style={{ height: "20px" }}></p>
          <p className="loadings animate" style={{ height: "20px" }}></p>
        </div>
      </div>
    </div>
  ));
  const addToWishlist = async (e, _id) => {
    e.preventDefault();
    e.stopPropagation();
    setId(_id);

    try {
      const response = await httpAuth.post("/wishlist/create", { _id });
      setalert(true);
      setwishlist(response.data.wish);
      setalertMessage(response.data.msg);
    } catch (error) {
      if (error.response.data.msg == "unauthorised") {
        return setModalShow(true);
      }
      setalert(true);
      setalertMessage(error.response.data.msg);
    }
  };

  useEffect(() => {
    setActiveButton("first");
  });
  return (
    <>
      <div>
        <main className="main_nav">
          <Navbar />
          {/* categories  */}
          <nav className="navFilter">
            {loadingCatgory ? (
              <>
                <main>{categorySkeleton}</main>
                <button onClick={showFilterWeb} className="mx-5">
                  <FaSlidersH className="searchIcon2" /> filters
                </button>
              </>
            ) : (
              <>
                <main>
                  {categories.map((category, index) => {
                    const Icon = icons[index];

                    return (
                      <div
                        key={index}
                        onClick={() => handleClickFilter(category)}
                        className={` ${
                          category == clickedFilter ? "clickeddiv" : ""
                        }`}
                      >
                        <p className=" text-center fs-5 m-0">
                          <Icon />
                        </p>
                        <p className="text-center mb-2">{category}</p>
                      </div>
                    );
                  })}
                </main>
                <button onClick={showFilterWeb} className="mx-5">
                  <FaSlidersH className="searchIcon2" /> filters
                </button>
              </>
            )}
          </nav>
        </main>

        {/* display properties  */}

        {loading ? (
          <div className="property" style={{ margin: "120px auto" }}>
            {skeletonItems}
          </div>
        ) : (
          <section
            style={{
              marginTop: "150px",
              padding: "0px 10px",
              marginBottom: "30px",
            }}
          >
            {alert && (
              <Alert closeAlert={closeAlert} alertMessage={alertMessage} />
            )}

            <section className="property">
              {property.length > 0 ? (
                <>
                  {property.map((property) => (
                    <Link
                      to={`/property/${property._id}`}
                      className="prop"
                      key={property._id}
                    >
                      {/* carousel  */}
                      <div
                        className="  position-relative"
                        style={{ maxWidth: "300px" }}
                      >
                        {property.images.length > 0 ? (
                          <Carousel onSelect={handleSelect}>
                            {property.images.map((images) => (
                              <Carousel.Item
                                activeindex={index}
                                style={{ width: "300px", height: "200px" }}
                                key={images}
                              >
                                <img src={images} alt="" />
                              </Carousel.Item>
                            ))}
                          </Carousel>
                        ) : (
                          <div className="repimages shadow">
                            <img
                              src={Airbnblogo}
                              alt=""
                              style={{ width: "50px", height: "50px" }}
                            />
                          </div>
                        )}
                        <button
                          className="love"
                          onClick={(e) => addToWishlist(e, property._id)}
                        >
                          <FaRegHeart className="fs-5 " />
                        </button>
                        <div className="foot my-3 ">
                          <h3>
                            {property?.Location?.city +
                              "," +
                              " " +
                              property?.Location?.country}{" "}
                          </h3>
                          <p>
                            stay with {property?.host?.FirstName} . Works as a{" "}
                            {property?.host?.Work || "***"}{" "}
                          </p>
                          <h5>${property?.price || "***"} night</h5>
                        </div>
                      </div>
                    </Link>
                  ))}
                </>
              ) : (
                <div className="">
                  {" "}
                  <h6 className="text-danger">
                    properties of the selected category cant be found
                  </h6>
                </div>
              )}
            </section>
          </section>
        )}
        <HomepageFooter />
        <FilterWebProperties
          show={filterWeb}
          onHide={() => setFilterWeb(false)}
        />
      </div>
      <PopModal show={modalShow} onHide={() => setModalShow(false)} />

      <LoginFooter />
    </>
  );
}

export default App;
