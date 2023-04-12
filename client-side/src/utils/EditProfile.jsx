import { useContext, useRef, useState } from "react";
import { Context } from "../Provider/Context";
import httpAuth from "../Services/config";
import { handleSaveUser } from "./setlocalstorage";

const EditProfile = ({ seteditprofile }) => {
  const profile = useRef({
    about: "",
    language: [],
    location: "",
    work: "",
  });
  const [loading, setloading] = useState(false);
  const { setUser, User } = useContext(Context);
  const [About, setAbout] = useState(User.About);
  const [Location, setLocation] = useState(User.Location);
  const [Language, setLanguage] = useState([User.Language]);
  const [Work, setWork] = useState(User.Work);

  const about = (e) => {
    setAbout(e.target.value);
    profile.current.about = e.target.value;
  };
  const location = (e) => {
    setLocation(e.target.value);
    profile.current.location = e.target.value;
  };
  const language = (e) => {
    setLanguage(e.target.value);
    profile.current.language = e.target.value;
  };
  const work = (e) => {
    setWork(e.target.value);
    profile.current.work = e.target.value;
  };
  const postUserEmail = async () => {
    try {
      setloading(true);
      const response = await httpAuth.post("/updateProfile", profile.current);
      setUser(response.data.user);
      handleSaveUser(response.data.user);
      seteditprofile(false);
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const updateNames = (e) => {
    e.preventDefault();
    postUserEmail();
  };

  return (
    <div>
      <span style={{ fontSize: "15px", color: "grey" }}>
        This is the name on your travel document, which could be a license or a
        passport.
      </span>
      <form onSubmit={updateNames} className="form-control border-0 p-0">
        <main className="d-flex justify-content-start border-0  ">
          <div className="form-floating">
            <input
              value={About}
              id="about"
              required
              type="text"
              className="form-control border "
              onChange={about}
              placeholder="about"
            />
            <label htmlFor="about">about</label>
          </div>

          <div className="form-floating mx-4  ">
            <input
              value={Location}
              id="location"
              required
              type="text"
              className="form-control border"
              onChange={location}
              placeholder="Location"
            />
            <label htmlFor="location">location</label>
          </div>
          <div className="form-floating mx-4  ">
            <input
              value={Language}
              id="language"
              required
              type="text"
              className="form-control border"
              onChange={language}
              placeholder="Language"
            />
            <label htmlFor="language">language</label>
          </div>
          <div className="form-floating mx-4  ">
            <input
              value={Work}
              id="work"
              required
              type="text"
              className="form-control border"
              onChange={work}
              placeholder="work"
            />
            <label htmlFor="work">work</label>
          </div>
        </main>
        <button
          type="submit"
          className="bg-dark text-white border text-decoration-none p-3 rounded"
        >
          {loading ? (
            <span className="spinner-border text-light"></span>
          ) : (
            "Save"
          )}
        </button>
      </form>
    </div>
  );
};
export default EditProfile;
