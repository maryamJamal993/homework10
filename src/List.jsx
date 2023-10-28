import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
const List = (props) => {
    
  return (
    <>
    {props.items.length==0?<h1>List is empty</h1>:<h1>{props.listName}</h1>}
    {
        props.items.map(
            (item)=><li class="className">{item}</li>
        )
    }
    </>
  )
}

export default List