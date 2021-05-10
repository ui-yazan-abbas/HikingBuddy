import React, { Component } from "react";

import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
  Message,
  Icon,
  Image,
  Modal,
  Header,
  Card,
  Search,
  Grid
} from "semantic-ui-react";

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
      <Grid>
       
        <Search
          placeholder="Search by user name, location or date"
          onChange={(event) => this.handleOnChange(event)}
          value={this.state.searchValue}
        />
       {/*  <Button basic color="blue" onClick={this.handleSearch}> Search</Button> */}
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
            Event not found! Yet, you can create your own event and others will
            join you.{" "}
          </p>
        )}
        
      </Grid>
    );
  }
}

export default EventSearch;
