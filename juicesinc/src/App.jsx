import './App.css'

import Home from './Home';
import { BrowserRouter,Link, Route, Routes, Navigate } from 'react-router-dom';
import Order from './order';


function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path = '/order' element = {<Order/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
