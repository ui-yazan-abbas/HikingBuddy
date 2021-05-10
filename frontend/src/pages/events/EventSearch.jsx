import React, { Component } from "react";

class EventSearch extends Component {
  state = {
    searchValue: "",
    eventDestinations: [],
  };

  handleOnChange = (event) => {
    this.setState({ searchValue: event.target.value });
  };

  handleSearch = () => {
    this.makeApiCall(this.state.searchValue);
  };

  makeApiCall = () => {
    var searchUrl = `http://localhost:8080/events`;
    fetch(searchUrl)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        this.setState({ eventDestinations: jsonData.eventDestinations });
      });
  };

  render() {
    return (
      <div id="main">
        <h1>Find existing hiking event or create your own event</h1>
        <input
          name="text"
          type="text"
          placeholder="Search for existing event"
          onChange={(event) => this.handleOnChange(event)}
          value={this.state.searchValue}
        />
        <button onClick={this.handleSearch}>Search</button>
        {this.state.eventDestinations ? (
          <div id="">
            {this.state.eventDestinations.map((trailName, index) => (
              <div class="" key={index}>
                <h2>{trailName}</h2>
              </div>
            ))}
          </div>
        ) : (
          <p>
            Event not found! Yet, you can create your own event and other will
            join you.{" "}
          </p>
        )}
      </div>
    );
  }
}

export default EventSearch;
