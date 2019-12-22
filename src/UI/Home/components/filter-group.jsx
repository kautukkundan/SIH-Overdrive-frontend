import React from "react";

import { Icon, Button } from "semantic-ui-react";
import { useStoreState } from "easy-peasy";

const FilterGroup = () => {
  const problemStatementsDynamic = useStoreState(
    state => state.problems.dynamic
  );

  const readCount = problemStatementsDynamic.filter(item => item.read).length;
  const unreadCount = problemStatementsDynamic.length - readCount;

  const rejectedCount = problemStatementsDynamic.filter(
    item => item.status === "Rejected"
  ).length;
  const progressCount = problemStatementsDynamic.filter(
    item => item.status === "In-Progress"
  ).length;
  const selectedCount = problemStatementsDynamic.filter(
    item => item.status === "Selected"
  ).length;

  return (
    <div>
      <Button.Group style={{ marginLeft: "10px" }} compact>
        <Button icon labelPosition="left" size="small" color="blue">
          <Icon name="eye slash" />
          Unread
          <span style={{ padding: "0 5px", fontSize: "120%" }}>
            {unreadCount}
          </span>
        </Button>
        <Button icon labelPosition="left" size="small" color="teal">
          <Icon name="eye" />
          Read
          <span style={{ padding: "0 5px", fontSize: "120%" }}>
            {readCount}
          </span>
        </Button>
      </Button.Group>
      <Button.Group style={{ marginLeft: "10px" }} compact>
        <Button icon labelPosition="left" size="small" color="red">
          <Icon name="cancel" />
          Rejected
          <span style={{ padding: "0 5px", fontSize: "120%" }}>
            {rejectedCount}
          </span>
        </Button>
        <Button icon labelPosition="left" size="small" color="yellow">
          <Icon name="pencil" />
          In-Progress
          <span style={{ padding: "0 5px", fontSize: "120%" }}>
            {progressCount}
          </span>
        </Button>
        <Button icon labelPosition="left" size="small" color="green">
          <Icon name="check" />
          Selected
          <span style={{ padding: "0 5px", fontSize: "120%" }}>
            {selectedCount}
          </span>
        </Button>
      </Button.Group>
    </div>
  );
};

export default FilterGroup;
