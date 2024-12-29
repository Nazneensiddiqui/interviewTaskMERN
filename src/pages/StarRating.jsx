import { useState } from "react";



const StarRating=()=>{
    const[rating , setRating]=useState(0)
    const[hover, setHover]=useState(0);
    return(
        <>
       <center>
       <h2>This is My Star Rating Component Page</h2>
       <div style={{textAlign:"center" , marginTop:"50px"}}>
        {[1,2,3,4,5,6,7,8,9,10].map((star)=>(
            <span
            onClick={()=>{setRating(star)}}
            onMouseEnter={()=>{setHover(star)}}
            onMouseLeave={()=>{setHover(0)}}
            style={{
                fontSize:"40px",
                color: star <= (hover || rating) ? "gold" : "gray",
                cursor:"pointer"
            }}
            >&#9733;</span>
        ))}
  <p>Star Rating : {rating} {rating > 0 ? "stars" : ""}</p>
       </div>
        </center> 
        </>
    )
}
export default StarRating;