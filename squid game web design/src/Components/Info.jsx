import React from 'react'
import Styled from 'styled-components'
import blue from '../utlis/colors'

const Info = () => {
  return <Section id='info' className='defaultMargin'>
    <div className="square"></div>
    <div className="info">
      <div className="title">
        <ul>
          <li>2021</li>
          <li>18+</li>
          <li>Season 1</li>
          <li>TV Dramas</li>
        </ul>
      </div>
      <div className="details">
        <div className="border-top">
          <p>Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aliquid culpa sint saepe tempore esse nam, reiciendis provident quisquam eius earum quis molestiae, doloribus illum, laborum quos cupiditate officia? Hic!
       </p>  
       <div className="border-top">
        <p>Starring</p>
        <ul>
          <li>lee jung</li>
          <li>Park</li>
        </ul>
       </div>
       <div className="border-top">
        <p>Creators</p>
        <ul>
          <li>Hawang dong</li>
        </ul>
       </div>
       </div>
      </div>
    </div>
    </Section>
}
export default Info

const Section = Styled.section`
  display: grid;
  
`
