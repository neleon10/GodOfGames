import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllVideogames,getAllGenres,loader } from "../../actions/actions";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import VideoGameCard from "../VideoGameCard/VideoGameCard";
import Pagination from "../Pagination/Pagination";
import "../Videogames/videogames.css"; 
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Rings } from  'react-loader-spinner';

function Videogames() {
  const dispatch = useDispatch();
  const videogames = useSelector((state) => state.videoGames);
  const gameCreated = useSelector((state)=> state.videoGameCreated);
  const loaderVideogames = useSelector((state)=> state.loadingVideogames)//loader
  const [currentPage, setCurrentPage] = useState(1);
  const [videoGamePerPage] = useState(15);
  
  

  

let idNewGame = gameCreated.id
useEffect(() => {
  
  if(videogames.length <= 0){
    dispatch(loader(true))
    dispatch(getAllVideogames())   
  }else{
    if(gameCreated === {}){
      dispatch(loader(true))
      dispatch(getAllVideogames()) 
    }else{
      if(gameCreated.id !== idNewGame){
        idNewGame = gameCreated.id
        dispatch(loader(true))
        dispatch(getAllVideogames())

      }
    }
  }
  
}, []);


 

  
 //pagination variables
  const end = currentPage * videoGamePerPage; // 15 -- 30 etc
  const start = end - videoGamePerPage; // 15 - 15 == 0 -- 15 etc
  const currentVideoGame = videogames.slice (start,end);

  //change page pagination
  function changePage (e,pageNumber) {
    e.preventDefault()
    setCurrentPage(pageNumber)
  }


  return (
         
      <div className="videoGamesContainerMain">
        <div>
          <Nav/>
        </div>
        <div>
          <Pagination changePage={changePage} videoGamePerPage={videoGamePerPage} videogames={videogames.length} />
        </div>
        <div className="cardsMainContainer">
          { loaderVideogames ? 
          <Rings 
            color="#1aff1a" 
            height={300} 
            width={300} 
          />
               :
          currentVideoGame.map((game) => (
            <VideoGameCard
              key={game.id}
              id={game.id}
              image={game.image}
              name={game.name}
              genres={game.genres}
            />
          ))
            }
        </div>
        <div>
          <Pagination changePage={changePage} videoGamePerPage={videoGamePerPage} videogames={videogames.length} />
        </div>  
        <div>
          <Footer />
        </div>
      </div>
          
  );
}

export default Videogames;
