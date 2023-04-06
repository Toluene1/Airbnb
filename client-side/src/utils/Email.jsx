import { useRef } from "react";

const Email = () => {
  const edit = useRef({ Email: "" });
  return (
    <div>
      <span style={{ fontSize: "15px", color: "grey" }}>
        Use an address you’ll always have access to
      </span>
      <form action="" className="form-control border-0 p-0 ">
        <div className="form-floating my-2">
          <input
            value={edit.current.FirstName}
            id="lastname"
            required
            type="text"
            className="form-control w-100 border "
            onChange={(e) => (edit.current.Email = e.target.value)}
            placeholder="Last Name"
          />
          <label htmlFor="lastname">Email address</label>
        </div>

        <button className="bg-dark text-white border text-decoration-none p-3 rounded my-2">
          Save
        </button>
      </form>
    </div>
  );
};
export default Email;
