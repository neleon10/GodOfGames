import React from "react";
import { useDispatch } from "react-redux";
import { sortedArray } from "../../../actions/actions";


function AtoZ() {
const dispatch = useDispatch()


function sortArray (e){
  dispatch(sortedArray(e.target.value))
}
 
  return (
    <div>
      <label><span>Order:</span></label>
      <select  onChange={sortArray}> 
        <option value={'asc'}>A - Z</option>
        <option value={'desc'}>Z - A </option>
      </select>
    </div>
  );
}

export default AtoZ;
