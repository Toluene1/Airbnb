import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavbarAuth from "../../components/Navbar/NavbarAuth";
import PopModal from "../../components/SignUp";
import { Context } from "../../Provider/Context";
import httpAuth from "../../Services/config";
import { AiOutlineDelete } from "react-icons/ai";
import "./Wishlist.css";
import Alert from "../../components/Alert";
const Wishlist = () => {
  const { wishlist, setwishlist, modalShow, setModalShow } =
    useContext(Context);
  const [loading, setloading] = useState(true);
  const [alert, setalert] = useState(false);
  const [alertMessage, setalertMessage] = useState("");

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
          return setModalShow(true);
        }
        setwishlist([]);
        setloading(true);
        console.log(error.response.data.msg);
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

  const deleteWishlist = async (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const response = await httpAuth.delete(`/wishlist/${id}`);
      setwishlist(response.data.wish);
      setalert(true);
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
        <section className="wishlist">
          <h2>Wishlist</h2>
          {alert && (
            <Alert closeAlert={closeAlert} alertMessage={alertMessage} />
          )}
          {wishlist.length > 0 ? (
            <article>
              {wishlist.map((wish, index) => (
                <Link to={`/property/${wish?.property?._id}`}>
                  <main key={index} className="shadow">
                    <div>
                      <img src={wish?.property.images[0]} alt="" />
                    </div>
                    <button onClick={(e) => deleteWishlist(e, wish._id)}>
                      {" "}
                      <AiOutlineDelete />
                    </button>
                  </main>
                </Link>
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
    </>
  );
};
export default Wishlist;
