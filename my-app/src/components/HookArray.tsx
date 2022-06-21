import React, { useState } from 'react'
type item = {
id: number
value: number
}[]
const HookArray = () => {

  const addItem = () =>{
    setItems([...items,{
      id : items.length,
      value: Math.floor((Math.random()*10)) + 1
    }])
  }


  const [items, setItems] = useState<item>([])
  return (
    <div><h1>HookArray</h1>
    <div ><button onClick={addItem}>ADD ITEM</button> </div>
    <div>{
    items.map((item,index) =>(
      <div key={item.id}>{`ID: ${item.id} => VALUE: ${item.value}`}</div>
    ))
    }
    </div>

    </div>
  )
}

export default HookArray
