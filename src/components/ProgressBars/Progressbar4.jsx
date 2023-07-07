import React from 'react'
import './Progressbar.css'
import IMG from '../../assets/3.png'

const progressData = [
  {
    name: 'New Laptop',
    color: '#F7941D',
    progress: '35%',
  },
  {
    name: 'New Desktop',
    color: '#8A88ED',
    progress: '15%',
  },
  {
    name: 'New SIM',
    color: '#DE64A1',
    progress: '20%',
  },
  {
    name: 'Air pod',
    color: '#0DB53C',
    progress: '50%',
  },
  {
    name: 'Smartphone',
    color: '#5BC4BF',
    progress: '65%',
  },
]

export default function Progressbar4() {
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
