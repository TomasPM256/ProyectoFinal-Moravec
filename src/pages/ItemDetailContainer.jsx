import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../firebase'
import ItemCount from '../components/ItemCount'
import { useCart } from '../context/CartContext'

export default function ItemDetailContainer(){
  const { id } = useParams()
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()

  useEffect(()=>{
    setLoading(true)
    getProductById(id).then(res=> setItem(res)).catch(()=> setItem(null)).finally(()=> setLoading(false))
  },[id])

  if(loading) return <div className="loader">Cargando detalle...</div>
  if(!item) return <div>Producto no encontrado</div>

  function handleAdd(qty){
    addItem(item, qty)
    setAdded(true)
  }

  return (
    <div className="card">
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      { item.stock<=0 && <div>Producto sin stock</div> }
      {!added ? <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} /> : <div>Agregado al carrito</div>}
    </div>
  )
}
