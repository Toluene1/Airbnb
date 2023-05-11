import { useContext, useRef, useState } from "react";
import { Context } from "../Provider/Context";
import httpAuth from "../Services/config";
import { handleSaveUser } from "./setlocalstorage";

const EditProfile = ({ seteditprofile }) => {
  const { setUser, User } = useContext(Context);

  const [profile, setprofile] = useState({
    about: User.about,
    language: [],
    location: User.location,
    work: User.work,
  });
  const [loading, setloading] = useState(false);

  const about = (e) => {
    setprofile({
      ...profile,
      about: e.target.value,
    });
  };

  const location = (e) => {
    setprofile({
      ...profile,
      location: e.target.value,
    });
  };
  const languages = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setprofile({
        ...profile,
        language: [...profile.language, value],
      });
    } else {
      setprofile({
        language: [...profile.language.filter((e) => e !== value)],
      });
    }
  };
  const work = (e) => {
    setprofile({
      ...profile,
      work: e.target.value,
    });
  };

  const postUserInfo = async () => {
    try {
      setloading(true);
      const response = await httpAuth.post("/user/updateProfile", profile);
      setUser(response.data.user);
      handleSaveUser(response.data.user);
      setloading(false);
      seteditprofile(false);
    } catch (error) {
      console.log(error);
    }
  };
  const updateInfo = (e) => {
    e.preventDefault();
    postUserInfo();
  };

  return (
    <div>
      <form onSubmit={updateInfo} className="form-control border-0 p-0">
        <main className="justify-content-start border-0  ">
          <div className=" mx-4 mt-4">
            <label htmlFor="About" className="label">
              About
            </label>
            <textarea
              id="about"
              required
              type="text"
              className="form-control aboutInput"
              onChange={about}
              placeholder="about"
              cols="30"
              rows="10"
            ></textarea>
          </div>

          <div className=" mx-4  ">
            <label htmlFor="location" className="label mt-4">
              location
            </label>
            <input
              id="location"
              required
              type="text"
              className="form-control p-2"
              onChange={location}
              placeholder="Location"
            />
          </div>
          <label htmlFor="location" className="label mt-5 mx-4">
            Language ! speak
          </label>
          <div className="mt-3 pb-2 mx-4">
            <ul className="list-group mt-2 ul">
              <li>
                <label htmlFor="Checkbox1" className="form-check-label">
                  English
                </label>
                <span>
                  <input
                    className=" me-1 float-end accent addStyle"
                    type="checkbox"
                    value="English"
                    id="Checkbox1"
                    onChange={languages}
                  />
                </span>
              </li>
              <li className="mt-3">
                <label className=" accent" htmlFor="Checkbox2">
                  Spanish
                </label>
                <span>
                  <input
                    className=" me-1 float-end mt-2 addStyle accent"
                    type="checkbox"
                    value="spanish"
                    id="Checkbox2"
                    onChange={languages}
                  />
                </span>
              </li>
              <li className="mt-3">
                <label htmlFor="Checkbox3" className=" accent">
                  German
                </label>
                <span>
                  <input
                    className=" me-1 float-end mt-2 addStyle accent"
                    type="checkbox"
                    value="German"
                    id="Checkbox3"
                    onChange={languages}
                  />
                </span>
              </li>
              <li className="mt-3">
                <label htmlFor="Checkbox4" className=" accent">
                  Latin
                </label>
                <span>
                  <input
                    className=" me-1 float-end mt-2 addStyle accent"
                    type="checkbox"
                    value="Latin"
                    id="Checkbox4"
                    onChange={languages}
                  />
                </span>
              </li>
              <li className="mt-3">
                <label className=" accent" htmlFor="Checkbox5">
                  French
                </label>
                <span>
                  <input
                    className=" me-1 float-end mt-2 addStyle accent"
                    type="checkbox"
                    value="French"
                    id="Checkbox5"
                    onChange={languages}
                  />
                </span>
              </li>
              <li className="mt-3">
                <label className=" accent" htmlFor="Checkbox6">
                  Portugese
                </label>
                <span>
                  <input
                    className=" me-1 float-end mt-2 addStyle accent"
                    type="checkbox"
                    value="Portuguese"
                    id="Checkbox6"
                    onChange={languages}
                  />
                </span>
              </li>
            </ul>
            <hr />
          </div>
          <div className="mx-4  ">
            <label htmlFor="work" className="label mt-4">
              work
            </label>
            <input
              id="work"
              required
              type="text"
              className="form-control"
              onChange={work}
              placeholder="work"
            />
          </div>
        </main>
        <div className="text-end mt-4 me-4">
          <button type="submit" className="saveProfileButton px-3">
            {loading ? (
              <span className="spinner-border text-light"></span>
            ) : (
              "Save"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
export default EditProfile;
