import { createSlice } from '@reduxjs/toolkit'
import { content } from '../assets/data'

const initialState = {
  content: content.videos.videos,
  progress: 0,
  totalTopic: content.videos.videos.length,
}

export const videoSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
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
export const { setFirst, calculateProgress } = videoSlice.actions
export default videoSlice.reducer
