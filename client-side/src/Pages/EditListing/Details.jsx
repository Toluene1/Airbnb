import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListingsNav from "../../components/ListingsNav/ListingsNav";
import httpAuth from "../../Services/config";
import FooterProp from "../../components/FooterProp.jsx/FooterProp";

import "./Details.css";
const Details = () => {
  const { id } = useParams();
  const [details, setdetails] = useState({});
  const [loading, setloading] = useState(true);
  let isMounted = true;
  useEffect(() => {
    const EditListing = async () => {
      try {
        setloading(true);
        const response = await httpAuth.get(`property/edithostproperty${id}`);
        setdetails(response.data.prop);
        setloading(false);
      } catch (error) {
        setdetails({});
        console.log(error.response.data.msg);
      }
    };

    if (isMounted) {
      EditListing();
    }
    return () => {
      isMounted = false;
    };
  }, []);
  console.log(details);
  return (
    <>
      <ListingsNav />

      {loading ? (
        <div className="center-screen">
          <span className="spinner-border text-danger"></span>
        </div>
      ) : (
        <main>
          <section>Details</section>
          <FooterProp />
        </main>
      )}
    </>
  );
};
export default Details;
