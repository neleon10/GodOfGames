import React from 'react'
import {  useDispatch } from "react-redux";
import {getVideoGameByQuery,loader} from '../../../actions/actions';
import { useNavigate } from "react-router-dom";


function Search() {
  const dispatch = useDispatch();
  const [nameOfVideoGame, setNameOfVideoGame] = React.useState("");
  
  function onChange(e) {
    e.preventDefault()
    setNameOfVideoGame(e.target.value);
  }
  
  //once we have the names store in the reducer state, we call the state. 
  //navigate function 
  let navigate = useNavigate(); //hook navigate

  function submit(e) {
    e.preventDefault();
    !nameOfVideoGame ? 
    alert ('Introduce a name')
    :
    dispatch(loader(true))
    dispatch(getVideoGameByQuery(nameOfVideoGame))
    setNameOfVideoGame("");
    let path = '/videogames/query'; 
    navigate(path);
  }
  
  return (
    <form  className='formSearch' onSubmit={submit} autoComplete="off">
      <input
        placeholder="videogame name..."
        type="text"
        id="inputSearch"
        onChange={onChange}
        value={nameOfVideoGame}
        autoComplete="false"
        className='inputSearch'
      />
        <button className='inputButton' >Send</button>  
    </form>

  )
}


export default Search