import React from "react";

import { Icon, Button } from "semantic-ui-react";
import { useStoreState, useStoreActions } from "easy-peasy";

const FilterGroup = () => {
  const problemStatementsDynamic = useStoreState(
    state => state.problems.dynamic
  );
  const setShowing = useStoreActions(action => action.problems.setShowing);

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
      <Button.Group style={{ marginRight: "10px" }} compact>
        <Button
          icon
          labelPosition="left"
          size="small"
          color="blue"
          onClick={() => setShowing("Unread")}
        >
          <Icon name="eye slash" />
          Unread
          <span style={{ padding: "0 5px", fontSize: "120%" }}>
            {unreadCount}
          </span>
        </Button>
        <Button
          icon
          labelPosition="left"
          size="small"
          color="teal"
          onClick={() => setShowing("Read")}
        >
          <Icon name="eye" />
          Read
          <span style={{ padding: "0 5px", fontSize: "120%" }}>
            {readCount}
          </span>
        </Button>
      </Button.Group>
      <Button.Group style={{ marginRight: "10px" }} compact>
        <Button
          icon
          labelPosition="left"
          size="small"
          color="red"
          onClick={() => setShowing("Rejected")}
        >
          <Icon name="cancel" />
          Rejected
          <span style={{ padding: "0 5px", fontSize: "120%" }}>
            {rejectedCount}
          </span>
        </Button>
        <Button
          icon
          labelPosition="left"
          size="small"
          color="yellow"
          onClick={() => setShowing("In-Progress")}
        >
          <Icon name="pencil" />
          In-Progress
          <span style={{ padding: "0 5px", fontSize: "120%" }}>
            {progressCount}
          </span>
        </Button>
        <Button
          icon
          labelPosition="left"
          size="small"
          color="green"
          onClick={() => setShowing("Selected")}
        >
          <Icon name="check" />
          Selected
          <span style={{ padding: "0 5px", fontSize: "120%" }}>
            {selectedCount}
          </span>
        </Button>
      </Button.Group>
      <Button.Group compact>
        <Button size="small" onClick={() => setShowing("All")}>
          Remove Filters
        </Button>
      </Button.Group>
      <Button.Group compact>Showing All</Button.Group>
    </div>
  );
};

export default FilterGroup;
