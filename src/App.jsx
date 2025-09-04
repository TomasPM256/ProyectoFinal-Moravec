import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import ItemListContainer from './pages/ItemListContainer'
import ItemDetailContainer from './pages/ItemDetailContainer'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import { CartWidget } from './components/CartWidget'
import { CartProvider } from './context/CartContext'

export default function App(){
  return (
    <CartProvider>
      <div>
        <nav className="nav">
          <Link to="/">Catalogo</Link>
          <Link to="/category/1">Categoria 1</Link>
          <Link to="/cart">Carrito</Link>
          <CartWidget />
        </nav>
        <main className="container">
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </main>
      </div>
    </CartProvider>
  )
}

