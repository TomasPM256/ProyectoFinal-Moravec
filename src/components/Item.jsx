// src/components/Item.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Item({ item }) {
  return (
    <div className="card">
      <h4>{item.title}</h4>
      <p>Precio: ${item.price}</p>
      <p>Categoría: {item.category}</p>
      <Link to={`/item/${item.id}`}>Ver detalle</Link>
    </div>
  );
}
