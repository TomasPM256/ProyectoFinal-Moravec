import React, { useEffect, useState } from "react"; import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import { fetchProducts } from "../../mi-ecommerce/src/mocks/products";


export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchProducts(categoryId)
      .then((res) => setProducts(res))
      .finally(() => setLoading(false));
  }, [categoryId]);
  
  return (
    <div>
      {loading ? (
        <p>Cargando productos...</p>
      ) : products.length === 0 ? (
        <p>No hay productos en esta categoría.</p>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
}
