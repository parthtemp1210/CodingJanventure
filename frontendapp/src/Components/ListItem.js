import React from 'react'
export default function ListItem({bool:apple,item}) {
  return (    
    // BLACK
    (true && <div  style={{border:"solid black 1px",display:"flex"}}><div style={{width:"200px"}}>{item}</div><button style={{background:"red",color:"white"}}>X</button></div>)
  )
}
