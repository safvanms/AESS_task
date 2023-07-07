import React from 'react'
import './Progressbar.css'
import IMG from '../../assets/1.png'

const progressData = [
  {
    name: 'Assets',
    color: '#5BC4BF',
    progress: '45%',
  },
  {
    name: 'Access',
    color: '#F7941D',
    progress: '10%',
  },
  {
    name: 'Incidents',
    color: '#DA5DB6',
    progress: '20%',
  },
  {
    name: 'Change',
    color: '#77A2C7',
    progress: '5%',
  },
  {
    name: 'Service',
    color: '#0DB53C',
    progress: '10%',
  },
]

export default function Progressbar1() {
  return (
    <div className="progress-field">
      <div className="progress-header">
        <span>Top 5 Request Categories</span>
        <span className="progress-hr"></span>
      </div>
      <div className="progress-container">
        <img src={IMG} alt="progress" />
          <div className="progress-details">
        {progressData.map(({ name, color, progress }) => (
            <>
              <div className="progress-name" key={name}>
                <div
                  className="circle"
                  style={{ backgroundColor: color }}
                ></div>
                <span>{name}</span>
              </div>
              <div className="progress-percentage" style={{ color: color }}>
                {progress}
              </div>
            </>
        ))}
        </div>
      </div>
    </div>
  )
}
