import React from "react";
import Book from "./Book";
import NewBook from "./NewBook";
import EditBook from "./EditBook";

const BookList = ({ books, toggleCart, sortBy, formSubmitHandler, formChangeHandler, removeBook, updateEditHandler, editId, admin }) => {
  return (
    <div>
      <h1 className="title">Books</h1>
      <table className="table">
        <thead>
          <tr>
            <td><a onClick={ e => sortBy("title") }>Title</a></td>
            <td><a onClick={ e => sortBy("author") }>Author</a></td>
            <td><a onClick={ e => sortBy("publisher") }>Publisher</a></td>
            <td><a onClick={ e => sortBy("price") }>Price</a></td>
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
                inputs={{
                  title: book.title,
                  author: book.author,
                  publisher: book.publisher,
                  price: book.price
                }}
                formChangeHandler={ formChangeHandler }
                updateEditHandler={ updateEditHandler }
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
