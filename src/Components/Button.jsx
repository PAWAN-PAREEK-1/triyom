import React from 'react'
import rightarrow from '../assets/img/rightarrow.svg'
import  '../Global.css'

const Button = () => {
  return (
    <div className='btn'  id='bttn'>
        <a href="#">
        Discover More <img src={rightarrow} alt="" />
        </a>

    </div>
  )
}

export default Button