import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BgclrChange } from "../Slices/Bgcolor";


const ThemeChange=()=>{
    const[input ,setInput]=useState("")
    const clr=useSelector((state)=>state.Bgcolor.bgclr)
    const dispatch=useDispatch()
    return(
        <>
       <center>
       <h2>This is My Theme Change Page</h2>
       Enter Color Name : <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
       <button onClick={()=>{dispatch(BgclrChange(input))}}>changeColor</button>
       <br/><br/>
       <div style={{width:"500px", height:"300px", border:"1px solid red",backgroundColor: clr }}></div>
        </center> 
        </>
    )
}
export default ThemeChange;