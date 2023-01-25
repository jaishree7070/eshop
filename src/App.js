import './App.css';
import Cart from './components/Cart';
import About from './components/About';
import Home from './components/Home';
import Product from './components/Product';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Products from './components/Products';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from './firebase/config';
import { useState, useEffect } from "react";

function App() {
  function GetCurrentUser() {
    const [user, setUser] = useState("");
    useEffect(() => {
      auth.onAuthStateChanged((userLogged) => {
        if (userLogged) {
          const getUser = async () => {
            const q = query(
              collection(db, "users"),
              where("uid", "==", userLogged.uid)
            );
            const data = await getDocs(q);
            setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
          };
          getUser();
        } else setUser(null);
      });
    }, []);
    return user;
  }
  const loggedUser = GetCurrentUser();
  console.log(loggedUser)
  let uname,num;
  if (loggedUser) {
    console.log(loggedUser[0].userName);
    uname = loggedUser[0].userName;
    num = loggedUser[0].cart.length;
  }
  else {
    uname = "Please Login";
    num=0;
  }
  return (
    <BrowserRouter>
      <Navbar name={uname} />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/products' element={<Products />} />
        <Route exact path='/products/:id' element={<Product />} />
        <Route exact path='/cart' element={<Cart  />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
