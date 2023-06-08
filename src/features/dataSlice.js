import { createSlice } from "@reduxjs/toolkit";

const getApiUrl = (artId) =>
  `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`;

const initialState = {
  artId: 10205,
  apiData: {},
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    //Setting API data to state
    loadData: (state, { payLoad }) => {
      state.apiData = payLoad;
    },
    //Incrementing the ID by one
    nextImage: (state) => {
      state.artId++;
    },
    prevImage: (state) => {
      state.artId--;
    },
    setArtId: (state, { payLoad }) => {
      state.artId = payLoad;
    },
    reset: () => {
      return initialState;
    },
  },
});

export const { loadData, nextImage, prevImage, setArtId, reset } =
  dataSlice.actions;

export default dataSlice.reducer;
