import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavbarAuth from "../../components/Navbar/NavbarAuth";
import PopModal from "../../components/SignUp";
import { Context } from "../../Provider/Context";
import httpAuth from "../../Services/config";
import { AiOutlineDelete } from "react-icons/ai";
import "./Wishlist.css";
import Alert from "../../components/Alert";
import LoginFooter from "../../components/LoginFooter/LoginFooter";
const Wishlist = () => {
  const { wishlist, setwishlist, modalShow, setModalShow } =
    useContext(Context);
  const [loading, setloading] = useState(true);
  const [alert, setalert] = useState(false);
  const [alertMessage, setalertMessage] = useState("");
  const [id, setid] = useState(null);

  let isMounted = true;

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        setloading(true);
        const response = await httpAuth.get("/wishlist");
        setwishlist(response.data.wish);
        setloading(false);
      } catch (error) {
        if (error.response.data.msg == "unauthorised") {
          setwishlist([]);
          setModalShow(true);
        }
      }
    };

    if (isMounted) {
      fetchWishlist();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  const closeAlert = () => {
    setalert(false);
  };

  const handleShowDel = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    setid(id);
  };

  const deleteWishlist = async (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      setloading(true);
      const response = await httpAuth.delete(`/wishlist/${id}`);
      setwishlist(response.data.wish);
      setid(null);
      setalert(true);
      setloading(false);
      setalertMessage("property removed from wishlist");
    } catch (error) {
      setalert(true);
      setalertMessage(error.response.data.msg);
    }
  };

  return (
    <>
      <NavbarAuth />
      {loading ? (
        <div className="center-screen">
          <span className="spinner-border text-danger"></span>
        </div>
      ) : (
        <section className="wishlist mb-3">
          <h2>Wishlist</h2>
          <Link to={"/"}>
            {" "}
            <p className="btn btn-secondary p-3 ">Explore Properties </p>
          </Link>
          {alert && (
            <Alert closeAlert={closeAlert} alertMessage={alertMessage} />
          )}
          {wishlist.length > 0 ? (
            <article>
              {wishlist.map((wish, index) => (
                <section key={index}>
                  <Link to={`/property/${wish?.property?._id}`}>
                    <main className="shadow">
                      <div>
                        <img src={wish?.property.images[0]} alt="" />
                      </div>

                      <span onClick={(e) => handleShowDel(e, index)}>
                        {" "}
                        <AiOutlineDelete />
                      </span>
                    </main>
                  </Link>
                  <aside className={id == index ? "d-block" : "d-none"}>
                    <h6 className="text-danger">
                      Are you sure you want to remove from wishlist?
                    </h6>
                    <p>
                      <button
                        className="btn btn-danger "
                        onClick={(e) => deleteWishlist(e, wish._id)}
                      >
                        {" "}
                        Yes
                      </button>
                      <button
                        className="btn btn-dark mx-3"
                        onClick={() => setid(null)}
                      >
                        No
                      </button>
                    </p>
                  </aside>
                </section>
              ))}
            </article>
          ) : (
            <h5 className=" text-secondary">
              No property has been added to wish list
            </h5>
          )}
        </section>
      )}
      <PopModal show={modalShow} onHide={() => setModalShow(false)} />
      <LoginFooter />
    </>
  );
};
export default Wishlist;
