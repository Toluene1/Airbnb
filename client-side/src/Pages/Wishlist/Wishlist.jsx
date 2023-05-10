import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavbarAuth from "../../components/Navbar/NavbarAuth";
import PopModal from "../../components/SignUp";
import { Context } from "../../Provider/Context";
import httpAuth from "../../Services/config";
import { AiOutlineDelete } from "react-icons/ai";
import "./Wishlist.css";
const Wishlist = () => {
  const { wishlist, setwishlist, modalShow, setModalShow } =
    useContext(Context);
  const [loading, setloading] = useState(true);
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

          {wishlist.length > 0 ? (
            <article>
              {wishlist.map((wish, index) => (
                <Link to={`/property/${wish?.property?._id}`}>
                  <main key={index} className="shadow">
                    <div>
                      <img src={wish?.property.images[0]} alt="" />
                    </div>
                    <button>
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
