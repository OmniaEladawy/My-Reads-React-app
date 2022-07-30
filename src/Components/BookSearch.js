import { Link } from "react-router-dom";
import { useState } from 'react';
import * as BookApi from "../BooksAPI"; 
import Book from "./Book";
import { useEffect } from 'react';

function BookSearch() {
    const [search,setSearch] = useState([])
    const [searchText,setSearchText] = useState('')

    const searchBooks = (query) => { 
      if(query.length > 0){
        BookApi.search(query).then((books)=>{
          if(books.errors){
            setSearch([])
          }else{
            setSearch(books)
            console.log(search)
          }
        })
      }else{
        setSearch([])
      } 
    }

    useEffect(()=>{
      searchBooks(searchText)
    },[searchText])

    const moveBook = (shelf,book) => {
      BookApi.update(book, shelf).then(books => {
          console.log(books)
      });

      const updatedBooks = search.map((b) => {
          if(b.id === book.id){
              b.shelf = shelf
          }
          return b
      })
      setSearch(updatedBooks);
    }

    return ( 
    <div className="search-books">
    <div className="search-books-bar"> 
        <Link to='/bookList' className="close-search"> Close </Link>
        <div className="search-books-input-wrapper">
        <input type="text" value={searchText} placeholder="Search by title or author" onChange={(e)=>setSearchText(e.target.value)}/>

        </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid">
        {
          (search.length > 0) ? search.map((book,index) => {
              return <Book key={index} book={book} moveBook={moveBook}/>
          }):<div></div>
        }
      </ol>
    </div>
  </div> );
}

export default BookSearch;