import React from 'react'
import '../../styles/ourapp.css'
import App from '../../assets/app.png'

const OurApp = () => {
  return (
    <>
      <section className='appSection'>
        <div className="appContainer">
            <div className="appImg">
                <img src={App} alt="images" />
            </div>
            <div className="appContent">
                <span>download our app</span>
                <h4>never feel hungry! download our
                mobile app order delicious food</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ad ipsam velit sunt commodi, iure cum aliquam officiis dolorem consequatur?</p>
                <div className='appButtonDiv'>
                <button className='button store'><i class="ri-apple-fill"></i>app store</button>
                <button className='button play'><i class="ri-google-play-fill"></i>google play</button>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default OurApp
