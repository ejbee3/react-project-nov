import React, {useState} from "react";
import axios from "axios"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// images
import steve from './images/scuba-steve.jpg'
import diveComputerImg from './images/dive-computer.jpg'
import maskImg from './images/mask.jpg'
import snorkelImg from './images/snorkel.jpg'
import tabletImg from './images/tablet.jpg'
import finsImg from './images/fins.jpg'
import waves from './images/waves.png'
// components
import Home from "./components/home"
import Products from "./components/products";
import Cart from "./components/cart"
import NavBar from './components/navBar'
import Banner from './components/banner'
import FAQ from './components/faq'
// CSS
import './App.css'



export default function App() {
  const productList = [
    {
      id: 1,
      item: "Mares X-VU Liquidskin Scuba Diving Mask",
      price: 80,
      desc: "Maintains a great seal and comfortable feel!",
      imageSrc: maskImg
    },
    {
      id: 2,
      item: "Cressi Foldable Adult Dry Snorkel for Scuba Diving",
      price: 40,
      desc: "Perfect for shallow dives and conserving air in your tank!",
      imageSrc: snorkelImg
    },
    {
      id: 3,
      item: "Mares Italian Designed Avanti Superchannel Full Foot Fins",
      price: 70,
      desc: "Closed around your entire foot for a snug fit and a stylish red color!",
      imageSrc: finsImg
    },
    {
      id: 4,
      item: "Oceanic Geo 4 Wrist Dive Computer",
      price: 400,
      desc: "Useful for planning and keeping track of your descents and ascents!",
      imageSrc: diveComputerImg
    },
    {
      id: 5,
      item: "Trident Underwater Writing Slate with Clip",
      price: 12,
      desc: "Draw all of the corals and critters you see!",
      imageSrc: tabletImg
    }
  ]
  
  const FAQList = [
    {
      id: 1,
      Q: "Who is Scuba Steve?",
      A: `Scuba Steve is an action figure from the comedy movie, Big Daddy, and he helps
      Julian overcome his fear of taking a bath.`,
      toggleStatus: false
    },
    {
      id: 2,
      Q: "Why are the prices nice, round whole numbers?",
      A: `Javascript has a difficult time handling 
      certain fractions because of floating point math, for example, try 0.1 + 0.2 in the console!`,
      toggleStatus: false
    },
    {
      id: 3,
      Q: "What is that awesome background color?",
      A: `It's called aqua and it helped me decide on my entire website layout because it reminded
      me of the ocean.`,
      toggleStatus: false
    },
    {
      id: 4,
      Q: "What is a dive computer?",
      A: `A dive computer takes depth and time information and applies it to a decompression model 
      to track the dissolved nitrogen in your body during a dive. Your computer 
      continuously tells you how much dive time you safely have remaining.`,
      toggleStatus: false
    }
  ]

  const [randomImg, setRandomImg] = useState([]);
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState(productList)
  const [searchQuery, setSearchQuery] = useState('')
  const [totalCost, setTotalCost] = useState(0)
  const [toggleHistory, setToggleHistory] = useState(Array(4).fill(false))

  const getImg = (key, query) => {
    axios.get(`https://api.unsplash.com/photos/random/?client_id=${key}&${query}`)
        .then(response => {
            setRandomImg(response.data.urls.small);
        })
}

const addToCart = cartItem => { 
  setCart([...cart, cartItem])
  let newTotal = totalCost
  setTotalCost(newTotal += cartItem.price)
}

const purchaseCart = () => {
  const isPurchased = window.confirm(`Are you sure you want to purchase ${cart.length} items at a price of $ ${totalCost}?`)
  if (isPurchased) {
    window.alert('You have bought your cart items!')
  }
}

const updateToggleHistory = id => {
 const newToggleHistory = toggleHistory.map((status, idx) => {
   if (idx === id - 1) {
     return !status
   }
   return status
 })
 setToggleHistory(newToggleHistory)
}

 const updateSearchQuery = searchQuery => {
      const filtered = products.filter(product => {
       return product.item.toLowerCase().includes(searchQuery.toLowerCase())
  })
      setSearchQuery(searchQuery);
      setProducts(filtered);
   }

  const resetProducts = () => {
    setProducts(productList)
    setSearchQuery('')
  } 

  return (
    
    <Router>
      <div>
        <NavBar  cart={cart}/>

        <Switch>
          <Route path="/products">
            <Products products={products} resetProducts={resetProducts}
            addToCart={addToCart} searchQuery={searchQuery} updateSearchQuery={updateSearchQuery}/>
          </Route>
          <Route path="/cart">
            <Cart cart={cart} totalCost={totalCost} purchaseCart={purchaseCart} />
          </Route>
          <Route path="/faq">
            <FAQ FAQList={FAQList} updateToggleHistory={updateToggleHistory} toggleHistory={toggleHistory}/>
          </Route>
          <Route path="/">
            <Home image={randomImg} getImg={getImg} steve={steve} />
          </Route>
        </Switch>
        <Banner waves={waves} />
      </div>
    </Router>
   
  );
}


