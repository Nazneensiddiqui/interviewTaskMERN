import { useState } from "react";



const RandomColor=()=>{
    const[bgcolor , SetBgcolor]=useState("#ffffff")

    const changeColor=()=>{
        SetBgcolor(`#${Math.floor(Math.random() * 16777215).toString(16)}`)
    }
    return(
        <>
       <center>
       <h2>This is My Random Color theme Page</h2>
       <div style={{width:"100%", height:"400px" , marginTop:"20px", backgroundColor:bgcolor}}>
        <button onClick={changeColor}
        style={{fontSize:"16px" , border:"none", backgroundColor:"white" , borderRadius:"5px" , padding:"10px 20px"}}
        >RandomColor</button>

       </div>
        </center> 
        </>
    )
}
export default RandomColor;