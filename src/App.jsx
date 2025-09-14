import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import NavBar from "./components/NavBar";
import ItemListContainer from "./pages/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <main style={{ padding: "1rem", maxWidth: 1100, margin: "0 auto" }}>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="*"
            element={
              <div>
                <h2>Página no encontrada</h2>
                <p>
                  Volver al inicio: <Link to="/">Home</Link>
                </p>
              </div>
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
