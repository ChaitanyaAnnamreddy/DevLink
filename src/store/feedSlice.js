import { createSlice } from '@reduxjs/toolkit'

const feedSlice = createSlice({
  name: 'feed',
  initialState: {
    feed: [],
  },
  reducers: {
    addFeed: (state, action) => {
      state.feed = action.payload || []
    },
    removeFeed: (state, action) => {
      if (Array.isArray(state.feed.data)) {
        state.feed = {
          ...state.feed,
          data: state.feed.data.filter((item) => item._id !== action.payload),
        }
      }
    },
  },
})

export const { addFeed, removeFeed } = feedSlice.actions
export default feedSlice.reducer
