import React from "react";

const Book = ({ id, title, author, publisher, price, inCart, toggleCart, removeBook, editId, admin }) =>
  <tr>
    <td>{ title }</td>
    <td>{ author }</td>
    <td>{ publisher }</td>
    <td>{ "$" + Number(price).toFixed(2) }</td>
    {
      admin ?
        editId !== null ? // 👹 Please forgive me!
          [ <td />, <td /> ] :
          [
            <td>
              <button className="button">Edit</button>
            </td>,
            <td>
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
