import React from 'react'

const Progress = (props) => {
  const { bgcolor, completed } = props

  return (
    <div
      className='progressBar'
      style={{
        height: 20,
        width: '100%',
        backgroundColor: '#e0e0de',
        borderRadius: 50,
        margin: 20,
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${completed}%`,
          backgroundColor: `${bgcolor}`,
          borderRadius: 'inherit',
          textAlign: 'right',
        }}
      >
        <span
          style={{
            width: `${completed}`,
            padding: '4px 5px',
            color: '#fff',
            fontWeight: 'bold',
          }}
        />
      </div>
    </div>
  )
}

export default Progress
