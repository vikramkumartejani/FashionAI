import './App.css';
import GetStarted from './components/GetStarted/GetStarted';
// import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './components/Products/Products';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<GetStarted />} />
        <Route path='/product' element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
