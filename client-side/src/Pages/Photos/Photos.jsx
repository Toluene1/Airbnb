import { useEffect, useState } from "react";
import PropertyNav from "../../components/PropertyNav/PropertyNav";
import "./Photos.css";
import photoDemo from "../../../src/assets/photoDemo.jpg";
import { BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import httpAuth from "../../Services/config";

function Photos() {
  const [photos, setPhotos] = useState(false);
  const [details, setDetails] = useState([]);

  const handleUploadImage = async (e) => {
    const data = new FormData();
    const file = e.target.files[0];
    data.append(e.target.id, file);
    setPhotos(true);
    setDetails([...details, { file_id: e.target.id, uploaded_file: file }]);
    const creatImgSrc = await URL.createObjectURL(file);
    e.target.closest("div").nextElementSibling.src = creatImgSrc;
  };

  function handleSubmit(e) {
    // e.preventDefault();
    console.log(details);
  }

  return (
    <main>
      <PropertyNav />
      <section className="px-3 sectionDiv">
        <section className=" mt-5 animate__animated animate__fadeInRight">
          <div className="texts">
            <h3>Add some photos of your castle</h3>
            <p className="fw-light" style={{ fontSize: "18px" }}>
              You'll need 5 photos to get started. You can add more or make
              changes later.
            </p>
          </div>
          <div className="texts2">
            <div>
              <span className=" reduceText">Choose at least 5 photos</span>
            </div>
            <div>
              <div className="image-input text-center">
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
          {/* cover photo */}
          <div className="photoBoxdiv mt-3">
            <div className="singleDivsCover  position-relative ">
              <div className="image-input text-center my-3 bg-danger position-absolute">
                <label htmlFor="coverPhoto">
                  <img
                    src={photoDemo}
                    style={{ width: "60px", height: "60px" }}
                    alt=""
                  />
                </label>
                <input
                  type="file"
                  id="coverPhoto"
                  onChange={handleUploadImage}
                />
              </div>
              <img src="" alt="" style={{ width: "100%" }} />
            </div>
          </div>
        </section>
        {photos && (
          <section className="">
            <div className="photoBoxDivs gap-3">
              {/* second  */}
              <div className="singleDivs  position-relative ">
                <div className="image-input text-center my-3 bg-danger position-absolute">
                  <label htmlFor="file">
                    <img
                      src={photoDemo}
                      style={{ width: "60px", height: "60px" }}
                      alt=""
                    />
                  </label>
                  <input type="file" id="file" onChange={handleUploadImage} />
                </div>
                <img src="" alt="" style={{ width: "100%" }} />
              </div>
              {/* third */}
              <div className="singleDivs position-relative ">
                <div className="image-input text-center my-3 bg-danger position-absolute">
                  <label htmlFor="file1">
                    <img
                      src={photoDemo}
                      style={{ width: "60px", height: "60px" }}
                      alt=""
                    />
                  </label>
                  <input type="file" id="file1" onChange={handleUploadImage} />
                </div>
                <img src="" alt="" style={{ width: "100%" }} />
              </div>

              {/* fourth  */}

              <div className="singleDivs position-relative ">
                <div className="image-input text-center my-3 bg-danger position-absolute">
                  <label htmlFor="file2">
                    <img
                      src={photoDemo}
                      style={{ width: "60px", height: "60px" }}
                      alt=""
                    />
                  </label>
                  <input type="file" id="file2" onChange={handleUploadImage} />
                </div>
                <img src="" alt="" style={{ width: "100%" }} />
              </div>
              {/* fifth */}

              <div className="singleDivs position-relative ">
                <div className="image-input text-center my-3 bg-danger position-absolute">
                  <label htmlFor="file3">
                    <img
                      src={photoDemo}
                      style={{ width: "60px", height: "60px" }}
                      alt=""
                    />
                  </label>
                  <input type="file" id="file3" onChange={handleUploadImage} />
                </div>
                <img src="" alt="" style={{ width: "100%" }} />
              </div>
              {/* sixth */}
              <div className="singleDivs position-relative ">
                <div className="image-input text-center my-3 bg-danger position-absolute">
                  <label htmlFor="file4">
                    <img
                      src={photoDemo}
                      style={{ width: "60px", height: "60px" }}
                      alt=""
                    />
                  </label>
                  <input type="file" id="file4" onChange={handleUploadImage} />
                </div>
                <img src="" alt="" style={{ width: "100%" }} />
              </div>
              {/* seventh */}
              <div className="singleDivs position-relative ">
                <div className="image-input text-center my-3 bg-danger position-absolute">
                  <label htmlFor="file5">
                    <img
                      src={photoDemo}
                      style={{ width: "60px", height: "60px" }}
                      alt=""
                    />
                  </label>
                  <input type="file" id="file5" onChange={handleUploadImage} />
                </div>
                <img src="" alt="" style={{ width: "100%" }} />
              </div>
              {/* eight */}
              <div className="singleDivs position-relative ">
                <div className="image-input text-center my-3 bg-danger position-absolute">
                  <label htmlFor="file6">
                    <img
                      src={photoDemo}
                      style={{ width: "60px", height: "60px" }}
                      alt=""
                    />
                  </label>
                  <input type="file" id="file6" onChange={handleUploadImage} />
                </div>
                <img src="" alt="" style={{ width: "100%" }} />
              </div>
              {/* ninth */}
              <div className="singleDivs position-relative ">
                <div className="image-input text-center my-3 bg-danger position-absolute">
                  <label htmlFor="file7">
                    <img
                      src={photoDemo}
                      style={{ width: "60px", height: "60px" }}
                      alt=""
                    />
                  </label>
                  <input type="file" id="file7" onChange={handleUploadImage} />
                </div>
                <img src="" alt="" style={{ width: "100%" }} />
              </div>
            </div>
          </section>
        )}
      </section>
      <footer className="Navfooter">
        <p className="text-decoration-underline fw-bold">
          <Link to={"/become-a-host/amenities"}>Back</Link>
        </p>
        <button
          onClick={handleSubmit}
          className={`${details.length >= 5 ? "Navfooterbtn" : "disabledbtn"}`}
          disabled={details.length >= 5 ? false : true}
        >
          Next
        </button>
      </footer>
    </main>
  );
}

export default Photos;
