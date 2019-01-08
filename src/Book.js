import React from "react";

const Book = ({ id, title, author, publisher, price, inCart, toggleCart, removeBook, updateEditHandler, editId, admin }) =>
  <tr>
    <td>{ title }</td>
    <td>{ author }</td>
    <td>{ publisher }</td>
    <td>{ "$" + Number(price).toFixed(2) }</td>
    {
      admin ?
        editId !== null ? // 👹 Please forgive me!
          [ <td key="1" />, <td key="2" /> ] :
          [
            <td key="1">
              <button
                onClick={ _e => updateEditHandler(id) }
                className="button"
                >Edit</button>
            </td>,
            <td key="2">
              <button className="button" onClick={ _e => removeBook(id) }>Delete</button>
            </td>
          ]
      :

      <td>
        {
          !inCart ?
          <button
            className="button"
            onClick={ (e) => toggleCart(id) }
          >+</button> :
          ""
      }
    </td>}
  </tr>;

export default Book;
