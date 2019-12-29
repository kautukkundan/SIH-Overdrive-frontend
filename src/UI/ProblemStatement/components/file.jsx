import React from "react";

import { Icon } from "semantic-ui-react";

import ReactGa from "react-ga";

const File = props => {
  return (
    <div
      className="file-container"
      onClick={() => {
        ReactGa.event({
          category: "button",
          action: "file icon"
        });
        return props.link ? window.open(props.link, "_blank") : null;
      }}
    >
      <Icon name={props.type} />
    </div>
  );
};

export default File;
