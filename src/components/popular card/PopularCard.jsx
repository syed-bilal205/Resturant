import React from 'react'
import '../../styles/popular.css'
import {IoStarSharp} from 'react-icons/io5'
import {BsFillCartFill} from 'react-icons/bs'


const PopularCard = (props) => {
  const{title,imgUrl,price,id} = props.item
  return (
    <>
     
        
     <div className="singleProduct" key={id}>
            <div className="produtImg">
              <img src={imgUrl} alt="" />
            </div>
            <div className="produtContent">
            <div className="rating">
              
            <IoStarSharp className='star'/>
            <IoStarSharp className='star'/>
            <IoStarSharp className='star'/>
            <IoStarSharp className='star'/>
            <IoStarSharp className='star'/> 
            </div>
            <h6>{title}</h6>
            <div className="rates">
              <span className='price'>Price:$ <span className='ruppee'>{price}</span></span>
              <span className='cart'><BsFillCartFill/></span>
            </div>
            </div>

            
          </div>
         
          
    </>
  )
}

export default PopularCard
