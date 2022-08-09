import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getVideoGameById } from "../../actions/actions";
import VideogameDetail from '../VideogameDetail/VideogameDetail';


function SmartDetail() {


  const { id } = useParams();
  const dispatch = useDispatch();
  const gameDetail = useSelector((state) => state.videoGameByID);

  useEffect(() => {
    dispatch(getVideoGameById(id));
  }, []); 



  return (
    <div>
        <VideogameDetail
            name={gameDetail.name}
            image={gameDetail.image}
            platforms={gameDetail.platforms}
            genres={gameDetail.genres}
            rating={gameDetail.rating}
            released={gameDetail.released}
            description={gameDetail.description}

        
        />
    </div>
  )
}

export default SmartDetail