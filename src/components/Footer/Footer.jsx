import React from 'react'
import { AiFillGithub,AiOutlineWhatsApp,AiOutlineLinkedin } from "react-icons/ai";
import './footer.css'

function Footer() {
  return (
    <div className='footerContainer'>
      <div className='socialMedia'>
        <div className='gitHub'>
          <a
          href="https://github.com/neleon10"
          target='_blank'
          rel="noopener" 
          >
            <AiFillGithub />
          </a>
        </div>
        <div className='whatsApp'>
          <a
          href="https://web.whatsapp.com/"
          target='_blank'
          rel="noopener"
          >
            <AiOutlineWhatsApp/>
          </a>
        </div>
        <div className='linkedIn'>
        <a
          href="https://www.linkedin.com/in/carlosvazqueznosetto/"
          target='_blank'
          rel="noopener"
          >
          <AiOutlineLinkedin/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer