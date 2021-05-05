import { Component } from "react";

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

        <div>
          <span>
            <button
              style={this.state.likeCount !== likes ? btnStyle1 : btnDefault}
              onClick={this.likeHandler}
            >
              Like
            </button>
            {""}| {this.state.likeCount}
          </span>

          <span>
            <button
              style={
                this.state.dislikeCount !== dislikes ? btnStyle2 : btnDefault
              }
              onClick={this.dislikeHandler}
            >
              Dislike
            </button>
            {""}| {this.state.dislikeCount}
          </span>
        </div>
      </div>
    );
  }

  likeHandler() {
    if (this.state.likeCount === likes) {
      this.setState((state) => ({
        likeCount: state.likeCount + 1,
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
    }
  }
}

/* Like.defaultProps = {
  headerProp: "Header Section",

  contentProp: "Content area",
}; */

export default Like;
