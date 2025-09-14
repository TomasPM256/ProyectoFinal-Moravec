import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function ItemDetail({ product }) {
    const [qty, setQty] = useState(1);

    const handleAdd = () => {
        alert(`Se agregó ${qty} unidad(es) de "${product.title}" al carrito (mock).`);
    };

    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <div>
                <img
                    src={product.image}
                    alt={product.title}
                    style={{ width: "100%", height: 420, objectFit: "cover", borderRadius: 8 }}
                    onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/600x400.png?text=No+image")}
                />
            </div>

            <div>
                <h2>{product.title}</h2>
                <p style={{ fontWeight: 700, fontSize: 20 }}>${product.price}</p>
                <p>{product.description}</p>
                <p>
                    <strong>Stock:</strong> {product.stock}
                </p>

                <div style={{ marginTop: 12, display: "flex", gap: 8, alignItems: "center" }}>
                    <label>
                        Cantidad:
                        <input
                            type="number"
                            min="1"
                            max={product.stock}
                            value={qty}
                            onChange={(e) => setQty(Math.max(1, Math.min(product.stock, Number(e.target.value) || 1)))}
                            style={{ width: 72, marginLeft: 8 }}
                        />
                    </label>

                    <button onClick={handleAdd} style={{ padding: "8px 12px", cursor: "pointer" }}>
                        Agregar al carrito
                    </button>

                    <Link to="/checkout" style={{ marginLeft: 12 }}>
                        Ir a checkout
                    </Link>
                </div>
            </div>
        </div>
    );
}
