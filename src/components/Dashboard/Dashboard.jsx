import React, { useState } from 'react'
import './dashboard.css'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import Progressbar1 from '../ProgressBars/Progressbar1'
import Progressbar2 from '../ProgressBars/Progressbar2'
import Progressbar3 from '../ProgressBars/Progressbar3'
import Progressbar4 from '../ProgressBars/Progressbar4'
import ReviewBar from '../ProgressBars/ReviewBar'

export default function Dashboard() {
  const [requests, setRequests] = useState('20/05/2023 and 20/06/2023')
  const handleOptions = (e) => {
    setRequests(e.target.value)
  }

  return (
    <>
      <Header />
      <div className="dashboard">
        <Sidebar />
        <div className="dashboard-container">
          <div className="dashboard-container-head">
            <h4>IT Desk</h4>
            <div className="underline"></div>
          </div>
          <div className="request-container">
            <div>Top Requests - {requests}</div>
            <div>
              <select className="select" onChange={handleOptions}>
                <option value="20/05/2023 and 20/06/2023">
                  20/05/2023 and 20/06/2023
                </option>
                <option value="20/07/2023 and 20/08/2023">
                  20/07/2023 and 20/08/2023
                </option>
                <option value="20/09/2023 and 20/10/2023">
                  20/09/2023 and 20/10/2023
                </option>
              </select>
            </div>
          </div>

          <div className="progress-section">
            <div className="progress-circles">
              <Progressbar1 />
              <Progressbar2 />
              <Progressbar3 />
              <Progressbar4 />
              <ReviewBar />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
