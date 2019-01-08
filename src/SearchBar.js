import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div className="field navbar-item">
        <p className="control has-icons-left">
          <input
            className="input"
            type="text"
            placeholder="Search"
          />
          <span className="icon is-small is-left">
            <i className="fas fa-search"></i>
          </span>
        </p>
      </div>
    );
  }
}

export default SearchBar;
