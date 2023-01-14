import React from 'react'
import '../../styles/menuPack.css'
import {fastFoodProducts,riceMenuProducts,coffeeProducts,dessertProducts,pizzaProducts} from '../../data/Product'
import PopularCard from '../popular card/PopularCard'
import { useState } from 'react'
import { useEffect } from 'react'
import '../../styles/popular.css'


const MenuPack = () => {

    const [filter,setFilter] = useState('RICE-MENU')
    const [products,setProducts] = useState(riceMenuProducts)

    useEffect(()=>{

        if(filter === 'RICE-MENU'){
            setProducts(riceMenuProducts)
        }
        if(filter === 'FAST-FOOD'){
            setProducts(fastFoodProducts)
        }
        if(filter === 'PIZZA'){
            setProducts(pizzaProducts)
        }
        if(filter === 'DESSERT'){
            setProducts(dessertProducts)
        }
        if(filter === 'COFFEE'){
            setProducts(coffeeProducts)
        }

    },[filter])

  return (
    <>
<section className='section'>
    <div className="menuContainer">
        <h4>Our Menu Pack</h4>
        <div className="mainMenu">
            <button className={`btn ${filter === 'FAST-FOOD' ? 'change' : ''}`} onClick={()=>setFilter('FAST-FOOD')}>fast food</button>
            <button className={`btn ${filter === 'RICE-MENU' ? 'change' : ''}`} onClick={()=>setFilter('RICE-MENU')}>rice menu</button>
            <button className={`btn ${filter === 'PIZZA' ? 'change' : ''}`} onClick={()=>setFilter('PIZZA')}>pizza</button>
            <button className={`btn ${filter === 'DESSERT' ? 'change' : ''}`} onClick={()=>setFilter('DESSERT')}>dessert</button>
            <button className={`btn ${filter === 'COFFEE' ? 'change' : ''}`} onClick={()=>setFilter('COFFEE')}>coffee</button>
        </div>
        </div>
        <div className="mainContainer">
        {
          products.map((item)=>(
            <PopularCard item={item}/>
             ))
        }
        </div>
    
</section>
    </>
  )
}

export default MenuPack
