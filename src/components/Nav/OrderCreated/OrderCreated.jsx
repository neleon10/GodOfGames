import React from 'react'
import {useDispatch} from "react-redux";
import {orderCreatedOrginal,loader} from '../../../actions/actions'
import { useNavigate } from "react-router-dom";



function OrderCreated() {

  
  const navigate = useNavigate()
  const dispatch = useDispatch()


  function handleOnchange(e){
      if(e.target.value === 'all'){
        let path = '/videogames'
        navigate(path)
      }else{
        dispatch(orderCreatedOrginal(e.target.value))
        let path = '/videogames/createdOriginal'
        navigate(path)
      }
  }

  return (
    <div>
        <label><span>My games</span></label>
        <select onChange={handleOnchange}>
            <option>...</option>
            <option value={'all'}>All </option>
            <option value={'original'}>Original </option>
            <option value={'created'}>Created</option>
        </select>
    </div>
  )
}

export default OrderCreated