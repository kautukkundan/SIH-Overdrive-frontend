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
      columns={[
        {
          Header: <Icon name="eye" />,
          headerStyle: { fontSize: "120%", padding: "10px" },
          accessor: "read",
          width: 40,
          Cell: props => <Checkbox defaultChecked />
        },
        {
          Header: "Logo",
          headerStyle: { fontSize: "120%", padding: "10px" },
          accessor: "logo",
          width: 100,
          Cell: props => <img src={props.value} alt=""/>
        },
        {
          Header: "Organization",
          headerStyle: { fontSize: "120%", padding: "10px" },
          style: { whiteSpace: "unset" },
          accessor: "organization",
          width: 150
        },
        {
          Header: "Title",
          headerStyle: { fontSize: "120%", padding: "10px" },
          style: { whiteSpace: "unset" },
          accessor: "title"
        },
        {
          Header: "Category",
          headerStyle: { fontSize: "120%", padding: "10px" },
          accessor: "category",
          width: 100
        },
        {
          Header: "Domain",
          headerStyle: { fontSize: "120%", padding: "10px" },
          accessor: "domain",
          style: { whiteSpace: "unset" },
          width: 100
        },
        {
          Header: "Status",
          headerStyle: { fontSize: "120%", padding: "10px" },
          accessor: "status",
          width: 120,
          Cell: props => (
            <div>
              <Form.Field>
                <Radio label="Rejected" name={`radio-${props.original.id}`} value="rejected" />
              </Form.Field>
              <Form.Field>
                <Radio
                  label="In-Progress"
                  name={`radio-${props.original.id}`}
                  value="In-Progress"
                />
              </Form.Field>
              <Form.Field>
                <Radio label="Selected" name={`radio-${props.original.id}`} value="Selected" />
              </Form.Field>
            </div>
          )
        }
      ]}
      className="-striped -highlight"
      resizable={false}
      pageSize={4}
      style={{
        maxHeight: "85vh"
      }}
    />
  );
};

export default ProblemStatementsTable;
