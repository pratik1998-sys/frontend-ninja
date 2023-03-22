import { useSelector } from 'react-redux'
import './home.scss'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import StarWrapper from '../../hoc/SectionWrapper'
import { textVariant } from '../../utils/motion'
import VerticalTimelineComponent from '../VerticalTimelineComponent/VerticalTimelineComponent'
import { Model } from '../index'
import { useState } from 'react'

const Home = () => {
  const { content } = useSelector((state) => state.content)
  const { showModel } = useSelector((state) => state.content)

  if (showModel)
    return (
      <div className='home'>
        <Model />
      </div>
    )

  return (
    <div className='home'>
      <motion.div variants={textVariant(0.5)} className='home_heading'>
        <h2>Start you journey to frontend Development</h2>
      </motion.div>
      <div className='home_content'>
        <VerticalTimeline animate={true}>
          <VerticalTimelineComponent
            videos={content.filter((item) => item._type === 'htmlVideos')}
            type={'HTML'}
          />
          <VerticalTimelineComponent
            videos={content?.filter((item) => item._type === 'cssVideos')}
            type={'CSS'}
          />
          <VerticalTimelineComponent
            videos={content?.filter((item) => item._type === 'jsVideos')}
            type={'JavaScript'}
          />
          <VerticalTimelineComponent
            videos={content?.filter((item) => item._type === 'reactVideos')}
            type={'React'}
          />
          <VerticalTimelineComponent
            videos={content?.filter((item) => item._type === 'gitVideos')}
            type={'Git'}
          />
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default StarWrapper(Home)
