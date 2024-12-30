import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import RandomColor from "./pages/RandomColor";
import StarRating from "./pages/StarRating";
import ThemeChange from "./pages/ThemeChange";
import Todo from "./pages/TodoApp";
import ImageSlider from "./pages/ImageSlider";
import Accordion from "./pages/accondain";
import Revision from "./pages/Revision";


const App=()=>{
  return(
    <>
    <center>
      <h1>Interviews Task Perfomce:!!!!!!</h1>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="random" element={<RandomColor/>}/>
        <Route path="star" element={<StarRating/>}/>
        <Route path="theme" element={<ThemeChange/>}/>
        <Route path="todo" element={<Todo/>}/>
        <Route path="slider" element={<ImageSlider/>}/>
        <Route path="accordian" element={<Accordion/>}/>
        <Route path="revision" element={<Revision/>}/>
      
        </Route>
      </Routes>
      </BrowserRouter>
    </center>
    </>
  )
}
export default App;