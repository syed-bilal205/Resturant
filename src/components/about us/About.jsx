import React from 'react'
import '../../styles/about.css'
import Slider from "react-slick";
import about from '../../assets/review1.png'

const About = () => {
  return (
    <>
      <section>
        <div className="aboutContainer">
                <h3>what our coustomers are saying</h3>
            <div className="aboutContent">
                <Slider className='slide'>
                <div className="sliderContainer">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum consectetur expedita harum dignissimos quisquam nesciunt rerum 
                    debitis et ut nulla!</p>
                    <h4>jhon doe</h4>
                    <span>web developer</span>
                    </div>
                <div className="sliderContainer">

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Laborum consectetur expedita harum dignissimos quisquam nesciunt rerum 
                    debitis et ut nulla!</p>
                    <h4>jhon doe</h4>
                    <span>web developer</span>
                        </div>
                <div className="sliderContainer">

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Laborum consectetur expedita harum dignissimos quisquam nesciunt rerum 
                    debitis et ut nulla!</p>
                    <h4>jhon doe</h4>
                    <span>web developer</span>
                </div>
                </Slider>
                <div className="aboutImg">
                    <img src={about} alt="" />
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default About
