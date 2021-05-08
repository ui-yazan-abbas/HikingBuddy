import { Component } from "react";
import React from "react";
import { Label, Button, Icon } from "semantic-ui-react";

const joins = 0;
const disjoins = 0;
const btnStyle1 = {
  margin: "1px",
  //   border: "5px solid pink",
  background: "#3387FF",
};

const btnStyle2 = {
  margin: "1px",
  //   border: "5px solid pink",
  background: "red",
};

const btnDefault = {};
class join extends Component {
  constructor(props) {
    super(props);

    this.joinHandler = this.joinHandler.bind(this);

    this.disjoinHandler = this.disjoinHandler.bind(this);

    this.state = {
      joinCount: joins,
      disjoinCount: disjoins,
    };
  }

  render() {
    return (
      <div>
        <div>{this.props.headerProp}</div>

        <Button as="div" color="green" labelPosition="right">
          <Button
            color="blue"
            size="small"
            style={this.state.joinCount !== joins ? btnStyle1 : btnDefault}
            onClick={this.joinHandler}
          >
            <Icon name="user" />
            join
          </Button>
          <Label as="a" basic color="green" pointing="left">
            {this.state.joinCount}
          </Label>
        </Button>
      </div>
    );
  }

  joinHandler() {
    if (this.state.joinCount === joins) {
      this.setState((state) => ({
        joinCount: state.joinCount + 1,
        disjoinCount: disjoins,
      }));
    } else {
      this.setState((state) => ({
        joinCount: state.joinCount - 1,
        disjoinCount: disjoins,
      }));
    }
  }

  disjoinHandler() {
    if (this.state.disjoinCount === disjoins) {
      this.setState((state) => ({
        disjoinCount: state.disjoinCount + 1,
        joinCount: joins,
      }));
    } else {
      this.setState((state) => ({
        disjoinCount: state.disjoinCount - 1,
        joinCount: joins,
      }));
    }
  }
}

export default join;
