import React from 'react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

export function CartWidget(){
  const { totalItems } = useCart()
  return <Link to="/cart" style={{marginLeft:'auto', color:'#fff'}}>Carrito ({totalItems()})</Link>
}
