import React from "react";
import ReactGa from "react-ga";
import { useEffect } from "react";

const MobileHome = () => {
  useEffect(() => {
    ReactGa.event({
      category: "mobile",
      action: "opened mobile view"
    });
  }, []);

  return (
    <div
      className="home"
      style={{
        height: "100vh",
        width: "100vw",
        background: "#064356",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        color: "white"
      }}
    >
      <div>
        <span style={{ fontSize: "50px", lineHeight: "50px" }}>
          SIH Overdrive
        </span>
        <br />
        <br />
        <span style={{ fontSize: "20px", lineHeight: "25px" }}>
          Manage your SIH project and collaborate with your team easily and more
          efficiently!
        </span>
        <br />
        <br />
        <br />
      </div>
      <div>
        <a href="https://www.freepik.com/free-photos-vectors/puzzle">
          <img
            src={process.env.PUBLIC_URL + "/hero-pic.png"}
            height="250px"
            title="Puzzle vector created by slidesgo - www.freepik.com"
            alt=""
          />
        </a>
      </div>
      <br />
      <br />
      <br />
      <div>
        <span style={{ fontSize: "17px", lineHeight: "20px" }}>
          SUPER SORRY!
        </span>
        <br />
        <br />
        <span style={{ fontSize: "17px", lineHeight: "20px", padding: "20px" }}>
          We currently don't support Mobile View (Our developers are lazy).
          Please Open the website on a Desktop or Laptop.
        </span>
        <br />
        <br />
        <br />
        <br />
        <p>
          The app may work if you switch to desktop view, but it will look UGLY,
          so please don't do that.{" "}
          <span role="img" aria-label="emoji">
            😅
          </span>
        </p>
      </div>
    </div>
  );
};

export default MobileHome;
