import React from 'react'
import Slider from "react-slick";

import { SliderData } from '../../data/SliderData';
import '../../styles/header.css'

const Header = () => {
  return (
    <>
    <section>
      <div className="Container">
      <Slider>
          {
            SliderData.map((item)=>(
              <div key={item.id}>
            <div className="sliderWrapper">
              <div className="sliderContent">
                <h1>{item.title}</h1>               
                 <p>{item.desc}</p>
                 

                <button className='btn'>Explore Food</button>
                 
              </div>
              <div className="sliderImg">
                <img src={item.imgUrl} alt="image" />
              </div>
            </div>
          </div>
          
            ))
          }
        </Slider>
      </div> 
      </section>
    </>
  )
}

export default Header

