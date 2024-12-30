import { useState } from "react";





const Revision=()=>{
    const[bgcolor , setBgcolor]=useState("#ffffff")

    const changeColor=()=>{
setBgcolor(`#${Math.floor(Math.random()*16777215).toString(16)}`)
    }


    return(
        <>
    <div style={{width:"100%",height:"500px", border:"1px solid", backgroundColor:bgcolor}}>
        <button onClick={changeColor}
       style={{border:"none", fontSize:"16px", padding:"10px"}}
        >RandomColor</button>
    </div>
        </>
    )
}
export default Revision;