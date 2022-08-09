import React from "react";
import "./pagination.css";

function Pagination({ changePage, videoGamePerPage, videogames }) {
  const numberOfPages = [];

  for (let i = 1; i <= Math.ceil(videogames / videoGamePerPage); i++) {
    numberOfPages.push(i); //number of pages
  }

  return (
    <div className="paginationContainer">
      <div className="pagesContainer">
        {numberOfPages &&
          numberOfPages.map((number) => (
            <div  className="itemContainer" key={number}>
              <div
                className="number"
                onClick={(e) => {
                  changePage(e, number);
                }}
              >
                {number}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Pagination;
