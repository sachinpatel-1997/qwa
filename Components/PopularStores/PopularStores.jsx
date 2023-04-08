import React from 'react'
import Popular_Stores from '../../Assets/Popular_Stores.png';
import Popular_Store_1 from '../../Assets/store_logo_1.png';
import store_2 from '../../Assets/store_2.png';
import store_3 from '../../Assets/store_3.png';
import store_4 from '../../Assets/store_4.png';
import store_5 from '../../Assets/store_5.png';
import store_6 from '../../Assets/store_6.png';
import store_7 from '../../Assets/store_7.png';
import store_8 from '../../Assets/store_8.png';
import './popular_stores.css'
const PopularStores = () => {
  return (
   <div className='conrtainer'>
      <span className='popular-stores'>
         <h4>Popular Stores</h4>
      </span>
      <form>
        <div className='popular-stores_button'>
          <button type='submit' className='button'>View All</button>
        </div>
      </form>
      <div className='popular-stores-card'>
        <div className='popular-stores-card-1'>
          <div className='store-1'>
          <img src={Popular_Stores}

			className="card_images"/>
      <img src={Popular_Store_1}
			className="card_1_logo"/>
								
                <span className="card-1-text">
								FreshSales
							</span>
          </div>
          <div className='store-1'>
          <img src={Popular_Stores}

			className="card_images"/>
      <img src={store_2}
			className="card_1_logo"/>
								
                <span className="card-1-text">
								Jordan Crown
							</span>
          </div>
          <div className='store-1'>
          <img src={Popular_Stores}

			className="card_images"/>
      <img src={store_3}
			className="card_1_logo"/>
								
                <span className="card-1-text">
								Konstant Infosolutions
							</span>
          </div>
          <div className='store-1'>
          <img src={Popular_Stores}

			className="card_images"/>
      <img src={store_4}
			className="card_1_logo"/>
								
                <span className="card-1-text">
								Bynd
							</span>
          </div>
        </div>
        <div className='popular-stores-card-1'>
          <div className='store-1'>
          <img src={Popular_Stores}

			className="card_images"/>
      <img src={store_5}
			className="card_1_logo"/>
								
                <span className="card-1-text">
								FreshSales
							</span>
          </div>
          <div className='store-1'>
          <img src={Popular_Stores}

			className="card_images"/>
      <img src={store_6}
			className="card_1_logo"/>
								
                <span className="card-1-text">
								Jordan Crown
							</span>
          </div>
          <div className='store-1'>
          <img src={Popular_Stores}

			className="card_images"/>
      <img src={store_7}
			className="card_1_logo"/>
								
                <span className="card-1-text">
								Konstant Infosolutions
							</span>
          </div>
          <div className='store-1'>
          <img src={Popular_Stores}

			className="card_images"/>
      <img src={store_8}
			className="card_1_logo"/>
								
                <span className="card-1-text">
								Bynd
							</span>
          </div>
        </div>
      </div>
     
     
      
   </div>
  )
}

export default PopularStores