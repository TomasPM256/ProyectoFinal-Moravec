import React from 'react'
import { Link } from 'react-router-dom'
import { CartWidget } from './CartWidget'

export default function NavBar() {
    return (
        <nav style={{ display: 'flex', alignItems: 'center', padding: '1rem', background: '#222', color: '#fff' }}>
            <h2><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Mi E-Commerce</Link></h2>
            <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', marginLeft: '2rem' }}>
                <li><Link to="/category/electronica" style={{ color: '#fff' }}>Electrónica</Link></li>
                <li><Link to="/category/ropa" style={{ color: '#fff' }}>Ropa</Link></li>
            </ul>
            <CartWidget />
        </nav>
    )
}
