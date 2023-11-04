import './App.css';
import GetStarted from './components/GetStarted/GetStarted';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<GetStarted />} />
        <Route path='/product' element={<Products />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
