import './App.css';
import {Routes,Route, Navigate} from "react-router-dom";
import BookList from './Components/BookList';
import ErrorPage from './Components/ErrorPage';
import BookSearch from './Components/BookSearch';

function App() {

  return (
    <> 
      <div className='container'>
        <Routes>
          <Route path='/bookList' element={<BookList />}  />
          <Route path='/bookSearch' element={<BookSearch />}  />
          <Route path='/' element={<Navigate  to='/bookList'/>}/>
          <Route path='*' element={<ErrorPage />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;

