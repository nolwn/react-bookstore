import React, { Component } from "react";
import SearchBar from "./SearchBar";

class NavBar extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <div className="navbar-start">

              { /* eslint-disable-next-line */ }
              <a
                href="#"
                className="navbar-item"
              >Home</a>
            </div>
            <div className="navbar-end">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
