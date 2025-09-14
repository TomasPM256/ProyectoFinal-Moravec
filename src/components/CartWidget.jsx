import React from "react";
import { Link } from "react-router-dom";


export default function CartWidget() {
  const mockQuantity = 0;

  return (
    <Link to="/checkout" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", color: "inherit" }}>
      {/* Icono simple en SVG */}
      <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
        <path
          d="M7 4h-2l-1 2H1v2h1l3.6 7.59-1.35 2.44A1 1 0 004.2 19h13.45v-2H6.42l.93-1.68L20 8V6h-9"
          fill="currentColor"
        />
      </svg>

      <span style={{ fontWeight: 700 }}>{mockQuantity}</span>
    </Link>
  );
}
