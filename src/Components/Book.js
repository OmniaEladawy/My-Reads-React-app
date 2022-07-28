import BookShelfChanger from "./BookShelfChanger";

function Book(props) {

    const thumbnail = props.book.imageLinks.thumbnail;
    const authors = props.book.authors;
    
    return ( 
        <li>
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }}></div>
                <div className="book-shelf-changer">
                    <BookShelfChanger book={props.book} moveBook={props.moveBook}/>
                </div>
                </div>
                <div className="book-title">{props.book.title}</div>
                <div className="book-authors">
                    {authors.map((author,index,authors) =>  {
                    if(index === authors.length-1){
                        return author
                    }else{
                        return `${author} , `
                    }
                })}</div>
            </div>
        </li>
     );
}

export default Book;