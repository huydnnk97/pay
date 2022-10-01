import React from "react";
import './App.css'
import Homepage from "./Homepage";
import {Routes, Route} from 'react-router-dom'
import  Checkbox  from "./Checkbox"
import ListFiles from "./ListFiles";
import Question from "./Question";
import Posts from "./Posts";
import Pay from "./Pay";
function App(){
    return(
        <Routes>
            <Route path="/" element={<Homepage/>}>
            <Route path="/add" element={<Checkbox/>}></Route>
            <Route path="/questions" element={<ListFiles/>}/>
            <Route path="/posts" element={<Posts/>}></Route>\
            <Route path="/pay" element={<Pay/>}></Route>
            </Route>
            <Route path="/questions/:id" element={<Question></Question>}></Route>
        </Routes>
    )
}
export default App;