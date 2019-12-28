import React from "react";

import { Icon } from "semantic-ui-react";

const File = props => {
  return (
    <div
      className="file-container"
      onClick={() => (props.link ? window.open(props.link, "_blank") : null)}
    >
      <Icon name={props.type} />
    </div>
  );
};

export default File;
