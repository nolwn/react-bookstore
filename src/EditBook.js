import React, { Component } from "react";

class EditBook extends Component {
  constructor({ inputs, formChangeHandler, updateEditHandler }) {
    super();

    this.formChangeHandler = formChangeHandler;
    this.updateEditHandler = updateEditHandler;
    this.state = { inputs: inputs };

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
                value={ this.state.inputs[field] }
                onChange={
                  e => this.formChangeHandler(field, e.target.value)
                }
              />
            </td>
          )
          [
            <td key="1">
              <button className="button">Edit</button>
            </td>,
            <td key="2">
              <button className="button">Cancel</button>
            </td>
          ]
        }
    </tr>
  );
}
}

export default EditBook;
