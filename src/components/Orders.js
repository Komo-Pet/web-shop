import React, { Component } from 'react'
import { FaRegTrashCan } from "react-icons/fa6";

export class Orders extends Component {
  render() {
    return (
      <div className='item'>
        
        <img src={"./assets/" + this.props.item.img}/>
        <p>Количество: 1</p>
        <h2>{this.props.item.title}</h2>
        <b>{this.props.item.price}$</b>
        <FaRegTrashCan className='trash-icon' onClick={() => this.props.onDelete(this.props.item.id)}/>
      </div>
    )
  }
}

export default Orders