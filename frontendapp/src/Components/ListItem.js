import React from 'react'

export default function ListItem(props) {
    console.log(props.item)
  return (
    <div>{props.item}</div>
  )
}
