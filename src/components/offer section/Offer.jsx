import React from 'react'
import '../../styles/offers.css'
import pasta from './pasta.png'

const Offer = () => {
  return (
    <>
    <section>
    
        <div className="offerContainer">
            <div className="offerImg">
                <img src={pasta} alt="images" />
            </div>
            <div className="offerContent">
                <h6>Who we are</h6>
                <h5 className='offer'>take a look at the benefits we offer you</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, maiores provident. Explicabo aut consequuntur molestiae earum. Rerum eius eaque cupiditate.</p>
            
            <div className="delivery">
                <div className="deliveryMain">
                
                    <i className="ri-truck-line deliveryIcon"></i>  
                    
                    <h5>free home delivery</h5>

                    <i className="ri-truck-line deliveryIcon"></i>
                    <h5>free home delivery</h5>
                </div>
            </div>

            <div className="delivery">
                <div className="deliveryMain">
                <i className="ri-truck-line deliveryIcon"></i>
                    <h5>free home delivery</h5>

                    <i className="ri-truck-line deliveryIcon"></i>
                    <h5>free home delivery</h5>
                </div>
            </div>

            </div>

        </div>
        
            
    </section>
      
    </>
  )
}

export default Offer
