import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
  calculateProgress,
  setFirst,
  setModel,
  setCurrentTopic,
} from '../../features/videoSlice'

const SingleTopic = ({ id, video }) => {
  const myContent = JSON.parse(localStorage.getItem('completedTopics'))
  const dispatch = useDispatch()
  const [currentStatus, setCurrentStatus] = useState(
    myContent?.filter((item) => item.id === id)[0]?.watched
  )

  const setTopic = (id) => {
    if (myContent) {
      let newArray = myContent
      let found = false
      newArray = newArray.map((item) => {
        if (item.id === id) {
          found = true
        }
        return item
      })
      if (!found) {
        setCurrentStatus(true)
        newArray = [...newArray, { id: id, watched: true }]
      }
      dispatch(setCurrentTopic(video.topic))
      dispatch(setModel(true))
      dispatch(calculateProgress(newArray.length))
      localStorage.setItem('completedTopics', JSON.stringify([...newArray]))
    } else {
      dispatch(setCurrentTopic(video.topic))
      dispatch(setModel(true))
      setCurrentStatus(true)
      dispatch(setFirst(id))
      dispatch(calculateProgress(1))
    }
  }

  return (
    <div>
      <form
        action=''
        style={{
          color: '#fff',
          fontSize: '14px',
          paddingLeft: '5px',
          marginTop: '1rem',
        }}
      >
        <input
          type='checkbox'
          name=''
          checked={currentStatus || false}
          id={id}
          onChange={(e) => {
            if (e.target.checked) {
              setTopic(id)
            }
          }}
        />
        <label htmlFor='radio' style={{ marginLeft: '10px' }}>
          <strong>{video.topic}</strong>
        </label>
      </form>
      <ul style={{ marginLeft: '30px' }}>
        <li>
          <Link to={video.link} style={{ textDecoration: 'none' }}>
            Reference Video
          </Link>
        </li>
        <li>
          <Link to={video.link} style={{ textDecoration: 'none' }}>
            Reference Document
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SingleTopic
