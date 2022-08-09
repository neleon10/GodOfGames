import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createVideoGame} from "../../actions/actions";
import {Link} from 'react-router-dom';
import {getAllGenres} from '../../actions/actions'
import "./createGame.css";

function CreateVideoGame() {
  const genres = useSelector((state) => state.genres);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getAllGenres());
  }, [])
  
  
  
  
  //platforms 
  const plataformas = [
    "Xbox",
    "PC",
    "PlayStation",
    "GameBoy",
    "Nintendo Switch",
    "Ios",
    "Android",
  ];
  // genres 
  const genresNames = []
  for(let i=0; i<genres.length;i++){
    genresNames.push(genres[i].name)
  }


  //platforms state
  let [checkPlataformas, setCheckPlataformas]=React.useState(new Array(plataformas.length).fill(false))
  //genres state 
  let [checkGenres,setCheckGenres] = React.useState(new Array(19).fill(false))
  
  //form state
  const [inputValue, setInputValue] = React.useState({
    name: "",
    image: "",
    description: "",
    released: "",
    rating: 0,
    platforms: [],
    genres:[],
  });
  
  


  // platforms handler
  const handleCheckPlatforms = (position) => {
    let checkBoxPlatform = checkPlataformas.map((p,i)=>(
      i === position ? !p : p 
      
    ))
    setCheckPlataformas(checkBoxPlatform)
    let platformsArray = []
    checkBoxPlatform.map((p,i) => {
      if(p===true) {
        platformsArray = platformsArray.concat(plataformas[i])
      }
      return 0
    })
    
    setInputValue({...inputValue,platforms: platformsArray})
    
  };
  
  
  //genres handler
  function handleGenresOnChange(position){
    
    let checkBoxGenre = checkGenres.map((g,i) =>(
      i === position ? !g : g
    ))
    setCheckGenres(checkBoxGenre)
    
    let genresArray = []
    checkBoxGenre.map((el,i)=>{  
      if(el === true){
        genresArray = genresArray.concat(genresNames[i])
      }  
      return 0
    })
    
    setInputValue({...inputValue,genres: genresArray})
  }
 
  //rest of inputs
  function handleInputChange(e) {
    e.preventDefault();
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  }

function handleSubmit(e) {
    e.preventDefault();

//validation
//----------------------

//released
let date = inputValue.released.split("-")
if(date[0].length !== 4 || date[1].length !== 2 || date[2].length !== 2) return alert ('Follow the format YYYY-MM-DD')
if(date[1] < "01" || date [1] > "12") return alert ('Months out of range')
if(date[2] < "01" || date [2] > "31") return alert ('Days out of range')

let fecha = new Date().toISOString().split('T')[0] // getting date format YYYY/MM/DD
if(inputValue.released > fecha ) return  alert ('Was the game released in the future?')


//Rating
if (inputValue.rating === "" || inputValue.rating < 1 || inputValue.rating > 5) return alert('Rating: Introduce a value between 1 - 5');

//genres
if(inputValue.genres.length > 4) return alert ("Sorry, you can't add more than four genres!")

//URL
if(inputValue.image.length!==0){
  if(inputValue.image.slice(0,8) !== 'https://' ) return alert ('Incorrect URL, it should be https://')

}
    //------------

    dispatch(createVideoGame(inputValue));
    let path = '/videogames/success'; 
    navigate(path);
}

  return (
    <>
    <h1>Create Your Game</h1>
    
    <form className="formContainer" onSubmit={handleSubmit}>
      <div className="labelsContainer">
        <label>Name:</label>
        <input
          name="name"
          type="text"
          value={inputValue.name ?? ""}
          onChange={handleInputChange}
          required
          
        />

        <label>Image:</label>
        <input
          name="image"
          type="text"
          placeholder="URL here ..."
          value={inputValue.image ?? ""}
          onChange={handleInputChange}
        />

        <label>Description:</label>
        <textarea
          name="description"
          type="text"
          value={inputValue.description ?? ""}
          onChange={handleInputChange}
          required
        />

        <label>Released:</label>
        <input
          name="released"
          type="text"
          value={inputValue.released ?? ""}
          onChange={handleInputChange}
          placeholder="format yyyy-mm-dd"
          required
        />

        <label>Rating:</label>
        <input
          name="rating"
          type="number"
          value={inputValue.rating ?? ""}
          onChange={handleInputChange}
          required
        />

        <div className="platfromCont">
          <label>Platforms: </label>
          {
          plataformas.map((platform, index) => {
            return (<div key={index} className="checkBox">
                      <p>{platform}</p>
                      <input
                        value={platform ?? ""}
                        type="checkbox"
                        name="platforms"
                        onChange={(()=> handleCheckPlatforms(index))}
                      />
                    </div>)
                  })
                }
        </div>

        
        <div className="genreContainer">
          <label>Genres: </label>
          {
          genres.map((genre, index) => {
            return (<div key={index} className='checkBoxGenres'>
                  <p>{genre.name}</p>
                    <input
                      value={genre.name ?? ""}
                      type="checkbox"
                      name="genres"
                      onChange={(()=> handleGenresOnChange(index))} 
                    />
            </div>)
            })
          }
        </div>
      </div>


      <div className="buttonForm">
        <button type="submit" >Create</button> 
      </div>


      <Link to={'/videogames'}>
        <div className="backStreetBoys">
          <button type="button">Back</button> 
        </div>
      </Link>
  
    </form>
    </>
  );
}

export default CreateVideoGame;
