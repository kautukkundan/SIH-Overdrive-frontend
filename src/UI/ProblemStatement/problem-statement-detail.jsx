import React from "react";

const ProblemStatementDetail = ({ match, location }) => {
  return (
    <div>
      <p>
        <strong>Match Props: </strong>
        <code>{JSON.stringify(match.params.id, null, 2)}</code>
      </p>
      <p>
        <strong>Location Props: </strong>
        <code>{JSON.stringify(location, null, 2)}</code>
      </p>
    </div>
  );
};

export default ProblemStatementDetail;
