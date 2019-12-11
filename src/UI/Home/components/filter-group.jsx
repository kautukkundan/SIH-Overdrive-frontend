import React from "react";
import { Icon, Button } from "semantic-ui-react";

const FilterGroup = () => {
  return (
    <div>
      <Button.Group style={{marginLeft: "10px"}} compact>
        <Button icon labelPosition="left" size="small" color="blue">
          <Icon name="eye slash" />
          Unread
          <span style={{padding: "0 5px", fontSize: "120%"}}>10</span>
        </Button>
        <Button icon labelPosition="left" size="small" color="teal">
          <Icon name="eye" />
          Read
          <span style={{padding: "0 5px", fontSize: "120%"}}>10</span>
        </Button>
      </Button.Group>
      <Button.Group style={{marginLeft: "10px"}} compact>
        <Button icon labelPosition="left" size="small" color="red">
          <Icon name="cancel" />
          Rejected
          <span style={{padding: "0 5px", fontSize: "120%"}}>10</span>
        </Button>
        <Button icon labelPosition="left" size="small" color="yellow">
          <Icon name="pencil" />
          In-Progress
          <span style={{padding: "0 5px", fontSize: "120%"}}>10</span>
        </Button>
        <Button icon labelPosition="left" size="small" color="green">
          <Icon name="check" />
          Selected
          <span style={{padding: "0 5px", fontSize: "120%"}}>10</span>
        </Button>
      </Button.Group>
    </div>
  );
};

export default FilterGroup;
