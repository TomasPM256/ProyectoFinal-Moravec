import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../../api/fakeFetch';
import ItemList from '../item/ItemList';

const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetchProducts()
            .then(items => {
                if (categoryId) {
                    setProducts(items.filter(item => item.category === categoryId));
                } else {
                    setProducts(items);
                }
            })
            .finally(() => setLoading(false));
    }, [categoryId]);

    return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', color: '#333', marginBottom: '1.5rem' }}>{greeting}</h2>
            {loading ? (
                <p style={{ fontSize: '1.2rem', color: '#666' }}>Cargando productos...</p>
            ) : (
                <ItemList products={products} />
            )}
        </div>
    );
};

export default ItemListContainer;
