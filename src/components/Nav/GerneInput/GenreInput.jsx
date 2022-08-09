import React from 'react'
import {showGamesByGenre} from '../../../actions/actions';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function GenreInput() {
  const genres = useSelector((state)=> state.genres);
  const dispatch = useDispatch();
  let navigate = useNavigate(); //hook navigate
  

  function onClickOption (e){
    e.preventDefault();
    let genreName = e.target.value;
    dispatch(showGamesByGenre(genreName))
    let path = '/videogames/genre'; 
    navigate(path);

  }

  return (
    
    <div>
      <label htmlFor="genres"><span>Genres: </span></label>
      <select name="genres" id="genres"  onChange={onClickOption}>
        <option value="...">...</option>
        {
          genres.map((genre)=>(
            <option value={genre.name} key={genre.id}>{genre.name}</option>
          ))
        }
      </select>
    </div>
   
  
  )
}

export default GenreInput