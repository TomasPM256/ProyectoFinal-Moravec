import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import { createOrder } from '../firebase'
import { useNavigate } from 'react-router-dom'

export default function CheckoutPage(){
  const { cart, clearCart, totalPrice } = useCart()
  const [loading, setLoading] = useState(false)
  const [orderId, setOrderId] = useState(null)
  const [form, setForm] = useState({ name:'', email:'', phone:''})
  const nav = useNavigate()

  if(cart.length===0 && !orderId) return <div>Carrito vacío. <button onClick={()=>nav('/')}>Volver</button></div>
  async function handleSubmit(e){
    e.preventDefault()
    setLoading(true)
    const order = {
      buyer: form,
      items: cart.map(i=> ({id:i.id, title:i.title, qty:i.qty, price:i.price})),
      total: totalPrice(),
      createdAt: new Date().toISOString()
    }
    try{
      const id = await createOrder(order)
      setOrderId(id)
      clearCart()
    }catch(err){
      console.error(err)
      alert('Error creando la orden')
    }finally{ setLoading(false) }
  }

  if(loading) return <div className="loader">Generando orden...</div>
  if(orderId) return <div>Compra realizada! Tu orden ID: <strong>{orderId}</strong></div>

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Nombre" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
        <input placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
        <input placeholder="Teléfono" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} required />
        <div>Total a pagar: ${totalPrice()}</div>
        <button type="submit">Confirmar compra</button>
      </form>
    </div>
  )
}
