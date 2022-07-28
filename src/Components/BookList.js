import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";
import * as BookApi from "../BooksAPI"
import { useEffect, useState } from "react";

function BookList() {
    const bookShelves = [{type : 'currentlyReading' , name : 'Currently Reading'},{type : 'wantToRead' , name : 'Want to Read'},{type : 'read' , name : 'Read'}]
    const [books,setBooks] = useState([]);

    useEffect(()=>{
      BookApi.getAll().then(b => {
          setBooks(b)
      })
      },[])

    const moveBook = (shelf,book) => {
          BookApi.update(book, shelf).then(books => {
              console.log(books)
          });

          const updatedBooks = books.map((b) => {
              if(b.id === book.id){
                  b.shelf = shelf
              }
              return b
          })
          setBooks(updatedBooks);
      }

    return ( 
        <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {bookShelves.map((bookShelf,index) => {
                  return <BookShelf key={index} bookShelf={bookShelf} moveBook={moveBook} books={books}/>
                })}
              </div>
            </div>
            <div className="open-search">
              <Link className="btn" to='/bookSearch'> Add a book </Link>
            </div>
          </div>
      </div>
    );
}

export default BookList;