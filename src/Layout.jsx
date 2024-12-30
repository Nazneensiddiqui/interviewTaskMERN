import { Link, Outlet } from "react-router-dom";

const Layout=()=>{
    return(
        <>
       <Link to="Home">Home</Link>     || 
       <Link to="random">Random-Color</Link>     || 
       <Link to="star">Star-Rating</Link>     || 
       <Link to="todo">Todo App</Link>     || 
       <Link to="theme">Theam-Change</Link>     || 
       <Link to="slider">Image-Slider</Link>     || 
       <Link to="accordian">Accordain-Component</Link>     || 
       <Link to="revision">Revision</Link>     || 
       <hr color="red"/>
       <Outlet/>
       <hr color="red"/>
        </>
    )
}
export default Layout;