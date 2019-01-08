import React from "react";
import Book from "./Book";
import NewBook from "./NewBook";
import EditBook from "./EditBook";

const BookList = ({ books, toggleCart, sortBy, formSubmitHandler, formChangeHandler, removeBook, updateEditHandler, submitUpdateHandler, editId, admin }) => {
  return (
    <div>
      <h1 className="title">Books</h1>
      <table className="table">
        <thead>
          <tr>
            <td><button
              type="button"
              className="link-button"
              onClick={ e => sortBy("title") }>Title</button></td>
            <td><button
              type="button"
              className="link-button"
              onClick={ e => sortBy("author") }>Author</button></td>
            <td><button
              type="button"
              className="link-button"
              onClick={ e => sortBy("publisher") }>Publisher</button></td>
            <td><button
              type="button"
              className="link-button"onClick={ e => sortBy("price") }>Price</button></td>
            {
              admin ?
              <td colSpan="2">Admin Tools</td> :
              <td>Cart</td>
            }
          </tr>
        </thead>
        <tbody>
          {
            admin ? <NewBook
              formSubmitHandler={ formSubmitHandler }
              formChangeHandler={ formChangeHandler }
            /> : <tr />
          }
          {
            books.map(book =>
              admin && book.id === editId ?
              <EditBook
                key={ book.id }
                id={ book.id }
                inputs={{
                  title: book.title,
                  author: book.author,
                  publisher: book.publisher,
                  price: book.price
                }}
                formChangeHandler={ formChangeHandler }
                updateEditHandler={ updateEditHandler }
                submitUpdateHandler={ submitUpdateHandler }
              />
              :
              <Book
                key={ book.id }
                { ...book }
                toggleCart={ toggleCart }
                removeBook={ removeBook }
                updateEditHandler={ updateEditHandler }
                editId = { editId }
                admin={ admin }
              />
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default BookList;
