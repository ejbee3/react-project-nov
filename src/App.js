import React, {useState} from "react";
import axios from "axios"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// images
import steve from './images/scuba-steve.jpg'
import diveComputerImg from './images/dive-computer.jpg'
import maskImg from './images/mask.jpg'
import snorkelImg from './images/snorkel.jpg'
import tabletImg from './images/tablet.jpg'
import finsImg from './images/fins.jpg'
// components
import Home from "./components/home"
import Products from "./components/products";
import Cart from "./components/cart"
// CSS
import './App.css'



export default function App() {
  const [randomImg, setRandomImg] = useState([]);
  const [products, setProducts] = useState([])

  const getImg = (key, query) => {
    axios.get(`https://api.unsplash.com/photos/random/?client_id=${key}&${query}`)
        .then(response => {
            setRandomImg(response.data.urls.small);
        })
}

const makeProducts = () => {
  setProducts([
    {
      item: "Mares X-VU Liquidskin Scuba Diving Mask",
      price: 79.95,
      desc: "Maintains a great seal and comfortable feel!",
      imageSrc: maskImg
    },
    {
      item: "Cressi Foldable Adult Dry Snorkel for Scuba Diving",
      price: 39.99,
      desc: "Perfect for shallow dives and conserving air in your tank!",
      imageSrc: snorkelImg
    },
    {
      item: "Mares Italian Designed Avanti Superchannel Full Foot Fins",
      price: 69.95,
      desc: "Closed around your entire foot for a snug fit and a stylish red color!",
      imageSrc: finsImg
    },
    {
      item: "Oceanic Geo 4 Wrist Dive Computer",
      price: 399.95,
      desc: "Useful for planning and keeping track of your descents and ascents!",
      imageSrc: diveComputerImg
    },
    {
      item: "Trident Underwater Writing Slate with Clip",
      price: 11.99,
      desc: "Draw all of the corals and critters you see!",
      imageSrc: tabletImg
    }
  ])
}

  return (
    <Router>
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
              <Link to="/cart">Checkout</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/products">
            <Products makeProducts={makeProducts} products={products} />
          </Route>
          <Route path="/cart">
            <Cart products={products} />
          </Route>
          <Route path="/">
            <Home image={randomImg} getImg={getImg} steve={steve} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


