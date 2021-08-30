import { createSlice } from "@reduxjs/toolkit";

type StateType = {
  playlists: object
}

const initialState: StateType = {
  playlists: {}
};

export const playlistSlice = createSlice({
  name: "Get user playlist",
  initialState,
  reducers: {
    getPlaylists: (state, action) => {
      state.playlists = action.payload;
    },
  },
});

export const { getPlaylists } = playlistSlice.actions;
export default playlistSlice.reducer;
