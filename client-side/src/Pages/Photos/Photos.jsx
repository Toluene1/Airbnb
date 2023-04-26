import { useState } from "react";
import PropertyNav from "../../components/PropertyNav/PropertyNav";
import "./Photos.css";
import photoDemo from "../../../src/assets/photoDemo.jpg";
import { BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

function Photos() {
  const [photos, setPhotos] = useState(true);
  //   const [photoDemo, setPhotoDemo] = useState(true);
  const showImages = () => {
    setPhotos(false);
  };
  return (
    <main>
      <PropertyNav />
      <section className="px-3">
        {photos ? (
          <section className="sectionDiv animate__animated animate__fadeInRight">
            <div className="texts">
              <h3>Add some photos of your castle</h3>
              <p className="fw-light" style={{ fontSize: "18px" }}>
                You'll need 5 photos to get started. You can add more or make
                changes later.
              </p>
            </div>
            <div className="photoBox">
              <div>
                <img
                  src={photoDemo}
                  style={{ width: "100px", height: "100px" }}
                  alt=""
                />
                <h5>Choose at least 5 photos</h5>
                <div className="file-input text-center my-3">
                  <label htmlFor="my-file">Upload Photo</label>
                  <input
                    type="file"
                    id="my-file"
                    name="image"
                    onChange={showImages}
                  />
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section>
            <div className="texts2 mt-5">
              <div className="mt-3">
                <span className=" reduceText">Choose at least 5 photos</span>
              </div>
              <div>
                <div className="image-input text-center my-3">
                  <label htmlFor="my-file">
                    <div className="button-addMore">
                      <BsPlus className="fs-3" />
                      <span className="mt-5">Add more</span>
                    </div>
                  </label>
                  <input type="file" id="my-file" name="image" />
                </div>
              </div>
            </div>
            <div className="photoBoxdiv mt-3">
              <div className="image-input text-center my-3">
                <label htmlFor="my-file">
                  <img
                    src={photoDemo}
                    style={{ width: "100px", height: "100px" }}
                    alt=""
                  />
                </label>
                <input type="file" id="my-file" name="image" />
              </div>
            </div>
            <div className="photoBoxDivs gap-3">
              <div className="singleDivs">
                <div className="image-input text-center my-3">
                  <label htmlFor="my-file">
                    <img
                      src={photoDemo}
                      style={{ width: "60px", height: "60px" }}
                      alt=""
                    />
                  </label>
                  <input type="file" id="my-file" name="image" />
                </div>
              </div>
              <div className="singleDivs">
                <div className="image-input text-center my-3">
                  <label htmlFor="my-file">
                    <img
                      src={photoDemo}
                      style={{ width: "60px", height: "60px" }}
                      alt=""
                    />
                  </label>
                  <input type="file" id="my-file" name="image" />
                </div>
              </div>
              <div className="singleDivs">
                <div className="image-input text-center my-3">
                  <label htmlFor="my-file">
                    <img
                      src={photoDemo}
                      style={{ width: "60px", height: "60px" }}
                      alt=""
                    />
                  </label>
                  <input type="file" id="my-file" name="image" />
                </div>
              </div>
              <div className="singleDivs">
                <div className="image-input text-center my-3">
                  <label htmlFor="my-file">
                    <BsPlus className="fs-1" />
                    <p className="">Add more</p>
                  </label>
                  <input type="file" id="my-file" name="image" />
                </div>
              </div>
            </div>
          </section>
        )}
      </section>
      <footer className="Navfooters">
        <p className="text-decoration-underline fw-bold">
          <Link to={"/become-a-host/amenities"}>Back</Link>
        </p>
        <Link to={"/become-a-host/title"} className="text-white">
          <button className="Navfooterbtns">Next</button>
        </Link>
      </footer>
    </main>
  );
}

export default Photos;
