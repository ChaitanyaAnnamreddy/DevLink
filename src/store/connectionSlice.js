import { createSlice } from '@reduxjs/toolkit'

const connectionSlice = createSlice({
  name: 'connection',
  initialState: {
    connections: [],
  },
  reducers: {
    addConnections: (state, action) => {
      state.connections = action.payload
    },
  },
})

export const { addConnections } = connectionSlice.actions
export default connectionSlice.reducer
