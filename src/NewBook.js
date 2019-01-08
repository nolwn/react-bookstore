import React, { Component } from "react";

class NewBook extends Component {
  constructor({ formSubmitHandler, formChangeHandler }) {
    super();

    this.formChangeHandler = formChangeHandler.bind(this);
    this.formSubmitHandler = formSubmitHandler;
    this.state = {
      inputs: {
        title:      { name: "title", type: "text", value: "" },
        author:     { name: "author", type: "text", value: "" },
        publisher:  { name: "publisher", type: "text", value: "" },
        price:      { name: "price", type: "number", value: "" }
      }
    }
  }

  render = () => {
    const fields = Object.keys(this.state.inputs);
    return (
        <tr>
          {
            fields.map((field, index) =>
              <td key={ index }>
                <input
                  className="input"
                  type={ this.state.inputs[field].type }
                  placeholder={ field }
                  value={ this.state.inputs[field].value }
                  onChange={
                    e => this.formChangeHandler(field, e.target.value)
                  }
                />
              </td>
            )
          }
          <td colSpan="2">
            <button className="button" onClick={
              _e => {
                this.formSubmitHandler(fields.reduce((acc, field) => {
                  acc[field] = this.state.inputs[field].value;
                  return acc;
                }, {}));

                this.setState(
                  {
                    inputs: {
                      title:      { name: "title", type: "text", value: "" },
                      author:     { name: "author", type: "text", value: "" },
                      publisher:  { name: "publisher", type: "text", value: "" },
                      price:      { name: "price", type: "number", value: "" }
                    }
                  });
              }
            }>submit</button>
          </td>
        </tr>
    )
  }
}

export default NewBook
