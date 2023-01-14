import React,{useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import {TbToolsKitchen} from 'react-icons/tb'
import '../../styles/navbar.css'

const Navbar = () => {

    const [mobile,setMobile] = useState(false)

    const handleClick = () =>{
        setMobile(!mobile)
    }

  return (
    <>
    <div className="container">
        <div className="wrapper">
            <h1 className="logo">
            <TbToolsKitchen className='logoIcon'/>
                Chef Food
            </h1>
            
                <ul className={mobile ? 'nav-links active' : 'nav-links'}>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Menu</a>
                    </li>
                    <li>
                        <a href="/">Reciepe</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
            
            <div className="search">
                <input type="text" placeholder='Enter Text Here...' />
                <BsSearch className='searchIcons'/>
             </div>
             <div className="hamburger" onClick={handleClick}>
             {
                mobile ?  <AiOutlineClose className='faBars'/>: <GiHamburgerMenu className='faBars'/>  
             }
             
             </div>
        </div>
    </div>
        

    </>
  )
}

export default Navbar
