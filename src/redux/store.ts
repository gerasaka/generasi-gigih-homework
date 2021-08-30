import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import authSlice from './authSlice';
import trackSlice from './trackSlice';
import playlistSlice from './playlistSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    track: trackSlice,
    playlist: playlistSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store;