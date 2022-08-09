import React from 'react'
import { useDispatch } from "react-redux";
import { sortRating } from '../../../actions/actions';

function Rating() {
  
  function handleOnChange (e){
    
    dispatch(sortRating(e.target.value))
  }
  
  const dispatch = useDispatch()

  return (
    <div>
    <label><span>Rating: </span></label>
    <select  onChange={handleOnChange}> 
      <option value={'max'}>Higher</option>
      <option value={'min'}>Lower</option>
    </select>
  </div>
  )
}

export default Rating