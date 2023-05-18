import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
        <>
          <main className="details">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h3>{details.About}</h3>
              </div>
              <div>
                <Link to={`/property/${details._id}`}>
                  <button className="btn btn-outline-dark">
                    preview lisiting
                  </button>
                </Link>
              </div>
            </div>
            <section className="d-flex justify-content-between mt-3 ">
              <main className="side">
                <button className="border-0 p-2 fw-bold text-start w-100">
                  Listing details
                </button>

                <div className="mt-3">
                  <p>Photos</p>
                  <p>Listing basics</p>
                  <p>Amenities</p>
                  <p>Location</p>
                  <p>Property and rooms</p>
                  <p>Accessibility</p>
                </div>

                <div className="mt-3">
                  <h6>pricing and availability</h6>
                  <h6 className="my-4">policies and rules</h6>
                  <h6> Info for guests</h6>
                  <h6 className="my-4"> Co-Host</h6>
                </div>
              </main>

              <main className="content">
                Explicabo, in vel architecto quas distinctio dolorem! Assumenda
                veritatis amet sed sit maxime perspiciatis officia distinctio
                non! Repellat, nemo aut saepe illum facilis deserunt odio, eos
                animi obcaecati repellendus pariatur sunt et dolore? Nemo facere
                quo temporibus possimus cupiditate iusto dolorum accusantium
                eligendi cum inventore minus numquam necessitatibus similique,
                officia voluptates atque qui in animi ullam quos itaque omnis!
                Aspernatur eveniet veniam vitae! Numquam corrupti id omnis illum
                modi error minus officia dignissimos voluptates minima. Corporis
                accusantium totam ipsa id minus tempore voluptatum debitis
                laudantium autem? Molestiae accusantium est soluta quae
                necessitatibus! Est? Hic praesentium reprehenderit cupiditate?
                Quia nulla doloremque recusandae atque, dolor iusto iure beatae
                quod eos sapiente voluptatem ullam aspernatur, tenetur ipsum
                laboriosam similique voluptates ex. Autem voluptatibus odio
                praesentium mollitia! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quod cum ipsam nemo culpa, omnis odit
                inventore beatae illum nihil dolores excepturi, impedit vero
                amet voluptatum laudantium accusamus iste. Aperiam, nihil.
                Explicabo nobis eligendi id rerum, ab quidem itaque neque
                commodi vel quaerat, laborum dolores minima quasi,
                exercitationem eveniet! Eveniet, error voluptatum praesentium
                delectus tempora accusamus perferendis cum non? Hic, placeat.
                Praesentium suscipit ex velit numquam quisquam maxime nisi fuga
                quaerat cumque expedita eius veritatis, exercitationem
                voluptatem maiores, a architecto. Illum soluta possimus iusto
                officiis asperiores ab, cum quo illo nam. Ab sequi praesentium
                nihil, eaque tempore nisi maxime vitae excepturi rerum
                provident. Error odio ex quibusdam alias libero dolor! Et
                ducimus dignissimos quaerat explicabo labore cum incidunt
                sapiente nisi sunt? Sapiente, quaerat quas at illo dolorum iure
                ipsum qui, soluta aperiam autem est provident, adipisci
                cupiditate obcaecati rerum rem ab deleniti ducimus magnam?
                Veniam incidunt aut itaque magnam aperiam consequatur.
                voluptatem ullam aspernatur, tenetur ipsum laboriosam similique
                voluptates ex. Autem voluptatibus odio praesentium mollitia!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                cum ipsam nemo culpa, omnis odit inventore beatae illum nihil
                dolores excepturi, impedit vero amet voluptatum laudantium
                accusamus iste. Aperiam, nihil. Explicabo nobis eligendi id
                rerum, ab quidem itaque neque commodi vel quaerat, laborum
                dolores minima quasi, exercitationem eveniet! Eveniet, error
                voluptatum praesentium delectus tempora accusamus perferendis
                cum non? Hic, placeat. Praesentium suscipit ex velit numquam
                quisquam maxime nisi fuga quaerat cumque expedita eius
                veritatis, exercitationem voluptatem maiores, a architecto.
                Illum soluta possimus iusto officiis asperiores ab, cum quo illo
                nam. Ab sequi praesentium nihil, eaque tempore nisi maxime vitae
                excepturi rerum provident. Error odio ex quibusdam alias libero
                dolor! Et ducimus dignissimos quaerat explicabo labore cum
                incidunt sapiente nisi sunt? Sapiente, quaerat quas at illo
                dolorum iure ipsum qui, soluta aperiam autem est provident,
                adipisci cupiditate obcaecati rerum rem ab deleniti ducimus
                magnam? Veniam incidunt aut itaque magnam aperiam consequatur.
                quaerat quas at illo dolorum iure ipsumrat quas at illo dolorum
                iure ipsum qui, soluta aperiam autem est provident, adipisci
                cupiditate obcaecati rerum
              </main>
            </section>
          </main>
          <FooterProp />
        </>
      )}
    </>
  );
};
export default Details;
