import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const CartBtn = () => {
  const state=useSelector((state)=>state.handleCart)
  return (
    <>
      <NavLink to="/cart" className="btn btn-outline-dark ms-2">
        <i className="fa fa-shopping-cart me-1"></i>Cart({state.length})
      </NavLink>
    </>
  );
};

export default CartBtn;
