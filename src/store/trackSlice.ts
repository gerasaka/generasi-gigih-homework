import { createSlice } from '@reduxjs/toolkit'

type InitialState = {
  tracks: string[],
  selectedTracks: string[],
  playlist: {
    name: string,
    description: string,
    public: boolean,
    collaborative: boolean,
  }
}

const initialState: InitialState = {
  tracks: [],
  selectedTracks: [],
  playlist: {
    name: "",
    description: "",
    public: false,
    collaborative: false,
  }
}

const trackSlice = createSlice({
  name: 'Track Network Call',
  initialState,
  reducers: {
    getTracks: (state, action) => {
      state.tracks = action.payload
    },
    storeSelectedTrack: (state, action) => {
      state.selectedTracks = action.payload
    },
    create: (state, action) => {
      state.playlist = action.payload
    }
  },
})

export const { getTracks, storeSelectedTrack, create } = trackSlice.actions

export default trackSlice.reducer