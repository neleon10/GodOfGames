
import {GET_VIDEOGAMES,GET_VG_BY_QUERY,ARRAY_SORTED,GET_VG_BY_ID,POST_A_VIDEO_GAME,GET_ALL_GENRES,SHOW_BY_GENRE,SORT_BY_RATING,LOADER,ORIGINAL_CREATED,DELETE_GAME_ID} from "../actions/actions"


const initialState = {
    videoGames: [],
    videoGamesByQuery: [],
    videoGamesByGenre:[],
    genres: [],
    originalCreated : [],
    videoGameByID: {},
    videoGameCreated:{},

    //loaders
    loadingVideogames:false,
    /* loadingQuery:true, */
  }

  function rootReducer (state = initialState,action){
  
    
    switch(action.type){
  //******************************************** */     
        case GET_VIDEOGAMES:
          return {
            ...state,
            videoGames:action.payload
          }
        
  //******************************************** */       
        case GET_VG_BY_QUERY:
          if(action.payload.error){
            //console.log('entra aca en el reducer con error')
            return {
              ...state,
              videoGamesByQuery:action.payload.error
            }
          }else{
            //console.log('entra aca en el reducer con data')
            return {
              ...state,
              videoGamesByQuery:action.payload,
              
            }

          }
/******************************************** */
          case  DELETE_GAME_ID:
            return {
              ...state,
              videoGameByID:action.payload
            }
//******************************************** */
          case LOADER :
            return {
              ...state,
              loadingVideogames:action.payload
              
            }
          
//******************************************** */
        case ARRAY_SORTED:
        
            let sortedArrayAsc = [...state.videoGames].sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1,);
            let sortedArrayDesc = [...state.videoGames].sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1,); 
            let queryArrayAsc = [...state.videoGamesByQuery].sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1,);
            let queryArrayDesc = [...state.videoGamesByQuery].sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1,); 
            let genreArrayASC = [...state.videoGamesByGenre].sort((a,b)=> a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
            let genreArrayDesc = [...state.videoGamesByGenre].sort ((a,b) => a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1);
            let createdOrigArrayASC = [...state.originalCreated].sort((a,b)=> a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
            let createdOrigArrayDesc = [...state.originalCreated].sort ((a,b) => a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1);
            
            if(action.payload === 'asc'){
              return{
                ...state,
                videoGames: sortedArrayAsc,
                videoGamesByQuery:queryArrayAsc,
                videoGamesByGenre:genreArrayASC,
                originalCreated:createdOrigArrayASC
                }
            }
            if(action.payload === 'desc'){
              return {
                ...state,
                videoGames: sortedArrayDesc,
                videoGamesByQuery:queryArrayDesc,
                videoGamesByGenre:genreArrayDesc,
                originalCreated:createdOrigArrayDesc
              }
            }
          
//******************************************** */
          case GET_VG_BY_ID:
            return {
              ...state,
              videoGameByID:action.payload
            }
            
          
//******************************************** */
          case POST_A_VIDEO_GAME:
            
            return {
              ...state,
              videoGameCreated:action.payload
            }
          
//******************************************** */
          case GET_ALL_GENRES:
            return {
              ...state,
              genres: action.payload
            }

 //******************************************** */
          case SHOW_BY_GENRE:
            let filteredByGenre = [...state.videoGames]
            let secondFiltered =[]
            filteredByGenre.forEach(obj =>{
             
              //array genres with objects
              if(typeof obj.genres[0]==='object'){
                obj.genres.forEach(el =>{
                  if(el.name === action.payload){
                    secondFiltered.push(obj)
                  }
                })
              } 
              //array with string
              obj.genres.forEach(name => {
                if(name === action.payload){
                  secondFiltered.push(obj)
                }
              })
            }) 
            if(secondFiltered.length ===0){
              alert('No hay juegos con ese genero.')
             
            } 
            return {
              ...state,
              videoGamesByGenre:secondFiltered,
              
            }   
  //******************************************** */
            
            case SORT_BY_RATING:
              let videoGamesMax = [...state.videoGames].sort((a, b) => a.rating > b.rating ? 1 : -1,);
              let videoGamesMin = [...state.videoGames].sort((a, b) => a.rating > b.rating ? -1 : 1,); 
              let videoGamesByQueryMax = [...state.videoGamesByQuery].sort((a, b) => a.rating > b.rating ? 1 : -1,);
              let videoGamesByQueryMin = [...state.videoGamesByQuery].sort((a, b) => a.rating > b.rating ? -1 : 1,); 
              let videoGamesByGenreMax = [...state.videoGamesByGenre].sort((a,b)=> a.rating > b.rating ? 1 : -1);
              let videoGamesByGenreMin = [...state.videoGamesByGenre].sort ((a,b) => a.rating > b.rating ? -1 : 1);
              let videoGamesCreatedMax = [...state.originalCreated].sort((a,b)=> a.rating > b.rating ? 1 : -1);
              let videoGamesCreatedMin = [...state.originalCreated].sort ((a,b) => a.rating > b.rating ? -1 : 1);

              if(action.payload === 'min'){
                return{
                  ...state,
                  videoGames: videoGamesMax,
                  videoGamesByQuery:videoGamesByQueryMax,
                  videoGamesByGenre:videoGamesByGenreMax,
                  originalCreated:videoGamesCreatedMax
                  }
              }
              if(action.payload === 'max'){
                return {
                  ...state,
                  videoGames: videoGamesMin,
                  videoGamesByQuery:videoGamesByQueryMin,
                  videoGamesByGenre:videoGamesByGenreMin,
                  originalCreated:videoGamesCreatedMin
                }
              }
  //******************************************** */
            case ORIGINAL_CREATED:
             
              if(action.payload === 'created'){
                let created = [...state.videoGames].filter((el)=> String(el.id).length >=8 )
                
                return {
                  ...state,
                  originalCreated:created,
                  loadingVideogames:false
                }
              }
              if(action.payload === 'original'){
                let original = [...state.videoGames].filter((el)=> String(el.id).length < 8 )
                return {
                  ...state,
                  originalCreated:original,
                  loadingVideogames:false
                }
              }




               
  //******************************************** */         
        default:
            return state
    }//switch
  }


  
  export default rootReducer;