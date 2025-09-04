// src/components/ItemListContainer.jsx
import React, { useEffect, useState } from "react";
import Item from "../components/Item";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../firebase";

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fn = categoryId ? getProductsByCategory : getProducts;

    fn(categoryId)
      .then(res => {
        console.log("Productos traídos:", res); // <-- mirá esto en la consola del navegador
        setItems(res);
      })
      .catch(err => {
        console.error("Error al traer productos:", err);
        setItems([]);
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) return <div className="loader">Cargando productos...</div>;
  if (!items || items.length === 0) return <div>No hay productos</div>;

  return (
    <div className="grid">
      {items.map(i => (
        <Item key={i.id} item={i} />
      ))}
    </div>
  );
}
