import React, { Component } from "react";
import "../events/EventSearch.css";

class EventSearch extends Component {
  state = {
    searchValue: "",
    meals: [],
  };

  handleOnChange = (event) => {
    this.setState({ searchValue: event.target.value });
  };

  handleSearch = () => {
    this.makeApiCall(this.state.searchValue);
  };

  makeApiCall = (searchInput) => {
    var searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
    fetch(searchUrl)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        this.setState({ meals: jsonData.meals });
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
        {this.state.meals ? (
          <div id="meals-container">
            {this.state.meals.map((meal, index) => (
              <div class="single-meal" key={index}>
                <h2>{meal.strMeal}</h2>
                <img src={meal.strMealThumb} alt="meal-thumbnail" />
              </div>
            ))}
          </div>
        ) : (
          <p>Try searching for a event</p>
        )}
      </div>
    );
  }
}

export default EventSearch;
