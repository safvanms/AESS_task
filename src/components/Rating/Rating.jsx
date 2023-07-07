import React from 'react'
import './Rating.css'
import {BsFillStarFill, BsStarFill} from 'react-icons/bs'

export default function Rating({rating}) {
     const maxRating = 5; 

     const isStarFilled = (index) => {
       return index < rating; 
     };
   
     return (
          <div className="rating-star" >
          {Array.from({ length: maxRating }, (_,index) => (
            <span key={index} className="star" >
              {isStarFilled(index) ? (
                <BsFillStarFill color="#F7941D" style={{ fontSize: '40px' }}/>
              ) : (
                <BsStarFill color="#aaaa" style={{ fontSize: '40px' }}/>
              )}
            </span>
          ))}
        </div>
     );
}
