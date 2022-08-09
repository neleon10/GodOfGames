import React from 'react'
import { Link } from 'react-router-dom'
import '../VideoGameCard/videoGameCard.css'

function VideoGameCard({id,image,name,genres}) {
  
  //upper case names
  let arrayNombre = [];
  let finalName="";
  let nombre = name.split(" ");
  nombre.forEach(n => {
     arrayNombre.push(n.charAt(0).toUpperCase()+n.slice(1));
     
  })
  finalName = arrayNombre.join(" ")
  //console.log('Nombre en mayuscula',finalName);



  let genresEdited = []

  //this is because some genres are obj inside arrays. 
  if(typeof genres[0]==='object'){
    genres.forEach(element => {
      genresEdited.push(element.name);
    });
  }else {
    genresEdited = genresEdited.concat(genres)
  } 
  
  //if some games have more than 4 genres. 
  if(genresEdited.length > 4){
    genresEdited = genresEdited.slice(0,4)
  }

  return (
    <div className='mainCardContainer'>
      <div className='cardImg'>
        <img src={image} alt="game image" />
      </div>
        <Link to ={`/videogames/${id}`} style={{textDecoration: 'inherit'}}>
          <div className='cardName'>
              {finalName}
          </div>
        </Link> 
          <div className='cardGenres'><span>Genres: </span>
            {genresEdited.map((genre) => (
              <p className='genreName' key={Math.random() * 2.5} >{genre}</p>))}
          </div>
    </div>
  )
}

export default VideoGameCard