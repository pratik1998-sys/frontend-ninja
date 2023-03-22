import React, { useState, useEffect } from 'react'
import './navbar.scss'
import { Progress } from '../index'
import ninjaLogo from '../../assets/ninjaLogo.png'
import PersonIcon from '@mui/icons-material/Person'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { calculateProgress } from '../../features/videoSlice'

const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { progress } = useSelector((state) => state.content)

  useEffect(() => {
    const myContent = JSON.parse(localStorage.getItem('completedTopics'))
    dispatch(calculateProgress(myContent?.length))
  }, [progress])

  return (
    <div className='navbar'>
      <div className='navbar_container'>
        <div className='navbar_logo'>
          <img
            src={ninjaLogo}
            alt='navbar logo'
            onClick={() => navigate('/')}
          />
          <h2 className='navbar_heading' onClick={() => navigate('/')}>
            Frontend Ninja
          </h2>
        </div>
        <div className='navbar_progress_bar'>
          <h4>Your Progress</h4>
          <Progress bgcolor='#09ae00' completed={progress || 0} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
