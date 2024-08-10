import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar/NavBar'
import './App.css'
import CartContextProvider from './components/context/CartContext';
import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from './components/Checkout'



function App() {
  return (
    <>
      <div>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/enOferta/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path={"/Cart"} element={<Cart />} />
          </Routes>
        </BrowserRouter>
        </CartContextProvider>
      </div>
    </>
  )
}

export default App
