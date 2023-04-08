import React from 'react'
import './sponsorAds.css';
import SponsorAds_1 from "../../Assets/SponsorAds_1.png";
import SponsorAds_2 from '../../Assets/SponsorAds_2.png';
import SponsorAds_3 from '../../Assets/SponsorAds_3.png';
const SponsorAds = () => {
  return (
    <div className='sponsorslider_container'>
        
        <div className='sponsorslider_row'>
            
        <b className="sponsored-ads">Sponsored Ads</b>
        <div className='sponsor_card_container'>
          
            <div className='sponsor_card_row'>
                <div className='sponsor_card1'>
                    <div className='sponsor_card1_images'>
                    <img
                        class="sponsor-1662070974-250-thumbp-icon"
                        alt=""
                        src={SponsorAds_1}
                      />
                      <div className='sponsor_card_heading_container'>
                        <div className='sponsor_card_1_heading_row'>
                        <div className="countdown-specials">
                            Countdown Specials
                          </div>
                          <div className="looking-for-specials">
                            Looking for specials, offers, or great prices on
                            your everyday favourites? We can help with that.
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                <div className='sponsor_card_2'>
                    <div className='sponsor_card1_images'>
                    <img
                        class="sponsor-1662070974-250-thumbp-icon"
                        alt=""
                        src={SponsorAds_2}
                      />
                      <div className='sponsor_card_heading_container'>
                        <div className='sponsor_card_2_heading_row'>
                        <div className="countdown-specials">TheMarket Offers</div>
                          <div className="checkout-these-hot">
                            Checkout these hot offers on themarket.com
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                <div className='sponsor_card3'>
                <div className='sponsor_card1_images'>
                <img
                        class="sponsor-1662070974-250-thumbp-icon"
                        alt=""
                        src={SponsorAds_3}
                      />
                        <div className='sponsor_card_heading_container'>
                            <div className='sponsor_card_3_heading_row'>
                            <div className="countdown-specials">Bookabach</div>
                          <div className="when-you-rent">
                            When you rent a Bookabach, you always have the whole
                            place to yourself.
                          </div>
                            </div>
                        </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default SponsorAds