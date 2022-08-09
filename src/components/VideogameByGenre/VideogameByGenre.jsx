import React from 'react'
import {useSelector} from 'react-redux';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import VideoGameCard from '../VideoGameCard/VideoGameCard';
import './videogamebygenre.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Rings } from  'react-loader-spinner';

function VideogameByGenre() {
  
  const videoGamesOrderedByGenre = useSelector((state)=> state.videoGamesByGenre);
  const loader = useSelector((state)=> state.loading)


  return (
    <div className='orderByGenreContainer'>
        <div>
          <Nav/>
        </div>
        <div className='cardGenreContainer'>
          {loader ? 
          <Rings 
          color="#1aff1a" 
          height={300} 
          width={300} />
               :
            videoGamesOrderedByGenre.map((game) => (
              <VideoGameCard
                key={game.id}
                id={game.id}
                image={game.image}
                name={game.name}
                genres={game.genres}
              />))
          }
        </div>
        <div>
          <Footer/>
        </div>
    </div>
  )
}

export default VideogameByGenre