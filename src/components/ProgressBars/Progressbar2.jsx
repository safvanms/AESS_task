import React from 'react'
import './Progressbar.css'
import IMG from '../../assets/2.png'

const progressData = [
  {
    name: 'Backup',
    color: '#8A88ED',
    progress: '35%',
  },
  {
    name: 'Laptop',
    color: '#F7941D',
    progress: '15%',
  },
  {
    name: 'MobileSIm',
    color: '#A0A0CB',
    progress: '20%',
  },
  {
    name: 'Email',
    color: '#5BC4BF',
    progress: '10%',
  },
  {
    name: 'Internet',
    color: '#B69FB3',
    progress: '20%',
  },
]

export default function Progressbar2() {
  return (
    <div className="progress-field">
      <div className="progress-header">
        <span>Top 5 Service Categories</span>
        <span className="progress-hr"></span>
      </div>
      <div className="progress-container">
        <div style={{position:"relative"}}>
          <img src={IMG} alt="progress" />
          <div className='progress-2-total'>
            <p style={{margin:0}}>Total</p>
            <p >100%</p>
          </div>
        </div>

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
