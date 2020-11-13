import React, {useState} from "react";
import axios from "axios"
import steve from './images/scuba-steve.jpg'
import Home from "./components/home"
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Products from "./components/products";

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
            <Products />
          </Route>
          <Route path="/">
            <Home image={randomImg} getImg={getImg} steve={steve} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


