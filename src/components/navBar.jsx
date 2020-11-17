import React from 'react';
import { Link } from 'react-router-dom'

const navBar = props => {
  const { cart } = props
  return (
    <div>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li className="checkout-link">
              <Link to="/cart">Checkout{cart.length > 0 ? '(' + cart.length + ')' : ""}</Link>
            </li>
          </ul>
        </nav>
    </div>
  );
}

export default navBar;
