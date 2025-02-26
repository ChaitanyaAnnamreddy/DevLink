import { createSlice } from '@reduxjs/toolkit'

const requestsSlice = createSlice({
  name: 'requests',
  initialState: {
    requests: [],
  },
  reducers: {
    addRequests: (state, action) => {
      state.requests = action.payload.data || []
    },
    removeRequests: (state, action) => {
      state.requests = state.requests.filter(
        (request) => request._id !== action.payload
      )
    },
  },
})

export default requestsSlice.reducer
export const { addRequests, removeRequests } = requestsSlice.actions
