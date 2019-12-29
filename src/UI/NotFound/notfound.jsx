import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactGa from "react-ga";

const NotFound = () => {
  useEffect(() => {
    ReactGa.pageview("/404");
  }, []);

  return (
    <div
      className="not-found"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
      }}
    >
      <img
        src="https://cdn.dribbble.com/users/721524/screenshots/4117132/untitled-1-_1_.png"
        alt=""
        height="300px"
      />
      <div style={{ fontSize: "20px", textAlign: "center" }}>
        404! The Page You requested cannot be found. <br />
        <br />
        Go <Link to="/">Home</Link> Instead
      </div>
    </div>
  );
};

export default NotFound;
