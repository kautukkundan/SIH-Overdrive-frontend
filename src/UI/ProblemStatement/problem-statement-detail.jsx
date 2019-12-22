import React from "react";
import "./details.css";
import { useParams } from "react-router";

import { Label, Loader } from "semantic-ui-react";
import File from "./components/file";
import MyFeed from "./components/feed";
import ProblemNavigation from "./components/problem-navigation";
import { useStoreState } from "easy-peasy";
import NotFound from "../NotFound/notfound";

const ProblemStatementDetail = ({ match, location }) => {
  let { id } = useParams();

  const problemStatementsStatic = useStoreState(state => state.problems.static);
  const thisProblem = problemStatementsStatic.filter(item => {
    return item.id === parseInt(id);
  });

  if (id > problemStatementsStatic.length) {
    return <NotFound />;
  }

  return thisProblem.length ? (
    <div className="problem-statement-details-body">
      <div className="meta">
        <div className="image">
          <img
            src="https://www.sih.gov.in/uploads/logo/no_image.png"
            height="50px"
            alt=""
          />
        </div>
        <div className="text">
          <div className="org">{thisProblem[0].organization}</div>
          <ProblemNavigation id={id} max={problemStatementsStatic.length} />
        </div>
      </div>
      <br />
      <Label color="green" size="large">
        {thisProblem[0].category}
      </Label>
      <Label size="large">{thisProblem[0].domain_bucket}</Label>
      <br />
      <br />
      <div className="title">
        <strong>Title:</strong>
        <p>{thisProblem[0].title}</p>
      </div>
      <br />
      <br />
      <div className="description">
        <strong>Description:</strong>
        <p>{thisProblem[0].description}</p>
      </div>
      <br />
      <br />
      <div className="files">
        <strong>Your Files:</strong>
        <br />
        <br />
        <div className="flex" style={{ display: "flex" }}>
          <File type={"file word"} />
          <File type={"file powerpoint"} />
        </div>
      </div>
      <br />
      <br />
      <div className="comments">
        <strong>Comments:</strong>
        <MyFeed />
      </div>
    </div>
  ) : (
    <Loader active />
  );
};

export default ProblemStatementDetail;
