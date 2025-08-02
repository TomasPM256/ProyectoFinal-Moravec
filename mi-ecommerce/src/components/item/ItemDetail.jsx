import React from 'react';

const ItemDetail = ({ product }) => {
    return (
        <div style={{
            maxWidth: '600px',
            margin: '2rem auto',
            padding: '2rem',
            border: '1px solid #ddd',
            borderRadius: '8px',
            backgroundColor: '#ffffff',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{product.name}</h2>
            <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '0.5rem' }}>{product.description}</p>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#000' }}>${product.price}</p>
        </div>
    );
};

export default ItemDetail;