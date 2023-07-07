import React from 'react'
import './Progressbar.css'
import IMG from '../../assets/3.png'

const progressData = [
  {
    name: 'Email not working',
    color: '#FB7158',
    progress: '45%',
  },
  {
    name: 'Internet is Slow',
    color: '#5BC4BF',
    progress: '45%',
  },
  {
    name: 'Laptop is Slow',
    color: '#8A88ED',
    progress: '45%',
  },
  {
    name: 'System is not Working',
    color: '#DE64A1',
    progress: '45%',
  },
  {
    name: 'Email out of Quota',
    color: '#77A2C7',
    progress: '45%',
  },
]

export default function Progressbar3() {
  return (
    <div className="progress-field">
      <div className="progress-header">
        <span>Top 5 Incident Requests</span>
        <span className="progress-hr"></span>
      </div>
      <div className="progress-container">
        <img src={IMG} alt="progress" />
          <div className="progress-details">
        {progressData.map(({ name, color, progress }) => (
            <>
              <div className="progress-name" key={name} >
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
