import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import { Link } from 'react-router-dom'
import { SingleTopic } from '../index'

const VerticalTimelineComponent = ({ videos, stat, type }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      iconStyle={{ background: '#fff' }}
      contentArrowStyle={{ display: 'none' }}
      icon={
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <img
            src='https://cdn-icons-png.flaticon.com/512/732/732212.png'
            alt='html icon'
            style={{ width: '60%', height: '60%', objectFit: 'contain' }}
          />
        </div>
      }
    >
      <div>
        <h3
          className='timeline_heading'
          style={{ color: '#fff', fontSize: '24px', fontWeight: '600' }}
        >
          {type}
        </h3>
        <ul className='timeline_elements' style={{ paddingLeft: '15px' }}>
          {videos?.map((video, index) => {
            return (
              <div key={video._id}>
                <SingleTopic id={video._id} video={video} />
              </div>
            )
          })}
        </ul>
        <Link to='/quiz/html'>
          <p>{type} Quiz</p>
        </Link>
      </div>
    </VerticalTimelineElement>
  )
}

export default VerticalTimelineComponent
