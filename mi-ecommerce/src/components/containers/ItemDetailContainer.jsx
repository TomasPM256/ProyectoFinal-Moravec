import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../../api/fakeFetch';
import ItemDetail from '../item/ItemDetail';

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetchProductById(itemId)
            .then(setProduct)
            .catch(err => setError(err))
            .finally(() => setLoading(false));
    }, [itemId]);

    if (loading) return <p>Cargando detalle...</p>;
    if (error) return <p>{error}</p>;

    return <ItemDetail product={product} />;
};

export default ItemDetailContainer;