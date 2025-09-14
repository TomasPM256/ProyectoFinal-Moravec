import React from "react"; import { Link } from "react-router-dom";

export default function Item({ id, title, price, image }) {
  return (
    <article style={{ border: "1px solid #e6e6e6", borderRadius: 8, padding: 12, background: "#fff" }}>
      <Link to={`/item/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <div style={{ height: 160, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
          <img
            src={image}
            alt={title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/300x200.png?text=No+image")}
          />
        </div>

        <h3 style={{ margin: "0.5rem 0" }}>{title}</h3>
        <p style={{ margin: 0, fontWeight: 700 }}> ${price} </p>
      </Link>
    </article>
  );
}
