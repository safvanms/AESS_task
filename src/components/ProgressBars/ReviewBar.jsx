import React from 'react'
import './Progressbar.css'
import Rating from '../Rating/Rating'

export default function ReviewBar() {
  return (
    <div className="rating-container">
      <div className="progress-header">
        <span>Overall Ratings</span>
        <span className="progress-hr"></span>
      </div>
      <div className="progress-container">
        <div className="left-ratings">
          <div>Final Ops Rating</div>
          <div>Overall Rating: 27</div>
        </div>

        <div className="right-ratings">
          <div>ITSM Rating</div>
          <div>Overall Rating: 20</div>
        </div>
      </div>

      <div className="rating-sec">
        <div className="left-ratings-sec">
          <div>
               <div>5 Star </div>
               <Rating rating={5} />
               <div className="rating-hr"></div>
               10
          </div>
          <div>
               <div>4 Star </div>
               <Rating rating={4} />
               <div className="rating-hr"></div>
               05
          </div>
          <div>
               <div>3 Star </div>
               <Rating rating={3} />
               <div className="rating-hr"></div>
               04
          </div>
          <div>
               <div>2 Star </div>
               <Rating rating={2} />
               <div className="rating-hr"></div>
               03
          </div>
          <div>
               <div>1 Star </div>
               <Rating rating={1} />
               <div className="rating-hr"></div>
               09
          </div>
          
        </div>

{/* right section */}

        <div className="right-ratings-sec">
        <div>
               <div>5 Star </div>
               <Rating rating={5} />
               <div className="rating-hr"></div>
               10
          </div>
          <div>
               <div>4 Star </div>
               <Rating rating={4} />
               <div className="rating-hr"></div>
               16
          </div>
          <div>
               <div>3 Star </div>
               <Rating rating={3} />
               <div className="rating-hr"></div>
               04
          </div>
          <div>
               <div>2 Star </div>
               <Rating rating={2} />
               <div className="rating-hr"></div>
               03
          </div>
          <div>
               <div>1 Star </div>
               <Rating rating={1} />
               <div className="rating-hr"></div>
               09
          </div>
        </div>
      </div>
    </div>
  )
}
