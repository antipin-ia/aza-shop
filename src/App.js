import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.scss"
import Home from "./components/Elements/Pages/Home";
import News from "./components/Elements/Pages/News";
import Header from "./components/Elements/Header/Header";
function App() {
  return (
   <>
      <Routes>
        <Route path="/"  element ={<Header/>}>
          <Route index  element ={<Home/>}></Route>
          <Route path="/news" element ={<News/>}></Route>
        </Route>  
      </Routes>
   </>
  );
}

export default App;
