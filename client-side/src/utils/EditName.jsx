import { useRef } from "react";

const EditName = () => {
  const edit = useRef({ FirstName: "", LastName: "" });
  return (
    <div>
      <span style={{ fontSize: "15px", color: "grey" }}>
        This is the name on your travel document, which could be a license or a
        passport.
      </span>
      <form action="" className="form-control border-0 p-0">
        <main className="d-flex justify-content-start border-0  ">
          <div className="form-floating">
            <input
              value={edit.current.FirstName}
              id="lastname"
              required
              type="text"
              className="form-control border "
              onChange={(e) => (edit.current.LastName = e.target.value)}
              placeholder="Last Name"
            />
            <label htmlFor="lastname">First Name</label>
          </div>

          <div className="form-floating mx-4  ">
            <input
              id="lastname"
              required
              type="text"
              className="form-control border"
              onChange={(e) => (edit.current.LastName = e.target.value)}
              placeholder="Last Name"
            />
            <label htmlFor="lastname">Last Name</label>
          </div>
        </main>
        <button className="bg-dark text-white border text-decoration-none p-3 rounded">
          Save
        </button>
      </form>
    </div>
  );
};
export default EditName;
