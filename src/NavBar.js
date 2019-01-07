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
          <div className="navbar-menu">
            <div className="navbar-start">

              { /* eslint-disable-next-line */ }
              <a
                href="#"
                className="navbar-item"
              >Home</a>

              { /* eslint-disable-next-line */ }
              <a
                href="#"
                className="navbar-item"
                >Your Fortune</a>

              { /* eslint-disable-next-line */ }
              <a
                // eslint-disable-next-line
                href="#"
                className="navbar-item"
                >Super Secret</a>
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
