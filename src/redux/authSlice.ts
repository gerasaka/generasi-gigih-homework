import { createSlice } from '@reduxjs/toolkit'

type StateType = {
  isLogin: boolean,
  accessToken: string,
  userProfile: object
}

const initialState: StateType = {
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