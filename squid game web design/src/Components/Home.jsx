import React from 'react'
import styled from 'styled-components'
import HeroImage from '../assets/HERO.jpg'
import Squid from '../assets/SQUID.png'
import Game from '../assets/GAME.png'
import { backgroundColor } from '../utlis/Colors'


const Home = () => {
 
  return (
    <Section id='home'>
      <div className="navbar">
        <div className="brand">
          <div className="circle"></div>
          <div className="triangle">
            <div className="inner"></div>
          </div>
          <div className="square"></div>
        </div>
        <ul className="links">
          <li><a href="#Info">Info</a></li>
          <li><a href="#Videos">videos</a></li>
          <li><a href="#Details">Details</a></li>
        </ul>

      </div>
      <div className="image">
        <img src={HeroImage}/>
        <div className="title">
          <img src={Squid} alt = 'squid'/>
          <img src={Game} alt = 'game'/>
        </div>
      </div>

     </Section>)
}

const Section = styled.section`

display: grid;
grid-template-columns: 40% 60%;
.navbar{
  margin : 3rem 0 0 4rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  .brand {
    display: flex;
    align-items: center;
    gap: 2rem;
    cursor: pointer;
    &:hover {
      .circle,
      .square {

      }
      .triangle {

      }
      .circle {

      }
    } 
    .circle {
      height: 3rem;
      width: 3rem;
      border:5px solid #f72585;
      border-radius: 2rem;
      transition: 0.8s ease-in-out;
    } 

    .triangle {
      border-left: 1.5rem solid transparent;
      border-right: 1.5rem solid transparent;
      border-bottom: 2.8rem solid white;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0ms.8s ease-in-out;
      position: relative;
      .inner{ }
    }  

    .square {
      height: 3rem;
      width: 3rem;
      border: 5px solid #f72585;
      transition: 0ms.8s ease-in-out;
    }
  }
  .links {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    li {
      a {
        text-decoration: none;
        color: #8f8f8f8f;
        text-transform: uppercase;
        font-size: 2rem;
        letter-spacing: 0.2rem;

        &:hover {
          color: white;
        }
      }
      &:first-of-type {
        a {
          color: white;
        }
      }
    }
  }
}
` 

export default Home