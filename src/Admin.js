import React, { Component } from "react";
import axios from "axios";

class Admin extends Component {
  constructor({ formSubmitHandler }) {
    super();

    this.formSubmitHandler = formSubmitHandler;
    this.state = {
      inputs: {
        title: "",
        subtitle: "",
        author: "",
        published: "",
        publisher: "",
        pages: "",
        description: "",
        website: ""
      },
      inCart: false
    };
  }

  formChangeHandler = (field, value) => {
    console.log(value);
    const newInputs = { ...this.state.inputs };
    newInputs[field] = value;
    console.log(newInputs);

    this.setState({ inputs: { ...newInputs }});
  }

  render = () => {
    const formFields = Object.keys(this.state.inputs);

    return (
      <form onSubmit={ e => {
        e.preventDefault();
        this.formSubmitHandler(this.state.inputs);
      }}>
        <h1 className="title">Admin</h1>
        {
          formFields.map(field =>
            <div className="field is-horizontal">
              <div className="field-label">
                <label className="label">{ field }</label>
              </div>
              <div>
                <input
                  className="input"
                  type="text"
                  placeholder={ field }
                  value={ this.state[field] }
                  onChange={ e => this.formChangeHandler(field, e.target.value) }
                />
              </div>
            </div>
          )
        }

        <button className="button" type="submit"></button>
      </form>
    );
  }
}

export default Admin;
