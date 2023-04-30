import './App.css';
import Home from './componate/Home/Home';
import { Route, Routes } from 'react-router-dom';
import EditBook from './componate/EditBook/EditBook';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/editBook' element={<EditBook />} />
      </Routes>
    </>
  );
}

export default App;
