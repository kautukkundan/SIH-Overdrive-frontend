import React from "react";
import "./details.css";
import { useParams } from "react-router";

import { Label } from "semantic-ui-react";
import File from "./components/file";
import MyFeed from "./components/feed";
import ProblemNavigation from "./components/problem-navigation";

const ProblemStatementDetail = ({ match, location }) => {
  let { id } = useParams();

  return (
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
          <div className="org">
            Department of Empowerment of Persons with Disabilities, Ministry of
            Social Justice and Empowerment
          </div>
          <ProblemNavigation id={id} />
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
          {`In Today’s world with so many cars, models in the market, it is hard
          to find out which car has a high maintenance cost/index that is
          authentic source.\n•\tProblem statement in Description \no\tSystem
          that shows the health and Maintenance Index of various components of
          car models or car parts based on multiple factors\no\tThis will help
          new buyers to understand the maintenance costs of a certain model and
          probability of which car part requires more often servicing /change,
          OEM’s to understand which part is requiring frequent change and needs
          to be recalled and made better in the new models \no\tVehicle
          maintenance patterns across car models by mileage, usage , age of the
          vehicle , regional patterns across dealers, service stations and car
          manufacturer\n•\tPurpose and who will benefit\no\tConsumers so they
          know which car has a higher maintenance and maintenance index.\no\tCar
          Manufacturers , so they know which parts are getting serviced often
          based on the part change\n•\tHow does it help the nation\no\tBetter
          understanding for consumers on which car to purchase with low Vehicle
          Maintenance Index\no\tGovt has better understanding of car maintenance
          index before approving cars on the Road (ARAI Authority)\n•\tPractical
          and reasons why this idea could be a challenge from Implementation
          \no\tData Challenge : Build a dealer/service station network , OEM,
          consumers who can feed data into the system – without data this
          solution will not work\no\tAbility to integrate this solution easily
          with the current systems which can collate the data\no\tMarketing
          challenge : Owner within the Govt to take this ahead and invest this
          product\no\tPolitical : OEM’s might not want such a system to be
          developed.\n•\tDomain Bucket \no\tTransport , Vehicles \n•\tTechnology
          Bucket \no\tIntegration across systems – Integration platform across
          systems with security model for data extraction \no\tAnalytics & Data
          Science (if possible) - Bigdata/Hadoop, AI / ML \no\tData Aggregation
          \no\tVisualization`}
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
