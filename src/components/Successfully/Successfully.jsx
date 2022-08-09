import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import babyYoda from '../../assets/babyyoda.gif'
import './success.css'

function Successfully() {
const navigate = useNavigate();


function redirect(){
  let path = '/videogames';
  navigate(path) 
}
    


  return (
    <div className='createdContainer'>
        <div className='divBody'>
            <h2 className='createdTitle'>Game Successfully Created!!!</h2>
            <div className='redirecting'><button onClick={redirect}>Home</button></div>
            <div className='babyYoda'>
                <img
                src={babyYoda}
                alt="Mario Bros Picture"
                /> 
            </div>
            <div className='YodaPhrase'>Baby Yoda Happy is...</div>
        </div>
    </div>

  )
}

export default Successfully