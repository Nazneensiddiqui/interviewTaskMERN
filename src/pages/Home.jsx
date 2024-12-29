import { useDispatch, useSelector } from "react-redux";
import { Decrement, Increment } from "../Slices/counter";
import { useState } from "react";



const Home=()=>{
    const[color , setColor]=useState("black")
 const count=useSelector((state)=>state.myCounter.cnt)   
  const dispatch=useDispatch() 
    return(
        <>
   <h1>My Counter App</h1>
   <button onClick={()=>{dispatch(Increment())}}>Increment</button>
   <h2>{count}</h2>
   <button onClick={()=>{dispatch(Decrement())}}>Decrement</button><br/><br/>

   <div style={{width:"500px" , height:"300px", border:"1px solid red", backgroundColor:color}}>
     
   </div>
   <br/>
   <button onClick={()=>{setColor("orange")}}>orange</button>
   <button onClick={()=>{setColor("yellow")}}>yellow</button>
   <button onClick={()=>{setColor("red")}}>red</button>
   <button onClick={()=>{setColor("blue")}}>blue</button>
   <button onClick={()=>{setColor("green")}}>green</button>
   <button onClick={()=>{setColor("pink")}}>pink</button>
   <button onClick={()=>{setColor("white")}}>white</button>
        </>
    )
}
export default Home;