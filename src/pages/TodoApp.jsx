import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTask, DeleteTask, EditTask,UnComplited, Complited } from "../Slices/TodoSlice";


const Todo=()=>{
    const[input , setInput]=useState("")
    const[myid, setMyid]=useState("")
    const[BtnStatus, setBtnStatus]=useState(true)
    const mywork=useSelector((state)=>state.myTodo.task)
    const dispatch=useDispatch();
   
    const handleSubmit=()=>{
        dispatch(AddTask({id:Date.now() , work:input , status:false}))
        setInput("");
    }
    const deletData=(id)=>{
          dispatch(DeleteTask(id))
    }

    const EditSubmit=()=>{
        dispatch(EditTask({id:myid , work:input}))
        setInput("")
        setBtnStatus(true)
    }

     const EditData=(id,wrk)=>{
        setInput(wrk)
        setMyid(id);
        setBtnStatus(false)
     }

const complition=(id,status)=>{
    if(status)
    {
      dispatch(UnComplited(id))
    }
    else{
        dispatch(Complited(id))
    }
}

    let sno=0;
    const ans=mywork.map((key)=>{
        sno++;
        return(
            <>
           <tr>
        <td>{sno}</td>
        <td>{key.status ? (<span style={{color:"red", textDecoration:"line-through"}}>{key.work}</span>) :
         (<span style={{color:"black", textDecoration:"none"}}>{key.work}</span>)}</td>
        <td><button onClick={()=>{complition(key.id , key.status)}}>{key.status ? "Uncomplited" : "Complited"}</button></td>
        <td><button onClick={()=>deletData(key.id)}>Delete</button></td>
        <td><button onClick={()=>EditData(key.id, key.work)}>Edit</button></td>
        </tr> 
            </>
        )
    })


    return(
        <>
       <center>
       <h2>This is My Todo app Tool@kit Page</h2>
       Enter Task Name : <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
       {BtnStatus ? (<button onClick={handleSubmit}>Add</button>):(<button onClick={EditSubmit}>EditSave</button>)}

       <br/><br/>
       <table border={2}width={700} bgcolor="pink" align="center">
        <tr>
            <th>S.No</th>
            <th>Task Name</th>
            <th>Status</th>
            <th>Delete</th>
            <th>Edit</th>
        </tr>
        {ans}
       </table>
        </center> 
        </>
    )
}
export default Todo;