import React from "react";
import { useHistory } from "react-router-dom";
import { Popup, Icon } from "semantic-ui-react";

const ProblemNavigation = props => {
  const history = useHistory();

  const changeProblem = to => {
    if (to === "next" && parseInt(props.id) < parseInt(props.max)) {
      history.push(`/problem/${parseInt(props.id) + 1}`);
    } else if (to === "prev" && parseInt(props.id) > 1) {
      history.push(`/problem/${parseInt(props.id) - 1}`);
    } else if (to === "prev" && parseInt(props.id) <= 1) {
      history.push(`/problem/${parseInt(props.max)}`);
    } else {
      history.push(`/problem/1`);
    }
  };

  return (
    <div className="nav">
      <Popup
        position="bottom center"
        popperModifiers={{
          preventOverflow: { boundariesElement: "window" }
        }}
        content="Previous"
        trigger={
          <Icon
            name="caret left"
            size="big"
            onClick={() => changeProblem("prev")}
          />
        }
      />
      <Popup
        position="bottom center"
        popperModifiers={{
          preventOverflow: { boundariesElement: "window" }
        }}
        content="All"
        trigger={
          <Icon name="home" size="big" onClick={() => history.push("/")} />
        }
      />

      <Popup
        position="bottom center"
        popperModifiers={{
          preventOverflow: { boundariesElement: "window" }
        }}
        content="Next"
        trigger={
          <Icon
            name="caret right"
            size="big"
            onClick={() => changeProblem("next")}
          />
        }
      />
    </div>
  );
};

export default ProblemNavigation;
