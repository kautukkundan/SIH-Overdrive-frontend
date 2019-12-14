import React from "react";

const NotFound = () => {
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
        Go <a href="/">Home</a> Instead
      </div>
    </div>
  );
};

export default NotFound;
