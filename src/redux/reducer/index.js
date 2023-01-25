import handleCart from "./handleCart";
import  './authSlice';
import {combineReducers} from "redux";
import authReducer from "./authSlice";
const rootReducers=combineReducers({
     handleCart,
    auth:authReducer
})
export default rootReducers;