import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteIdGame } from "../../actions/actions";
import "./videoGameDetail.css";


function VideogameDetail({name,image,platforms,genres,rating,released,description}) {
 
  const dispatch = useDispatch()

  function resetVGID(){
    dispatch(deleteIdGame())
  }

  // name
  let finalName="";
  let arrayNombre = [];
  if(name){
    let nombre = name.split(" ");
    nombre.forEach(n => {
       arrayNombre.push(n.charAt(0).toUpperCase()+n.slice(1));
       
    })
    finalName = arrayNombre.join(" ")
  }
  
  
  //this is because some genres are obj inside arrays. 
  let genresEdited = []
  if(Array.isArray(genres)){
      if(typeof genres[0]==='object'){
        genres.forEach(element => {
          genresEdited.push(element.name);
        })
      }else{
        genresEdited = genresEdited.concat(genres)
      }
    }
  

  return (
    
    <div className="gameDetailContainer">
        <div className="gameTitle">
          <div className="title">{finalName}</div>
        </div>
      <div className="bodyDiv">

        <div className="leftSideContent">
          <div className="imageDetail">
            <img src={image} alt="game image" />
          </div>
          


          {platforms && 
          <div className="platforms">
            <span>Platforms: </span>
            {platforms.map((p) => (
              <p key={( Math.random()*2.5)}>{p}</p>
            ))}
          </div>}
          

            
           
          <div className="genres">
            <span>Genres: </span>
            {genresEdited && genresEdited.map((genre) => (
              <p key={Math.random() * 2.5}>{genre}</p>
            ))}
          </div> 
            



          <div className="ratingDetail">
            <span>Rating: </span>
            <p>{rating}</p>
          </div>



          <div className="releasedDetail">
            <span>Released: </span>
            <p>{released}</p>
          </div>



            <div className="createGame">
              <Link to={'/videogames/create'}>
                <button >Create Game+</button>
              </Link>
            </div>
          

        </div>

          <div className="description">
            <span>Description: </span>
            {description}
          </div>


      </div>
      <div className="back">
      <Link to={'/videogames'}>
        <button onClick={resetVGID}>Back</button>
      </Link>
      </div>
        
    </div> 
    );
}

export default VideogameDetail;
