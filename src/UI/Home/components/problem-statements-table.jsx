import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Icon, Checkbox, Form, Radio } from "semantic-ui-react";

const data = [
  {
    id: 1,
    logo: "https://www.sih.gov.in/uploads/logo/20191014173647.png",
    organization: "CDK Global",
    title:
      "Better and faster emergency care during accidents and vehicle impact.",
    category: "Software",
    domain: "Smart Communication"
  },
  {
    id: 2,
    logo: "https://www.sih.gov.in/uploads/logo/20191014173647.png",
    organization: "CDK Global",
    title:
      "Vehicle Maintenance Index- In Today’s world with so many cars, models in the market, it is hard to find out which car has a high maintenance cost/index that is authentic source.",
    category: "Software",
    domain: "Smart Vehicles"
  },
  {
    id: 3,
    logo: "https://www.sih.gov.in/uploads/logo/20191014173647.png",
    organization: "CDK Global",
    title:
      "Geo Tracking of Waste and Triggering Alerts and Mapping Areas with High Waste Index",
    category: "Software",
    domain: "Waste Management"
  },
  {
    id: 4,
    logo: "https://www.sih.gov.in/uploads/logo/20191014173647.png",
    organization: "CDK Global",
    title: "Portal for Farmers to sell the produce at a better rate",
    category: "Software",
    domain: "Agriculture and Rural Development"
  }
];

const ProblemStatementsTable = () => {
  return (
    <ReactTable
      data={data}
      filterable
      columns={[
        {
          Header: <Icon name="eye" />,
          accessor: "read",
          width: 40,
          Cell: props => <Checkbox defaultChecked />,
          filterable: false
        },
        {
          Header: "Logo",
          accessor: "logo",
          width: 100,
          Cell: props => <img src={props.value} alt="" />,
          filterable: false
        },
        {
          Header: "Organization",
          style: { whiteSpace: "unset" },
          accessor: "organization",
          width: 150,
          filterMethod: (filter, row) => row[filter.id].includes(filter.value)
        },
        {
          Header: "Title",
          style: { whiteSpace: "unset" },
          accessor: "title"
        },
        {
          Header: "Category",
          accessor: "category",
          width: 100,
          filterMethod: (filter, row) => {
            if (filter.value === "all") {
              return true;
            } else {
              return row[filter.id].toLowerCase() === filter.value.toLowerCase();
            }
          },
          Filter: ({ filter, onChange }) => (
            <select
              onChange={event => onChange(event.target.value)}
              style={{ width: "100%" }}
              value={filter ? filter.value : "all"}
            >
              <option value="all">all</option>
              <option value="software">software</option>
              <option value="hardware">hardware</option>
            </select>
          )
        },
        {
          Header: "Domain",
          accessor: "domain",
          style: { whiteSpace: "unset" },
          width: 100,
          filterMethod: (filter, row) => {
            if (filter.value === "all") {
              return true;
            } else {
              return row[filter.id].toLowerCase() === filter.value.toLowerCase();
            }
          },
          Filter: ({ filter, onChange }) => (
            <select
              onChange={event => onChange(event.target.value)}
              style={{ width: "100%" }}
              value={filter ? filter.value : "all"}
            >
              <option value="all" selected>
                All
              </option>
              <option value="Agriculture and Rural Development">
                Agriculture and Rural Development
              </option>
              <option value="Clean Water">Clean Water</option>
              <option value="Robotics & Drones">Robotics & Drones</option>
              <option value="Healthcare & Biomedical Devices">
                Healthcare & Biomedical Devices
              </option>
              <option value="Energy / Renewable Energy">
                Energy / Renewable Energy
              </option>
              <option value="Security & Surveillance">
                Security & Surveillance
              </option>
              <option value="Smart Communication">Smart Communication</option>
              <option value="Smart Vehicles">Smart Vehicles</option>
              <option value="Software - Mobile App development">
                Software - Mobile App development
              </option>
              <option value="Miscellaneous">Miscellaneous</option>
              <option value="Software - Web App development">
                Software - Web App development
              </option>
              <option value="Travel and Tourism">Travel and Tourism</option>
              <option value="Finance">Finance</option>
              <option value="Life Sciences">Life Sciences</option>
              <option value="Waste Management">Waste Management</option>
              <option value="Food Technology">Food Technology</option>
              <option value="Smart Education">Smart Education</option>
              <option value="Smart Cities">Smart Cities</option>
              <option value="Sports and Fitness">Sports and Fitness</option>
              <option value="Smart Textiles">Smart Textiles</option>
              <option value="Sustainable Environment">
                Sustainable Environment
              </option>
            </select>
          )
        },
        {
          Header: "Status",
          accessor: "status",
          width: 120,
          filterable: false,
          Cell: props => (
            <div>
              <Form.Field>
                <Radio
                  label="Rejected"
                  name={`radio-${props.original.id}`}
                  value="rejected"
                />
              </Form.Field>
              <Form.Field>
                <Radio
                  label="In-Progress"
                  name={`radio-${props.original.id}`}
                  value="In-Progress"
                />
              </Form.Field>
              <Form.Field>
                <Radio
                  label="Selected"
                  name={`radio-${props.original.id}`}
                  value="Selected"
                />
              </Form.Field>
            </div>
          )
        }
      ]}
      className="-striped -highlight"
      resizable={false}
      pageSize={50}
      style={{
        maxHeight: "85vh"
      }}
    />
  );
};

export default ProblemStatementsTable;
