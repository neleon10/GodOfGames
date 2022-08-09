import React from "react";
import {  useSelector } from "react-redux";
import VideoGameCard from "../VideoGameCard/VideoGameCard";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import {TailSpin } from "react-loader-spinner";
import totis from '../../assets/totoro.gif';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import  './videoGameQuery.css'


function VideoGameByName() {
  const gamesByQuery = useSelector((state) => state.videoGamesByQuery);
  const loaderVideogames = useSelector((state)=> state.loadingVideogames)//loader
 
  
if(gamesByQuery.length === 1 ){

    return (
      
      <div className="queryConatainer">
      <div>
        <Nav />
      </div>
      
      <div className="errorContainer">

      { 
        loaderVideogames ? 
          <TailSpin 
            color="#7fff00" 
            height={300} width={300} 
          /> :
          <>
            <p className="messageError">{gamesByQuery[0].message}</p>
            <div className="totoroContainer">
              <img src={totis}/>
            </div>
          </>
      }
      </div>
      <div>
        <Footer />
      </div>
    </div>

    ) 
  }else{

  return (
    <div className="videoGamesContainerMain">
      <div>
        <Nav />
      </div>

      <div className="cardsMainContainer">

        {loaderVideogames ? 
          <TailSpin 
            color="#7fff00" 
            height={300} width={300} 
          /> 
                    : 
        gamesByQuery.map((game) => (
          <VideoGameCard
              key={game.id}
              id={game.id}
              image={game.image}
              name={game.name}
              genres={game.genres}
            />
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>


  );
}
}

export default VideoGameByName;
