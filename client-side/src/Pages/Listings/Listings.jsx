import { useContext, useEffect, useState } from "react";
import { Context } from "../../Provider/Context";
import httpAuth from "../../Services/config";

function Listings() {
  const [property, setProperty] = useState({});
  const { propertyId } = useContext(Context);
  let isMounted = true;
  useEffect(() => {
    const fetchUser = async () => {
      try {
        //    setloading(true);
        const response = await httpAuth.get(`property/findhostproperty`);
        setProperty(response.data.prop);
        //    setloading(false);
      } catch (error) {
        setProperty({});
        console.log(error.response.data.msg);
      }
    };

    if (isMounted) {
      fetchUser();
    }
    return () => {
      isMounted = false;
    };
  }, []);
  console.log(property);
  return (
    <main>
      <section className="property">
        {property.length > 0 ? (
          <>
            <ul>
              {property.map((property) => (
                <li>
                  {" "}
                  <h3>{property?.structure} </h3>
                </li>
              ))}
            </ul>
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
    </main>
  );
}

export default Listings;
