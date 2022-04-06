import './Landing.css';
import '../index.css'
import landingText from '../assets/graphics/airbean-landing.svg';
import leftLanding from '../assets/graphics/intro-graphic-left.svg';
import rightLanding from '../assets/graphics/intro-graphic-right.svg';
import { useNavigate } from 'react-router-dom'

//const { findUsers } = require('../database/operations')

function Landing() {
    const navigate = useNavigate();

    function clickLanding() {
        navigate('/menu')
    }

 /*  function rotatePicture (picture) {
      const picture = { leftLanding, rightLanding }
  } */

    return (
        <section className="landingContainer">
            <img src={ landingText } alt="AIRBEAN" className='landingText'/>
            <img src={ leftLanding } alt="left" className='leftLanding'/>
            <img src={ rightLanding } alt="right" className='rightLanding' onClick={ clickLanding }/>
        </section>
    )
}

export default Landing;