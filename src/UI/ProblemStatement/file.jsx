import React from "react";
import { Icon } from "semantic-ui-react";

const File = props => {
  return (
    <div className="file-container">
      <Icon name={props.type} />
    </div>
  );
};

export default File;
