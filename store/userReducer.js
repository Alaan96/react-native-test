import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLogged: false,
  _id: '',
  token: '',
  firstName: '',
  lastName: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, payload) => {
      state.isLogged = true,
      state._id = payload._id,
      state.token = payload.token
    },
    logout: state => {
      state.isLogged = false,
      state._id = '',
      state.token = ''
    }
  }
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer
