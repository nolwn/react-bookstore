import React from "react";
import CartItem from "./CartItem";

const Cart = ({ books, cartTotal, toggleCart }) => {
  let total = 0;
  return (
    <div>
      <h1 className="title">Cart</h1>
      <table className="table">
        <thead>
          <tr>
            <td>Title</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          {
            books.reduce(( acc, book ) => {
              if (book.inCart) {
                acc.push(
                  <CartItem
                    key={ book.id }
                    { ...book }
                    toggleCart={ toggleCart }
                  />
                );

                total = total + Number(book.price);
              }

              return acc;
            }, [])
          }
        </tbody>
        <tfoot>
          <tr>
            <td>Total:</td>
            <td>{ "$" + Number(total).toFixed(2) }</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
export default Cart;
