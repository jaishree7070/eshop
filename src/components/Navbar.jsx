import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import CartBtn from "./buttons/CartBtn";
import Login from "./buttons/Login";
import SignUp from "./buttons/SignUp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import {
  SET_ACTIVE_USER,
  REMOVE_ACTIVE_USER,
} from "../redux/reducer/authSlice";
import ShowWhenLoggedIn from "./ShowWhenLoggedIn";
import ShowWhenNotLoggedIn from "./ShowWhenNotLoggedIn";
const Navbar = (props) => {
  const [uName, setName] = useState("");
  const dispatch = useDispatch();
  const logoutHandler = (e) => {
    signOut(auth)
      .then(() => {
        toast.success("LogedOut successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        const x = user.email.slice(0, user.email.indexOf("@"));
        const u = x.charAt(0).toLocaleUpperCase() + x.slice(1);
        setName(u);
        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userId: user.uid,
            userName: u,
          })
        );
      } else {
        setName("");
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            E-Shopping
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <button type="button" class="btn">
              <i class="fa-light fa-user-alien">Hi! {props.name} </i>
              {/* Hy {uName} */}
            </button>
            <div className="buttons">
              <ShowWhenNotLoggedIn>
                <Login />
              </ShowWhenNotLoggedIn>
              <SignUp />
              <CartBtn />
              <ShowWhenLoggedIn>
                <button
                  className="btn btn-outline-dark ms-2"
                  onClick={logoutHandler}
                >
                  <i className="fa fa-sign-in me-1"></i>
                  LogOut
                </button>
              </ShowWhenLoggedIn>
            </div>
          </div>
        </div>
      </nav>
      <ToastContainer />
    </>
  );
};

export default Navbar;
