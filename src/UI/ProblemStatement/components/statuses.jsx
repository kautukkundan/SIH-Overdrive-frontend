import React from "react";
import { Dropdown } from "semantic-ui-react";
import { useStoreState, useStoreActions, action } from "easy-peasy";
import { useEffect } from "react";
import { useState } from "react";

const progressOptions = [
  {
    key: "Neutral",
    text: "Neutral",
    value: "Neutral"
  },
  {
    key: "Selected",
    text: "Selected",
    value: "Selected"
  },
  {
    key: "In-Progress",
    text: "In-Progress",
    value: "In-Progress"
  },
  {
    key: "Rejected",
    text: "Rejected",
    value: "Rejected"
  }
];

const StatusElement = props => {
  const problemStatementsDynamic = useStoreState(
    state => state.problems.dynamic
  );
  const updateStatus = useStoreActions(action => action.problems.updateStatus);
  const updateRead = useStoreActions(action => action.problems.updateRead);

  const [status, setStatus] = useState("");
  const [viewed, setViewed] = useState("");

  const handleStatusChange = new_status => {
    const payload = {
      problem_id: props.problem_id,
      status: new_status
    };
    updateStatus(payload);
  };

  const handleReadChange = new_read => {
    const payload = {
      problem_id: props.problem_id,
      read: new_read
    };
    updateRead(payload);
  };

  useEffect(() => {
    const thisProblem = problemStatementsDynamic.filter(
      item => item.problem_statement === props.problem_id
    )[0];
    setStatus(thisProblem.status);
    setViewed(thisProblem.read);
  }, [props, problemStatementsDynamic]);

  const getBackground = status => {
    if (status === "Neutral") {
      return "";
    }
    if (status === "Rejected") {
      return "#ed553b";
    }
    if (status === "In-Progress") {
      return "#ed961b";
    }
    if (status === "Selected") {
      return "#22BA46";
    }
  };

  return (
    <div className="status-element">
      <div className="top">
        <strong>Status</strong>
        <div className="read-unread">
          <input
            type="checkbox"
            checked={viewed}
            onChange={e => {
              handleReadChange(e.target.checked);
            }}
          />
          <label> Read</label>
        </div>
      </div>
      <br />
      <div className="progress">
        <Dropdown
          placeholder="Mark Progress"
          fluid
          selection
          options={progressOptions}
          value={status}
          style={{ background: getBackground(status) }}
          onChange={(event, data) => {
            handleStatusChange(data.value);
          }}
        />
      </div>
    </div>
  );
};

export default StatusElement;
