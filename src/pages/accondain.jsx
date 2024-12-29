import { useState } from "react"



const Accordain=()=>{
const[activeIndex , setActiveIndex]=useState(null)

const toggleAccordain=(index)=>{
    setActiveIndex(activeIndex===index ? null : index)
}


    const Mydata=[
        {titel:"what is React ?" , content:"React is a JavaScript Library for bilding User Inertface"},
        {titel:"why use React ?" , content: "React is flexible, efficient, and allows you to create reusable components.",},
        {titel:"How does React work ?" , content: "React creates a virtual DOM, calculates changes, and updates the real DOM efficiently."},
    ]


    return(
        <>
   <div style={{width:"50%", margin:"10px auto"}}>
    <h1>Accordain component</h1>
    {Mydata.map((item , index)=>(
    <div style={{marginBottom:"10px"}}>
        <div onClick={()=>{toggleAccordain(index)}}
            style={{cursor:"pointer",
                padding:"10px",
                backgroundColor:"orangered",
                border:"1px solid orangered",
                borderRadius:"5px"
            }}
            >
            {item.titel}
        </div>
        {activeIndex ===index && <div style={{  padding:"10px",
                backgroundColor:"orangered",
                border:"1px solid orangered",
                borderRadius:"5px"}}>{item.content}</div>}
    </div>
    ))}
   </div>

        </>
    )
}
export default Accordain;