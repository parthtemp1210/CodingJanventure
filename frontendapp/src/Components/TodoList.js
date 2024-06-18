import React from 'react'
import ListItem from './ListItem';

export default function TodoList() {
    var lists = [{listName:"List1",list:["Do something","Do something else"]},{listName:"List2",list:["Do something","Do something else"]}];
  return (
    <ul>
        {lists.map(({listName,list}) =>
            <ul>
                {list.map((item) =>
                <ListItem item={item}/>
                )}
            </ul>
        )}
    </ul>
  )
}
