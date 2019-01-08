import React, { Component } from "react";

class EditBook extends Component {
  constructor({ id, inputs, formChangeHandler, submitUpdateHandler, updateEditHandler }) {
    super({ id, inputs, formChangeHandler, submitUpdateHandler, updateEditHandler });

    console.log(inputs)

    this.formChangeHandler = formChangeHandler;
    this.updateEditHandler = updateEditHandler;
    this.submitUpdateHandler = submitUpdateHandler;
    this.state = {
      inputs: {
        title:      { name: "title", type: "text", value: inputs.title },
        author:     { name: "author", type: "text", value: inputs.author },
        publisher:  { name: "publisher", type: "text", value: inputs.publisher },
        price:      { name: "price", type: "number", value: inputs.price }
      }
    };
    this.id = id;

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
                type={ this.state.inputs[field].type }
                value={ this.state.inputs[field].value }
                onChange={
                  e => this.formChangeHandler(field, e.target.value)
                }
              />
            </td>
          )
        }

        {
          [
            <td key="1">
              <button
              onClick={ e => this.submitUpdateHandler(this.id, fields.reduce((acc, field) => {
                acc[field] = this.state.inputs[field].value;
                return acc;
              }, {})) }
              className="button"
              >Submit</button>
            </td>,
            <td key="2">
              <button
                className="button"
                onClick = { _e => this.updateEditHandler() }
                >Cancel</button>
            </td>
          ]
        }
    </tr>
  );
}
}

export default EditBook;
