import Book from "./Book";

function BookShelf(props) {
    
    const filteredBooks = props.books.filter((book)=> book.shelf === props.bookShelf.type)
    console.log(filteredBooks)

     
    
    return ( 
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.bookShelf.name}</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
                {
                    filteredBooks.map((book,index) => {
                        return <Book key={index} book={book} moveBook={props.moveBook}/>
                    })
                }
            </ol>
            </div>
        </div>
    );
}

export default BookShelf;