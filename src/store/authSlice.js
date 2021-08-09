import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLogin: false,
  accessToken: '',
  userProfile: {}
}

const authSlice = createSlice({
  name: 'User Authentication',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLogin = true
      state.accessToken = action.payload
    },
    storeUser: (state, action) => {
      state.userProfile = action.payload
    },
    logout: () => initialState
  },
})

export const { login, logout, storeUser } = authSlice.actions

export default authSlice.reducer