import './App.css'

import Home from './Home';
import { BrowserRouter,Link, Route, Routes, Navigate } from 'react-router-dom';


function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
