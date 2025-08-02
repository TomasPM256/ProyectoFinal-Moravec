import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '1rem',
            textAlign: 'center',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{product.name}</h3>
            <p style={{ color: '#555', marginBottom: '0.5rem' }}>${product.price}</p>
            <Link to={`/item/${product.id}`} style={{
                textDecoration: 'none',
                color: 'white',
                backgroundColor: '#007bff',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                display: 'inline-block'
            }}>
                Ver detalle
            </Link>
        </div>
    );
};

export default Item;