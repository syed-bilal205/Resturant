import React from 'react'
import '../../styles/footer.css'
import { TbToolsKitchen } from 'react-icons/tb'

const Footer = () => {
  return (
    <>
      <div className="footerContainer">
      <div className="mainFooter">
        <div className="right">
        <h1 className="logo logos">
            <TbToolsKitchen className='logoIcon'/>
                Chef Food
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae esse molestias id deserunt atque voluptas quibusdam dolor ab minima cumque.</p>
        </div>
        <div className="footerLinks">
            <h2>info links</h2>
            <ul>
                <li>terms & conditions</li>
                <li>privacy policy</li>
                <li>return & refund</li>
                <li>payment method</li>
            </ul>
        </div>
        <div className="footerQuicks">
            <h2>quick links</h2>
            <ul>
                <li>about us</li>
                <li>menu</li>
                <li>recipes</li>
                <li>contact</li>
            </ul>
        </div>
        <div className="footerContact">
            <h2>contact</h2>
            <ul>
                <li><i class="ri-map-pin-line"></i>karachi</li>
                <li><i class="ri-mail-line"></i>example@gmail.com</li>
                <li><i class="ri-phone-fill"></i>+0900678601</li>
            </ul>
        </div>
      </div>
    </div>
    <div className="copyRight">
        <p>all copyright 2022 © reserved</p>
      </div>
    </>
  )
}

export default Footer
