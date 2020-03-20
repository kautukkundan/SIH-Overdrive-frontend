import React from "react";

const Maintenance = () => {
  return (
    <div
      className="page"
      style={{
        padding: "50px",
        height: "100vh",
        width: "100vw",
        background: "#064356",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "150%"
      }}
    >
      <article
        style={{
          display: "block",
          textAlign: "left",
          width: "650px",
          margin: "0 auto"
        }}
      >
        <h1>Under Maintenance</h1>
        <div>
          <p>
            Sorry for the inconvenience but we&rsquo;re performing some
            maintenance at the moment. If you need to you can always{" "}
            <a href="mailto:sihoverdrive@gmail.com">contact us</a>, All the best
            for your SIH 2020 Hackathon
          </p>
          <p>&mdash; The Team</p>
        </div>
      </article>
    </div>
  );
};

export default Maintenance;
