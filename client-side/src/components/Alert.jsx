import React, { useEffect } from "react";

const Alert = ({ closeAlert, alertMessage }) => {
  useEffect(() => {
    let alert = setTimeout(closeAlert, 3000);

    return () => clearTimeout(alert);
  }, []);

  return (
    <article className="ms-auto w-100 p-0 m-0">
      <p className="text-center fw-bold text-danger p-0 m-0 ">{alertMessage}</p>
    </article>
  );
};

export default Alert;
