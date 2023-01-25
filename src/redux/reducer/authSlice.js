import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
  email: null,
  userId: null,
  userName: null
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_ACTIVE_USER: (state, action) => {
      console.log(action.payload)
      state.isLoggedIn = true
      state.email = action.payload.email
      state.userId = action.payload.userId
      state.userName = action.payload.userName
    },
    REMOVE_ACTIVE_USER: (state, action) => {
      state.isLoggedIn = false
      state.email = null
      state.userId = null
      state.userName = null
      console.log(state.isLoggedIn)
    }

  }
});

export const { SET_ACTIVE_USER,REMOVE_ACTIVE_USER} = authSlice.actions;
export const selectLoggedIn = (state) => state.auth.isLoggedIn;
export const selectEmail = (state) => state.auth.email;
export const selectId = (state) => state.auth.userId;
export const selectName = (state) => state.auth.userName;
export default authSlice.reducer