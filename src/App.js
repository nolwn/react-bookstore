import React, { Component } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import BookList from "./BookList";
import Cart from "./Cart";
import AdminCheckbox from "./AdminCheckbox";

import "bulma/css/bulma.css";
import "./App.css";

class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        books: [],
        admin: false,
        editId: null
      };
    }

    async getBooks() {

      try {
        const response = await axios.get("http://localhost:8082/api/books");

        this.setState({ books: response.data });


      } catch(err) {
        console.error(err);
      }
  }

  async addToCart(id) {
    await axios.patch("http://localhost:8082/api/books/cart/add/" + id);

    this.getBooks();
  }

  async removeFromCart(id) {
    await axios.patch("http://localhost:8082/api/books/cart/remove/" + id);

    this.getBooks();
  }

  removeBook = async (id) => {
    await axios.delete("http://localhost:8082/api/books/" + id);

    this.getBooks();
  }

  toggleAdminHandler = _e => {
    const admin = !this.state.admin;

    this.setState({ admin });
  }

  sortBy = (field) => {
    const sortedBooks = this.state.books.slice().sort((book1, book2) => {
      if (book1[field] === book2[field]) {
        return 0;

      } else {
        return book1[field] > book2[field];
      }
    })

    this.setState({ books: sortedBooks, editId: null });
  }

  formSubmitHandler = async (values) => {
    await axios.post("http://localhost:8082/api/books", values);

    this.getBooks();
  }

  toggleCart = async (id) => {
    const book = this.state.books.find(book => book.id === id);

    if (!book.inCart) {
      this.addToCart(id);

    } else {
      this.removeFromCart(id);
    }
  }

  componentDidMount() {
    this.getBooks();
  }


  formChangeHandler(field, value) {
    const newInputs = { ...this.state.inputs };
    newInputs[field].value = value;

    this.setState({ inputs: { ...newInputs }});
  }

  updateEditHandler = (id) => {
    if (!id) {
      this.setState({ editId : null });

    } else {
      this.setState({ editId : id })
    }
  }

  submitUpdateHandler = async (id, values) => {
    await axios.put("http://localhost:8082/api/books/" + id, values);
    await this.getBooks()
    this.updateEditHandler(null);
    this.getBooks();
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="section">
          <div className="container">
            <div className="tile is-ancestor is-vertical">
              <div className="tile is-parent">
                <AdminCheckbox
                  toggleAdminHandler={ this.toggleAdminHandler }
                  admin={ this.state.admin }
                />
              </div>
              <div className="tile is-parent">
                <div className="tile is-parent">
                  <article className="tile">
                    <BookList
                      books={ this.state.books }
                      toggleCart={ this.toggleCart }
                      formSubmitHandler={ this.formSubmitHandler }
                      formChangeHandler={ this.formChangeHandler }
                      updateEditHandler={ this.updateEditHandler }
                      submitUpdateHandler = { this.submitUpdateHandler }
                      removeBook={ this.removeBook }
                      sortBy={this.sortBy}
                      editId={ this.state.editId }
                      admin={ this.state.admin }
                    />
                  </article>
                </div>
                {
                  this.state.admin ? "" :
                  <div className="tile is-parent is-4">
                    <article className="tile">
                      <Cart
                        books={ this.state.books }
                        toggleCart={ this.toggleCart }
                        admin={ this.state.admin }
                      />
                    </article>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
