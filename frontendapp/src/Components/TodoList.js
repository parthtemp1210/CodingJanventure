import React from 'react'
import ListItem from './ListItem.js';

export default function TodoList() {
    var lists = [
      {listName:"List1",list:["Do something","Do something else"]} // list 1
      ,{listName:"List2",list:["Do something","Do something else","Do something else else"]} // list 2
    ];
    function handleAdd(listName){
      alert(listName)
      console.log(lists)
    }
  return (
    // RED
    <ul style={{display:"flex",border:"solid red 3px"}}>
        {lists.map(({listName,list}) =>
            <ul style={{border:"solid blue 3px"}}>
              <label style={{fontSize:"2rem"}}>{listName}</label>
              <button style={{float:"right",background:"turquoise",color:"white",fontSize:"2rem"}} onClick={()=>{handleAdd(listName)}}>Add to list</button>
                
                {/* BLUE */}
                {list.map((item) =>
                <ListItem item={item} apple={false}/>
                // <li>{item}</li> 
                )}

            </ul>
        )}
    </ul>
  )
}
