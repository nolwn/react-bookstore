import React, { Component } from "react";

class NewBook extends Component {
  constructor({ formSubmitHandler, formChangeHandler }) {
    super();

    this.formChangeHandler = formChangeHandler.bind(this);
    this.formSubmitHandler = formSubmitHandler;
    this.state = {
      inputs: {
        "title": "",
        "author": "",
        "publisher": "",
        "price": ""
      }
    }
  }

  render = () => {
    const fields = Object.keys(this.state.inputs);
    return (
        <tr>
          {
            fields.map(field =>
              <td key={ field }>
                <input
                  className="input"
                  type={ field === "price" ? "number" : "text" }
                  placeholder={ field }
                  value={ this.state[field] }
                  onChange={
                    e => this.formChangeHandler(field, e.target.value)
                  }
                />
              </td>
            )
          }
          <td colSpan="2">
            <button className="button" onClick={
              _e => this.formSubmitHandler(this.state.inputs)
            }>submit</button>
          </td>
        </tr>
    )
  }
}

export default NewBook
