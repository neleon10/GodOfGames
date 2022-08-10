import axios from "axios";


//videogames
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_VG_BY_QUERY = "GET_VG_BY_QUERY";
export const GET_VG_BY_ID = "GET_VG_BY_ID";
export const POST_A_VIDEO_GAME = "POST_A_VIDEO_GAME";
export const ARRAY_SORTED = "ARRAY_SORTED";
export const SHOW_BY_GENRE= "SHOW_BY_GENRE";
export const SORT_BY_RATING = "SORT_BY_RATING";
export const ORIGINAL_CREATED ="ORIGINAL_CREATED";
export const DELETE_GAME_ID = "DELETE_GAME_ID"
export const LOADER = 'LOADER';

//genres

export const GET_ALL_GENRES = "GET_ALL_GENRES";
export const POST_A_GENRE = "POST_A_GENRE";

//get all games // with then instead of async await
export function getAllVideogames() {
  return function (dispatch) {
  try{
    
    axios
      .get("https://godogfgames.herokuapp.com/videogames")
      .then((res) => res.data)
      .then((games) => {
        dispatch(loader(false))
        dispatch({
          type: GET_VIDEOGAMES,
          payload:games 
        });
        
      }); // .then ends here
  }catch(e){
    console.log('The error is' ,e)
  }
  };
}

//get by query
export function getVideoGameByQuery(name) {
  return async function(dispatch){
    try {
        let game = await axios.get(`https://godogfgames.herokuapp.com/videogames/query?search=${name}`)
        game = game.data
        dispatch(loader(false))
        return dispatch({
          type: GET_VG_BY_QUERY,
          payload:game
          });
       } catch (e) {
        dispatch(loader(false))
        return dispatch({
          type: GET_VG_BY_QUERY,
          payload:{
              error:[{message : 'Oops Games not Found!'}]
        }
      })
    }
  }
  /* return function (dispatch) {
   
    axios
      .get(`http://localhost:3001/videogames/query?search=${name}`)
      
      .then((res) => res.data)
      .then((game) => {
        
        return dispatch({
          type: GET_VG_BY_QUERY,
          payload:{
            game,
            loaderQuery:false
          }
        });
      }); 
    } */
}//end


//delete id game
export function deleteIdGame(){
  return {
    type: DELETE_GAME_ID,
    payload:{}
  }
}


//Get video Game by Id
export function getVideoGameById(id){
  try{
    
    return async function(dispatch){ 
      const videoGameById = await axios.get(`https://godogfgames.herokuapp.com/videogames/${id}`)
      if(videoGameById) {
        dispatch({
          type:GET_VG_BY_ID,
          payload: videoGameById.data
        })
      }
    }
  }catch(e){
    console.log('The error is',e)
  }
}

//loader 
export function loader(value){
  return{
    type:LOADER,
    payload:value
  }
}

//sort by created
export function orderCreatedOrginal(value){
  
    return{
      type : ORIGINAL_CREATED,
      payload:value
  }
}
//sort by rating
export function sortRating (eventValue){
 
  return{
    type: SORT_BY_RATING,
    payload: eventValue
  }
}

//sorted array 
export function sortedArray(eventValue){
  return {
    type:ARRAY_SORTED,
    payload:eventValue
  }     
}

//show games by genre
export function showGamesByGenre(genreName){
 
  return {
    type:SHOW_BY_GENRE,
    payload:genreName
    
  }
}

//create game 
export function createVideoGame(videoGame){
  
  try{
    return function(dispatch){
      axios.post('https://godogfgames.herokuapp.com/videogames',{
          name: videoGame.name,
          image: videoGame.image,
          description:videoGame.description,
          released:videoGame.released,
          rating:videoGame.rating,
          platforms: videoGame.platforms,
          genres: videoGame.genres
        })
        .then(res => res.data)
        .then((game) => {
          if(game){
            dispatch({
              type:POST_A_VIDEO_GAME,
              payload: game
            })}
            dispatch(getAllVideogames())
          })  
    }

    
  }catch(e){
    console.log('Post error',e)
  }
}

//****************** genres *****************************/
export function getAllGenres(){
  try{

    return function (dispatch){
      axios.get('https://godogfgames.herokuapp.com/genres')
      .then(res => res.data)
      .then((genres)=>{
        dispatch({
          type: GET_ALL_GENRES,
          payload:genres
        })
      })
    }
  }catch(e){
    console.log('Get all genres error',e)
  }
}