import { Component } from "react";
import React from "react";
import {
Label,
    Button,
    Icon
  } from "semantic-ui-react";

const likes = 0;
const dislikes = 0;
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
class Like extends Component {
  constructor(props) {
    super(props);

    this.likeHandler = this.likeHandler.bind(this);

    this.dislikeHandler = this.dislikeHandler.bind(this);

    this.state = {
      likeCount: likes,
      dislikeCount: dislikes,
    };
  }

  render() {
    return (
      <div>
        <div>{this.props.headerProp}</div>

        <Button as='div' labelPosition='right'>
      <Button color='red'
         color="red"
         size="small"
        style={this.state.likeCount !== likes ? btnStyle1 : btnDefault}
        onClick={this.likeHandler}
      >
        <Icon name='heart' />
        Like
      </Button>
      <Label as='a' basic color='red' pointing='left'>
      {this.state.likeCount}
      </Label>
    </Button>

          {/* <span>
            <button
              style={
                this.state.dislikeCount !== dislikes ? btnStyle2 : btnDefault
              }
              onClick={this.dislikeHandler}
            >
              Dislike
            </button>
            {""}| {this.state.dislikeCount}
          </span> */}
     
      </div>
    );
  }

  likeHandler() {
    if (this.state.likeCount === likes) {
      this.setState((state) => ({
        likeCount: state.likeCount + 1,
        dislikeCount: dislikes,
      }));
    } else {
      this.setState((state) => ({
        likeCount: state.likeCount - 1,
        dislikeCount: dislikes,
      }));
    }
  }

  dislikeHandler() {
    if (this.state.dislikeCount === dislikes) {
      this.setState((state) => ({
        dislikeCount: state.dislikeCount + 1,
        likeCount: likes,
      }));
    } else {
      this.setState((state) => ({
        dislikeCount: state.dislikeCount - 1,
        likeCount: likes,
      }));
    }
  }
}

/* Like.defaultProps = {
  headerProp: "Header Section",
  contentProp: "Content area",
}; */

export default Like;