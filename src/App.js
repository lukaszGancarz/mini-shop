import React, { useEffect, useState } from "react";
import shortId from "short-id";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Navi from "./UI/Navi";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Login from "./components/loggingIn/Login";
import LoggedOut from "./components/loggedOut/LoggedOut";
import Products from "./components/products/Products";
import skarpeta from "./images/skarpeta.jpg";
import sernik from "./images/sernik.jpg";
import Cart from "./components/cart/Cart";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [products, setProducts] = useState([
    {
      id: shortId.generate(),
      title: "Skarpeta",
      price: 10.5,
      description: "Świeża, nie noszona",
      photo: skarpeta,
    },
    {
      id: shortId.generate(),
      title: "Kawałek sernika",
      price: 5.99,
      description:
        "Mało używany. Bardzo dobre dla każdego kto lubi smacznie zjeść",
      photo: sernik,
    },
  ]);

  const [cart, setCart] = useState([]);

  const addItemToCart = (item, count, setCount) => {
    const foundedProduct = cart.find(
      (foundedItem) => foundedItem.id === item.id
    );

    if (!foundedProduct) {
      setCart([
        ...cart,
        {
          ...item,
          count,
        },
      ]);
      return;
    }

    foundedProduct.count += count;
    setCart([...cart.filter((x) => x.id !== item.id), foundedProduct]);
    setCount(1);
  };

  const deleteFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    return;
  };

  useEffect(() => console.log(cart), [cart]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user, "useffect");
    user && setIsLoggedIn(true);
  }, [isUser]);

  return (
    <>
      <Router>
        <Navi
          loggedIn={isLoggedIn}
          setLoggedIn={setIsLoggedIn}
          isUser={setIsUser}
        />
        <Switch>
          <Route path="/login">
            {!isLoggedIn ? (
              <Login isUser={setIsUser} />
            ) : (
              <Redirect to="/home" />
            )}
          </Route>
          <Route path="/products">
            <Products items={products} addToCart={addItemToCart} />
          </Route>
          {isLoggedIn && (
            <Route path="/cart">
              <Cart items={cart} deleteFromCart={deleteFromCart} />
            </Route>
          )}
          <Route path="/loggedOut">
            <LoggedOut />
          </Route>
          <Route path="/">
            <Home loggedIn={isLoggedIn} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
