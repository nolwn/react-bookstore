import React from "react";

const CartItem = ({ id, title, price, toggleCart }) =>
  <tr>
    <td>{ title }</td>
    <td>{ "$" + Number(price).toFixed(2) }</td>
    <td>
      <button
        onClick={ e => toggleCart(id) }
        className="button"
      >-</button>
    </td>
  </tr>

export default CartItem;
