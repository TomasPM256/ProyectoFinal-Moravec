import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import brandLogo from "../../mi-ecommerce/images/Copilot_20250914_120645.png";


export default function NavBar() {
    const brandName = "Union"; 

    return (
        <nav
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.75rem 1rem",
                borderBottom: "1px solid #ddd",
                background: "#fff",
                position: "sticky",
                top: 0,
                zIndex: 10,
            }}
        >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                {/* Logo */}
                <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "inherit" }}>
                    <img
                        src={brandLogo}
                        alt={`${brandName} logo`}
                        style={{ width: 48, height: 48, objectFit: "cover", borderRadius: 8 }}
                        onError={(e) => {
                            e.currentTarget.src = "https://via.placeholder.com/48x48.png?text=Logo";
                        }}
                    />
                    <div style={{ marginLeft: 8 }}>
                        <div style={{ fontWeight: 700 }}>{brandName}</div>
                        <div style={{ fontSize: 12, color: "#666" }}>E-commerce de ejemplo</div>
                    </div>
                </Link>
            </div>

            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <Link to="/category/ropa" style={{ textDecoration: "none" }}>
                    Ropa
                </Link>
                <Link to="/category/electronica" style={{ textDecoration: "none" }}>
                    Electrónica
                </Link>
                <Link to="/category/perfumes" style={{ textDecoration: "none" }}>
                    Perfumes
                </Link>
                <Link to="/category/calzado" style={{ textDecoration: "none" }}>
                    Calzado
                </Link>

                <CartWidget />
            </div>
        </nav>
    );
}
