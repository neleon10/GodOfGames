import React from "react";
import Search from "./SearchInput/Search";
import GenreInput from "./GerneInput/GenreInput";
import AtoZ from "./AtoZ/AtoZ";
import Rating from './rating/Rating'
import OrderCreated from "./OrderCreated/OrderCreated";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {getAllVideogames} from "../../actions/actions"
import { Link } from "react-router-dom";
import "../Nav/nav.css";



function Nav({green}) {
  const dispatch = useDispatch();
//let's navigate to other side!
let navigate = useNavigate(); //hook navigate

/* function goToMainePage(){
  dispatch(getAllVideogames())
  let path = '/videogames'; 
  navigate(path);
} */

  return (
    <>
      <div className="navMainContainer">
        <Link to= '/videogames'>
          <div className="titleNav">
              <h1 /* onClick={()=>goToMainePage()} */>God of Games</h1>
          </div>
        </Link>

        <div className="navConatinerComponents">
          <div className="selectsStyle">
            <AtoZ />
          </div>
          <div className="selectsStyle">
            <GenreInput />
          </div>
          <div className="selectsStyle">
            <OrderCreated/>
          </div>

          <div className="selectsStyle">
            <Rating />
          </div>
          <div className="searchInputNav">
            <Search />
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
