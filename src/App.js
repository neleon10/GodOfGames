import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Videogames from "./components/Videogames/Videogames"
import Landing  from "./components/Landing/Landing"
import VideoGameByName from "./components/VideogameByname/VideoGameByName";
import CreateVideoGame from "./components/CreateVideoGame/CreateVideoGame";
import VideogameByGenre from "./components/VideogameByGenre/VideogameByGenre";
import SmartDetail from "./components/VideogameDetail/SmartDetail";
import Successfully from "./components/Successfully/Successfully"
import VideoGameCreatedOriginal from "./components/VideoGameCreatedOriginal/VideoGameCreatedOriginal";
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Landing />}/> 
          <Route path="/videogames" element={<Videogames />} />
          <Route path="/videogames/:id" element={<SmartDetail />} />
          <Route path = "/videogames/query" element={<VideoGameByName/>}/>
          <Route path = "/videogames/create" element={<CreateVideoGame/>}/> 
          <Route path = "/videogames/genre" element={<VideogameByGenre/>}/> 
          <Route path = "/videogames/success" element={<Successfully/>}/>  
          <Route path = "/videogames/createdOriginal"  element={<VideoGameCreatedOriginal/>}/>        
        </Routes>
    </div>
  );
}


export default App;
