import React from 'react'
import { useCart } from '../context/CartContext'
import { Link, useNavigate } from 'react-router-dom'

export default function CartPage(){
  const { cart, removeItem, clearCart, totalPrice } = useCart()
  const nav = useNavigate()
  if(cart.length===0) return <div>Carrito vacío. <Link to="/">Volver al catálogo</Link></div>
  return (
    <div>
      <h2>Carrito</h2>
      <ul>
        {cart.map(i=>(
          <li key={i.id} style={{marginBottom:8}}>
            {i.title} - {i.qty} x ${i.price} = ${i.qty * i.price}
            <button onClick={()=>removeItem(i.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <div>Total: ${totalPrice()}</div>
      <button onClick={()=>nav('/checkout')}>Finalizar compra</button>
      <button onClick={clearCart}>Vaciar</button>
    </div>
  )
}
