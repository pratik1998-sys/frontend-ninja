import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setModel, setCurrentTopic } from '../../features/videoSlice'
import './model.scss'

const Model = () => {
  const { currentTopic } = useSelector((state) => state.content)
  const dispatch = useDispatch()
  useEffect(() => {
    setTimeout(() => {
      dispatch(setCurrentTopic(''))
      dispatch(setModel(false))
    }, 2000)
  })
  return (
    <div className='model'>
      <div className='model_container'>
        <div className='context'>
          <h1>
            Congratulation you have successfully completed the topic{' '}
            <span>{currentTopic}</span>
          </h1>
        </div>
        <div className='area'>
          <ul className='circles'>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Model
