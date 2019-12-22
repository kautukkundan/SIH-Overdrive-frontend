import React from "react";
import { useHistory } from "react-router-dom";

import ReactTable from "react-table";
import "react-table/react-table.css";

import { Form, Radio } from "semantic-ui-react";
import { useStoreState } from "easy-peasy";

const ProblemStatementsTable = () => {
  let history = useHistory();
  const problemStatementsStatic = useStoreState(state => state.problems.static);
  const problemStatementsDynamic = useStoreState(
    state => state.problems.dynamic
  );
  const showing = useStoreState(state => state.problems.showing);

  const filteredProblems = filter => {
    let filteredProblemsId = [];
    if (filter === "All") {
      filteredProblemsId = problemStatementsDynamic.map(
        item => item.problem_statement
      );
    } else if (filter === "Read") {
      filteredProblemsId = problemStatementsDynamic
        .filter(item => item.read === true)
        .map(item => item.problem_statement);
    } else if (filter === "Unread") {
      filteredProblemsId = problemStatementsDynamic
        .filter(item => item.read === false)
        .map(item => item.problem_statement);
    } else if (filter === "In-Progress") {
      filteredProblemsId = problemStatementsDynamic
        .filter(item => item.status === "In-Progress")
        .map(item => item.problem_statement);
    } else if (filter === "Rejected") {
      filteredProblemsId = problemStatementsDynamic
        .filter(item => item.status === "Rejected")
        .map(item => item.problem_statement);
    } else if (filter === "Selected") {
      filteredProblemsId = problemStatementsDynamic
        .filter(item => item.status === "Selected")
        .map(item => item.problem_statement);
    }

    const filtered_set = problemStatementsStatic.filter(item =>
      filteredProblemsId.includes(item.id)
    );

    return filtered_set;
  };

  const domainOptions = [
    ...new Set(filteredProblems(showing).map(item => item.domain_bucket))
  ];

  const categoryOptions = [
    ...new Set(filteredProblems(showing).map(item => item.category))
  ];

  return (
    <ReactTable
      data={filteredProblems(showing).sort((a, b) => a.id - b.id)}
      filterable
      columns={[
        {
          Header: "ID",
          accessor: "id",
          width: 40,
          filterable: false
        },
        {
          Header: "Read",
          accessor: "read",
          style: { textAlign: "center" },
          width: 43,
          Cell: props => (
            <input
              type="checkbox"
              name="read"
              value="checked"
              checked={props.value}
              onChange={e => {
                console.log(props.original.id);
                console.log(e.target.checked);
              }}
            />
          ),
          filterable: false
        },
        {
          Header: "Logo",
          accessor: "logo",
          width: 100,
          Cell: props => <img src={props.value} height="50px" alt="" />,
          filterable: false
        },
        {
          Header: "Organization",
          style: { whiteSpace: "unset" },
          accessor: "organization",
          width: 150,
          filterMethod: (filter, row) =>
            row[filter.id].toLowerCase().includes(filter.value.toLowerCase())
        },
        {
          Header: "Title",
          style: { whiteSpace: "unset", cursor: "pointer" },
          accessor: "title",
          filterMethod: (filter, row) =>
            row[filter.id].toLowerCase().includes(filter.value.toLowerCase()),
          Cell: props => (
            <span
              className="title-hover"
              onClick={() => history.push(`problem/${props.original.id}`)}
            >
              {props.value}
            </span>
          )
        },
        {
          Header: "Category",
          accessor: "category",
          width: 100,
          filterMethod: (filter, row) => {
            if (filter.value === "all") {
              return true;
            } else {
              return (
                row[filter.id].toLowerCase() === filter.value.toLowerCase()
              );
            }
          },
          Filter: ({ filter, onChange }) => (
            <select
              onChange={event => onChange(event.target.value)}
              style={{ width: "100%" }}
              value={filter ? filter.value : "all"}
            >
              <option value="all" defaultValue>
                all
              </option>
              {categoryOptions.sort().map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          )
        },
        {
          Header: "Domain",
          accessor: "domain_bucket",
          style: { whiteSpace: "unset" },
          width: 100,
          filterMethod: (filter, row) => {
            if (filter.value === "all") {
              return true;
            } else {
              return (
                row[filter.id].toLowerCase() === filter.value.toLowerCase()
              );
            }
          },
          Filter: ({ filter, onChange }) => (
            <select
              onChange={event => onChange(event.target.value)}
              style={{ width: "100%" }}
              value={filter ? filter.value : "all"}
            >
              <option value="all" defaultValue>
                all
              </option>
              {domainOptions.sort().map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
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
      // pageSize={50}
      style={{
        maxHeight: "85vh"
      }}
      getTrProps={(state, rowInfo, column) => {
        const status =
          rowInfo &&
          problemStatementsDynamic.filter(
            item => item.problem_statement === rowInfo.original.id
          )[0].status;

        let style = {};
        if (status === "In-Progress") {
          style["borderLeft"] = `15px solid #ED961B`;
        } else if (status === "Rejected") {
          style["borderLeft"] = `15px solid #ED553B`;
        } else if (status === "Selected") {
          style["borderLeft"] = `15px solid #028154`;
        } else if (status === "Neutral") {
          style["paddingLeft"] = `15px`;
        }
        return { style };
      }}
      getTheadTrProps={(state, rowInfo, column) => {
        return { style: { marginLeft: "15px" } };
      }}
      getTheadFilterTrProps={(state, rowInfo, column) => {
        return { style: { marginLeft: "15px" } };
      }}
    />
  );
};

export default ProblemStatementsTable;
