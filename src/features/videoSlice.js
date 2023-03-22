import { createSlice } from '@reduxjs/toolkit'
import { content } from '../assets/data'

const initialState = {
  content: content.videos.videos,
  progress: 0,
  totalTopic: content.videos.videos.length,
  showModel: false,
  currentTopic: '',
}

export const videoSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    setCurrentTopic: (state, action) => {
      state.currentTopic = action.payload
    },
    setModel: (state, action) => {
      state.showModel = action.payload
    },
    calculateProgress: (state, action) => {
      state.progress = Math.floor((action.payload / state.totalTopic) * 100)
    },
    setFirst: (state, action) => {
      localStorage.setItem(
        'completedTopics',
        JSON.stringify([{ id: action.payload, watched: true }])
      )
    },
  },
})

// Action creators are generated for each case reducer function
export const { setFirst, calculateProgress, setModel, setCurrentTopic } =
  videoSlice.actions
export default videoSlice.reducer
