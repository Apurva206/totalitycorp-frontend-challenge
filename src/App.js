import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Announce from './component/Announce';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
      <Announce />
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element = {<Cart/>} />
        <Route
          path="/"
          element={
            <>
              <Home/>
              
            </>
          }
        />

      </Routes>
    </BrowserRouter>
          <Footer />


    </>
  );
}

export default App;
