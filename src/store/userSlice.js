import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload
    },
    removeUser: (state) => {
      state.user = null
    },
    updateUser: (state, action) => {
      state.user = action.payload
    },
  },
})

export default userSlice.reducer
export const { addUser, removeUser, updateUser } = userSlice.actions
