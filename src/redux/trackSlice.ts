import { createSlice } from '@reduxjs/toolkit'

type TrackType = {
  id: string,
  album: any,
  name: string,
  artists: any,
  uri: string
}

type ListType = {
  uri: string,
  title: string,
  artists: string
}

type StateType = {
  tracks: TrackType[],
  selectedTracks: ListType[],
  playlist: {
    name: string,
    description: string,
    public: boolean,
    collaborative: boolean,
  }
}

const initialState: StateType = {
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