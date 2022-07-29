function BookShelfChanger(props) {
    return ( 
        <select defaultValue={'move'}  onClick={(e)=>{if(e.target.value !== "move"){props.moveBook(e.target.value,props.book)}}}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading" >Currently Reading</option>
            <option value="wantToRead" >Want to Read</option>
            <option value="read" >Read</option>
            <option value="none" >None</option>
        </select>
    );
}

export default BookShelfChanger;