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
import diveComputer from './images/diveComputer.jpg'
import mask from './images/mask.jpg'
import snorkel from './images/snorkel.jpg'
import tablet from './images/tablet.jpg'
import fins from './images/fins.jpg'
// components
import Home from "./components/home"
import Products from "./components/products";
// CSS
import './App.css'



export default function App() {
  const [randomImg, setRandomImg] = useState([]);

  const getImg = (key, query) => {
    axios.get(`https://api.unsplash.com/photos/random/?client_id=${key}&${query}`)
        .then(response => {
            setRandomImg(response.data.urls.small);
        })
}

// const clearState = () => {
//   setRandomImg([]);
// }

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
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/products">
            <Products diveComputer={diveComputer} mask={mask} fins={fins} snorkel={snorkel} tablet={tablet} />
          </Route>
          <Route path="/">
            <Home image={randomImg} getImg={getImg} steve={steve} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


