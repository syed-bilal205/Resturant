import React from 'react'
import '../../styles/popular.css'
 import {popularMenuFood} from '../../data/Product'
import PopularCard from '../popular card/PopularCard'

const Popular = () => {
  return (
    <>
      <section>
      <div className='heading'>
        <h1 className="popularHeading">Popular Food Menu </h1>
      </div>
        <div className="mainContainer">
        {
          popularMenuFood.map((item)=>(
            <PopularCard item={item}/>
             ))
        }
        </div>
      </section>
    </>
  )
}

export default Popular
