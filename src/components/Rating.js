import React from 'react'
import { AiFillStar } from "react-icons/ai"
import { FcRating } from "react-icons/fc"


const Rating = ({rating, onClick, style}) => {
  return (
    <div>
        {
            [...Array(5)].map((_, i)=>(
                <span key={i} onClick={()=> onClick(i)} style={style} > 
                     { rating > i ?  (
                   < FcRating fontSize="15px" /> 
                     ) :(
                       <AiFillStar fontSize="15px" />
                     )}
                </span>
            ))
        }
    </div>
  )
}

export default Rating