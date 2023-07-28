import React from 'react'
import "./Global.css";
import Button from "../src/Components/Button";
// import rightarrow from '../src/assets/img/rightarrow.svg';
import "./Components/header.css"

const Home = () => {
  return (
    <section className='main-hero'>
      <section className='index-hero'>
        <h4><hr />Innovation</h4>
        <h1>Enhanced<br></br>
Living Experiences</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi <br /> euismod nulla quis sollicitudin viverra. </p>
     <Button/>
     <div className='btn side-btn'>
        <a href="#">
        Book Visit
        </a>

    </div>

      </section>
    </section>
  )
}

export default Home