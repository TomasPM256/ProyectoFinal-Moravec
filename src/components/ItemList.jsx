import React from "react";
import Item from "./Item";

export default function ItemList({ products }) {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 16 }}>
            {products.map((p) => (
                <Item key={p.id} {...p} />
            ))}
        </div>
    );
}
