import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function useCart(){ return useContext(CartContext) }

export function CartProvider({ children }){
  const [cart, setCart] = useState([])

  function addItem(item, qty){
    setCart(prev=>{
      const exists = prev.find(p=>p.id===item.id)
      if(exists){
        return prev.map(p=> p.id===item.id ? { ...p, qty: p.qty+qty } : p)
      }else{
        return [...prev, { ...item, qty }]
      }
    })
  }

  function removeItem(id){
    setCart(prev=> prev.filter(p=>p.id!==id))
  }

  function clearCart(){ setCart([]) }

  function totalItems(){ return cart.reduce((s,i)=>s+i.qty,0) }
  function totalPrice(){ return cart.reduce((s,i)=>s + i.qty * i.price,0) }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}
