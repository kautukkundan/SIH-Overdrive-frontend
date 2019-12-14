import React from "react";
import "./details.css";
import { useParams, useHistory } from "react-router";

import { Label, Icon, Popup } from "semantic-ui-react";
import File from "./file";
import MyFeed from "./feed";

const ProblemStatementDetail = ({ match, location }) => {
  let { id } = useParams();
  const history = useHistory();

  const changeProblem = to => {
    if (to === "next") {
      history.push(`/problem/${parseInt(id) + 1}`);
    } else if (to === "prev" && id > 1) {
      history.push(`/problem/${parseInt(id) - 1}`);
    } else {
      return;
    }
  };

  return (
    <div className="problem-statement-details-body">
      <div className="meta">
        <div className="image">
          <img
            src="https://www.sih.gov.in/uploads/logo/no_image.png"
            height="50px"
          />
        </div>
        <div className="text">
          <div className="org">
            Department of Empowerment of Persons with Disabilities, Ministry of
            Social Justice and Empowerment
          </div>
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
        </div>
      </div>
      <br />
      <Label color="green" size="large">
        Software
      </Label>
      <Label size="large">Smart Communication</Label>
      <br />
      <br />
      <div className="title">
        <strong>Title:</strong>
        <p>
          Better and faster emergency care during accidents and vehicle impact.
        </p>
      </div>
      <br />
      <br />
      <div className="description">
        <strong>Description:</strong>
        <p>
          Better and faster emergency care during accidents and vehicle impact •
          Problem statement in Description o During accidents while we have
          sophisticated technology that opens airbags , add functionality that
          can start recording and inform the closest emergency service care of
          the incident o Share Location, situation within the accident spot ,
          broadcast images, videos o Audio Video Signal Transmitter/ Store
          during any impact in the vehicle and calling out for emergency care o
          Ability to inform the closest police station, hospital, fire
          brigade—GPS location closest proximity guard or govt office to rush
          emergency care o In current situation it requires someone to call the
          emergency service and delays in calling for care , results in loss of
          life . with this device and service the call is automatically made and
          emergency care can be provided promptly o Evaluate the ease of
          connecting the device with the car easily externally, requires OEM
          support to develop such compatible cars • Purpose of this analysis and
          who will benefit o Person who meets with the accident and facility for
          the nearest emergency care to respond to the situation in a timely
          fashion o Govt can benefit by providing the device on rent in certain
          specific areas that are accident prone – and earn additional income o
          Govt agencies can start building net income by dealing in such devices
          and auxiliary services o OEMS – additional charge for service •
          Lateral Solutions where similar solution can be extrapolated o Car
          Theft or Window Windshield breaking o Car break down o Home Safety –
          breaking • How does it help the nation o Better and faster emergency
          care • Practical and reasons why this idea could be a challenge o
          Device manufacturing that works across regions , network connectivity
          o Economically viable in managing the security of such devices o Law
          Suit if the device did not work in an accident o OEM’s to modify car
          design to easily integrate with such devices , externally and easily
          plugin the device • Domain Bucket o Vehicles o Emergency care •
          Technology Bucket o Integration across systems – Integration platform
          across systems with security model for data extraction o IOT o
          Analytics & Data Science (if possible) - Bigdata/Hadoop, AI / ML o
          Data Aggregation o Visualization
        </p>
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
  );
};

export default ProblemStatementDetail;
