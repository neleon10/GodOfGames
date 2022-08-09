import React from 'react'
import { useSelector } from 'react-redux'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import VideoGameCard from '../VideoGameCard/VideoGameCard'
import Pagination from '../Pagination/Pagination'
import './videogamecreatedoriginal.css'

function VideoGameCreatedOriginal() {

const gamesCreatedOriginal = useSelector((state)=> state.originalCreated)
//pagination
const [currentPage, setCurrentPage] = React.useState(1);
const [videoGamePerPage] = React.useState(15);

//pagination variables
const end = currentPage * videoGamePerPage; // 15 -- 30 etc
const start = end - videoGamePerPage; // 15 - 15 == 0 -- 15 etc
const currentGames = gamesCreatedOriginal.slice (start,end);  

 //change page pagination
 function changePage (e,pageNumber) {
    e.preventDefault()
    setCurrentPage(pageNumber)
  }

  return (
    <div>
            <div>
                <Nav/>
            </div>
            <div>
                <Pagination changePage={changePage} videoGamePerPage={videoGamePerPage} videogames={gamesCreatedOriginal.length}/>
            </div>
            <div className='createdOriginalCont'>
                    {   
                    currentGames.map((game) => (
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
                <Footer/>
            </div>
    </div>
  )
}

export default VideoGameCreatedOriginal