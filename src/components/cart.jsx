import React from "react"

const Cart = props => {
  const {cart, totalCost, purchaseCart} = props

  return (
    <div className="cart-content">
      <section className="top-cart">
      <h2><span>🛒 🛒 🛒 🛒 </span></h2>
      <h3>Total Price: {'$ ' + totalCost} </h3>
      </section>
      <ul>
      {cart.map(p => (
        <li className="cart-item">
          {p.item} - {'$' + p.price}
        </li>
      )) }
      </ul>
      <button className="purchase-btn" onClick={() => purchaseCart(cart)}>Purchase your items</button>
    </div>
  )
  }

  export default Cart
