import React from "react"

const Cart = props => {
  const {cart, setCart} = props

  return (
    <div>
      <h4>Cart: </h4>
      <ul>
      {cart.map(p => (
        <li>
          {p.item}
        </li>
      )) }
      </ul>
    </div>
  )
  }

  export default Cart

  // {productList.map(product => Object.values(product).find(el => el.toString().includes('Mask')))}