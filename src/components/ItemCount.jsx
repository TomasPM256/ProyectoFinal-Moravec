import React, { useState } from 'react'

export default function ItemCount({ stock=10, initial=1, onAdd }){
  const [count, setCount] = useState(initial)
  function inc(){ setCount(c => Math.min(c+1, stock)) }
  function dec(){ setCount(c => Math.max(c-1, 1)) }
  return (
    <div style={{display:'flex', gap:8, alignItems:'center'}}>
      <button onClick={dec} disabled={count<=1}>-</button>
      <div>{count}</div>
      <button onClick={inc} disabled={count>=stock}>+</button>
      <button onClick={()=>onAdd(count)} disabled={stock<=0}>Agregar</button>
    </div>
  )
}
