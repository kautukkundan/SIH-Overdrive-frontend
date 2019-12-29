import React, { useEffect } from "react";
import "./details.css";
import { useParams } from "react-router";

import { Label, Loader } from "semantic-ui-react";
import File from "./components/file";
import MyFeed from "./components/feed";
import ProblemNavigation from "./components/problem-navigation";
import { useStoreState } from "easy-peasy";
import NotFound from "../NotFound/notfound";
import StatusElement from "./components/statuses";
import FileLinksModal from "./components/files-links-modal";
import ReactGa from "react-ga";

const ProblemStatementDetail = ({ match, location }) => {
  let { id } = useParams();

  const problemStatementsStatic = useStoreState(state => state.problems.static);
  const problemStatementsDynamic = useStoreState(
    state => state.problems.dynamic
  );

  const thisProblem = problemStatementsStatic.filter(item => {
    return item.id === parseInt(id);
  });

  const thisProblemDynamic = problemStatementsDynamic.filter(item => {
    return item.problem_statement === parseInt(id);
  });

  useEffect(() => {
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  if (id > problemStatementsStatic.length) {
    return <NotFound />;
  }

  return thisProblem.length ? (
    <div className="problem-statement-details-body">
      <div className="meta">
        <div className="image">
          <img src={thisProblem[0].img} height="50px" alt="" />
        </div>
        <div className="text">
          <div className="org">{thisProblem[0].organization}</div>
          <ProblemNavigation id={id} max={problemStatementsStatic.length} />
        </div>
      </div>
      <br />
      <Label
        color={thisProblem[0].category === "Software" ? "green" : "orange"}
        size="large"
      >
        {thisProblem[0].category}
      </Label>
      <Label size="large">{thisProblem[0].domain_bucket}</Label>
      <br />
      <br />
      <div className="two-column">
        <div className="column-1">
          <div className="title">
            <strong>Title:</strong>
            <p>{thisProblem[0].title}</p>
          </div>
          <br />
          <br />
          {thisProblem[0].youtube !== "" && (
            <div className="description">
              <strong>Youtube Video:</strong>
              <br />
              <a
                href={thisProblem[0].youtube}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  ReactGa.event({
                    category: "button",
                    action: "youtube link"
                  });
                }}
              >
                {thisProblem[0].youtube}
              </a>
              <br />
              <br />
              <br />
            </div>
          )}
          {thisProblem[0].dataset_link !== "" && (
            <div className="description">
              <strong>Dataset Link:</strong>
              <br />
              <a
                href={thisProblem[0].dataset_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {thisProblem[0].dataset_link}
              </a>
              <br />
              <br />
              <br />
            </div>
          )}
          <div className="description">
            <strong>Description:</strong>
            <pre className="unformatted">{thisProblem[0].description}</pre>
          </div>
        </div>

        <div className="column-2">
          <StatusElement problem_id={parseInt(id)} />
          <br />
          <br />
          <div className="files">
            <strong>
              Your Files:{" "}
              <FileLinksModal
                presentation={thisProblemDynamic[0].presentation}
                document={thisProblemDynamic[0].document}
                problem_id={parseInt(id)}
              />
            </strong>
            <br />
            <br />
            <div className="flex" style={{ display: "flex" }}>
              {thisProblemDynamic[0].document === "" ||
              thisProblemDynamic[0].document === null ? null : (
                <File
                  type={"file word"}
                  link={thisProblemDynamic[0].document}
                />
              )}
              {thisProblemDynamic[0].presentation === "" ||
              thisProblemDynamic[0].presentation === null ? null : (
                <File
                  type={"file powerpoint"}
                  link={thisProblemDynamic[0].presentation}
                />
              )}
            </div>
          </div>
          <br />
          <br />
          <div className="comments">
            <strong>Comments:</strong>
            <MyFeed problem_id={parseInt(id)} />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loader active />
  );
};

export default ProblemStatementDetail;
