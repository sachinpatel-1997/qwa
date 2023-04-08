import React from 'react'
import './Popular_Sale.css'
import {Data} from '../../Data';
const Popular_Sale = () => {
  return (
    <>
   
    {Data.map((data, key) => {
     
      return (
    <div className="Popular_sales_container">
    <div className="Popular_sales_text">
      <b className="popular-sales">{data.popular_sale_title}</b>
     <form><button className="subscribe-1">{data.subscribe}</button></form>
    </div>
    <div className="Popular_sales_card_container">
      <div className="Popular_sales_card_1">
        <div className="Popular_sales_card_image">
          <img
            className="product-1641248058-284-thumbj-icon"
            alt=""
            src={data.card1_img}
          />
          
          <div className="food">
            <div className="subway-grey-street">Food</div>
          </div>
          <div className="Popular_sales_card_like_icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_8260_13119)">
<rect x="2" y="1" width="36" height="36" rx="5" fill="black" fill-opacity="0.75"/>
<path d="M20.5167 26.3417C20.2333 26.4417 19.7667 26.4417 19.4833 26.3417C17.0667 25.5167 11.6667 22.075 11.6667 16.2417C11.6667 13.6667 13.7417 11.5834 16.3 11.5834C17.8167 11.5834 19.1583 12.3167 20 13.45C20.8417 12.3167 22.1917 11.5834 23.7 11.5834C26.2583 11.5834 28.3333 13.6667 28.3333 16.2417C28.3333 22.075 22.9333 25.5167 20.5167 26.3417Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_8260_13119" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8260_13119"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8260_13119" result="shape"/>
</filter>
</defs>
</svg>
</div>

   

        </div>
        <div className="Popular_sales_card_text_container">
          <div className="Popular_sales_card_text_row">
            <div className="span">
              <p className="sale-in">{data. card1_sale_text}</p>
            </div>
            <div className="h4">
              <h6 className="subway-buy">
               {data. card1_subway_buy}
              </h6>
            </div>
            <div className="Popular_sales_card_address">
              <div className="subway-grey-street"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.3333 1.66663H1.66665C1.44563 1.66663 1.23367 1.75442 1.07739 1.9107C0.92111 2.06698 0.833313 2.27895 0.833313 2.49996V5.83329C0.834763 6.34908 0.995712 6.85179 1.29409 7.27251C1.59248 7.69323 2.01369 8.01136 2.49998 8.18329V17.5C2.49998 17.721 2.58778 17.9329 2.74406 18.0892C2.90034 18.2455 3.1123 18.3333 3.33331 18.3333H16.6666C16.8877 18.3333 17.0996 18.2455 17.2559 18.0892C17.4122 17.9329 17.5 17.721 17.5 17.5V8.18329C17.9863 8.01136 18.4075 7.69323 18.7059 7.27251C19.0042 6.85179 19.1652 6.34908 19.1666 5.83329V2.49996C19.1666 2.27895 19.0788 2.06698 18.9226 1.9107C18.7663 1.75442 18.5543 1.66663 18.3333 1.66663ZM12.5 3.33329H14.1666V5.83329C14.1666 6.05431 14.0788 6.26627 13.9226 6.42255C13.7663 6.57883 13.5543 6.66663 13.3333 6.66663C13.1123 6.66663 12.9003 6.57883 12.7441 6.42255C12.5878 6.26627 12.5 6.05431 12.5 5.83329V3.33329ZM9.16665 3.33329H10.8333V5.83329C10.8333 6.05431 10.7455 6.26627 10.5892 6.42255C10.433 6.57883 10.221 6.66663 9.99998 6.66663C9.77896 6.66663 9.567 6.57883 9.41072 6.42255C9.25444 6.26627 9.16665 6.05431 9.16665 5.83329V3.33329ZM5.83331 3.33329H7.49998V5.83329C7.49998 6.05431 7.41218 6.26627 7.2559 6.42255C7.09962 6.57883 6.88766 6.66663 6.66665 6.66663C6.44563 6.66663 6.23367 6.57883 6.07739 6.42255C5.92111 6.26627 5.83331 6.05431 5.83331 5.83329V3.33329ZM3.33331 6.66663C3.1123 6.66663 2.90034 6.57883 2.74406 6.42255C2.58778 6.26627 2.49998 6.05431 2.49998 5.83329V3.33329H4.16665V5.83329C4.16665 6.05431 4.07885 6.26627 3.92257 6.42255C3.76629 6.57883 3.55433 6.66663 3.33331 6.66663ZM11.6666 16.6666H8.33331V13.3333C8.33331 12.8913 8.50891 12.4673 8.82147 12.1548C9.13403 11.8422 9.55795 11.6666 9.99998 11.6666C10.442 11.6666 10.8659 11.8422 11.1785 12.1548C11.4911 12.4673 11.6666 12.8913 11.6666 13.3333V16.6666ZM15.8333 16.6666H13.3333V13.3333C13.3333 12.4492 12.9821 11.6014 12.357 10.9763C11.7319 10.3511 10.884 9.99996 9.99998 9.99996C9.11592 9.99996 8.26808 10.3511 7.64296 10.9763C7.01784 11.6014 6.66665 12.4492 6.66665 13.3333V16.6666H4.16665V8.18329C4.47295 8.06959 4.75551 7.90006 4.99998 7.68329C5.45833 8.09326 6.0517 8.3199 6.66665 8.3199C7.28159 8.3199 7.87496 8.09326 8.33331 7.68329C8.79166 8.09326 9.38504 8.3199 9.99998 8.3199C10.6149 8.3199 11.2083 8.09326 11.6666 7.68329C12.125 8.09326 12.7184 8.3199 13.3333 8.3199C13.9483 8.3199 14.5416 8.09326 15 7.68329C15.2444 7.90006 15.527 8.06959 15.8333 8.18329V16.6666ZM17.5 5.83329C17.5 6.05431 17.4122 6.26627 17.2559 6.42255C17.0996 6.57883 16.8877 6.66663 16.6666 6.66663C16.4456 6.66663 16.2337 6.57883 16.0774 6.42255C15.9211 6.26627 15.8333 6.05431 15.8333 5.83329V3.33329H17.5V5.83329Z" fill="black"/>
</svg></div>
              <div className="p">
                <p className="subway-grey-street">
                 {data.card1_address}
                </p>
              </div>
            </div>
            <div className="Popular_sales_card_location">
              <div className="subway-grey-street"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8260_13138)">
<path d="M17.5 8.33337C17.5 14.1667 10 19.1667 10 19.1667C10 19.1667 2.5 14.1667 2.5 8.33337C2.5 6.34425 3.29018 4.4366 4.6967 3.03007C6.10322 1.62355 8.01088 0.833374 10 0.833374C11.9891 0.833374 13.8968 1.62355 15.3033 3.03007C16.7098 4.4366 17.5 6.34425 17.5 8.33337Z" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 10.8334C11.3807 10.8334 12.5 9.71408 12.5 8.33337C12.5 6.95266 11.3807 5.83337 10 5.83337C8.61929 5.83337 7.5 6.95266 7.5 8.33337C7.5 9.71408 8.61929 10.8334 10 10.8334Z" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_8260_13138">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

</div>
              <div className="p1">
                <p className="subway-grey-street">{data.card1_location}</p>
              </div>
            </div>
            <div className="Popular_sales_card_expire_date">
              <div className="subway-grey-street"><svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3333 1.66663V4.99996M5.66667 1.66663V4.99996M1.5 8.33329H16.5M3.16667 3.33329H14.8333C15.7538 3.33329 16.5 4.07948 16.5 4.99996V16.6666C16.5 17.5871 15.7538 18.3333 14.8333 18.3333H3.16667C2.24619 18.3333 1.5 17.5871 1.5 16.6666V4.99996C1.5 4.07948 2.24619 3.33329 3.16667 3.33329Z" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
              <div className="Popular_sales_card_expire_date_text">
                <p className="subway-grey-street">{data.expire}</p>
                <p className="subway-grey-street">{data.card_1_expire_in_days}</p>
              </div>
            </div>
          </div>
          <form>
          <div className='Popular_sales_card_view_deal_button'>
            <button type='submit' className='view-deal4'>{data.View_Deal}</button>
          </div>
          </form>
        </div>
      </div>
      <div className="Popular_sales_card_2_container">
        <div className="Popular_sales_card_image">
          <img
            className="product-1641248058-284-thumbj-icon"
            alt=""
            src={data.card2_img}
          />
       
          <div className="Popular_sales_card_2_title">
            <div className="subway-grey-street">{data.card2_title}</div>
          </div>
          <div className="Popular_sales_card_like_icon"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_8260_13119)">
<rect x="2" y="1" width="36" height="36" rx="5" fill="black" fill-opacity="0.75"/>
<path d="M20.5167 26.3417C20.2333 26.4417 19.7667 26.4417 19.4833 26.3417C17.0667 25.5167 11.6667 22.075 11.6667 16.2417C11.6667 13.6667 13.7417 11.5834 16.3 11.5834C17.8167 11.5834 19.1583 12.3167 20 13.45C20.8417 12.3167 22.1917 11.5834 23.7 11.5834C26.2583 11.5834 28.3333 13.6667 28.3333 16.2417C28.3333 22.075 22.9333 25.5167 20.5167 26.3417Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_8260_13119" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8260_13119"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8260_13119" result="shape"/>
</filter>
</defs>
</svg>
</div>

        </div>
        <div className="Popular_sales_card_text_container">
          <div className="Popular_sales_card_text_row">
            <div className="span1">
              <div className="sale-in">{data.card_sale_text}</div>
            </div>
            <div className="h41">
              <div className="get-6-months">
              <b>{data.card2_subway_buy}</b>
              </div>
            </div>
            <div className="Popular_sales_card__location">
              <div className="subway-grey-street"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8260_13138)">
<path d="M17.5 8.33337C17.5 14.1667 10 19.1667 10 19.1667C10 19.1667 2.5 14.1667 2.5 8.33337C2.5 6.34425 3.29018 4.4366 4.6967 3.03007C6.10322 1.62355 8.01088 0.833374 10 0.833374C11.9891 0.833374 13.8968 1.62355 15.3033 3.03007C16.7098 4.4366 17.5 6.34425 17.5 8.33337Z" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 10.8334C11.3807 10.8334 12.5 9.71408 12.5 8.33337C12.5 6.95266 11.3807 5.83337 10 5.83337C8.61929 5.83337 7.5 6.95266 7.5 8.33337C7.5 9.71408 8.61929 10.8334 10 10.8334Z" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_8260_13138">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg></div>
              <div className="p2">
                <p className="subway-grey-street">{data.card2_location}</p>
              </div>
            </div>
            <div className="Popular_sales_card__expire">
              <div className="subway-grey-street"><svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3333 1.66663V4.99996M5.66667 1.66663V4.99996M1.5 8.33329H16.5M3.16667 3.33329H14.8333C15.7538 3.33329 16.5 4.07948 16.5 4.99996V16.6666C16.5 17.5871 15.7538 18.3333 14.8333 18.3333H3.16667C2.24619 18.3333 1.5 17.5871 1.5 16.6666V4.99996C1.5 4.07948 2.24619 3.33329 3.16667 3.33329Z" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
              <div className="Popular_sales_card__expire_text">
                <p className="subway-grey-street">{data.expire}</p>
                <p className="subway-grey-street">{data.card_2_expire_in_days}</p>
              </div>
            </div>
          </div>
        <form>
         <div className='Popular_sales_card_view_deal_button'>
            <button type='submit' className='view-deal4'>{data.View_Deal}</button>
          </div>
          </form>
        </div>
      </div>
      <div className="Popular_sales_card__3_container">
        <div className="Popular_sales_card_image">
          <img
            className="product-1641248058-284-thumbj-icon"
            alt=""
            src={data.card3_img}
          />
          <div className="Popular_sales_card__3_title">
            <div className="subway-grey-street">{data.card3_title}</div>
          </div>
          <div className="Popular_sales_card_like_icon"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_8260_13119)">
<rect x="2" y="1" width="36" height="36" rx="5" fill="black" fill-opacity="0.75"/>
<path d="M20.5167 26.3417C20.2333 26.4417 19.7667 26.4417 19.4833 26.3417C17.0667 25.5167 11.6667 22.075 11.6667 16.2417C11.6667 13.6667 13.7417 11.5834 16.3 11.5834C17.8167 11.5834 19.1583 12.3167 20 13.45C20.8417 12.3167 22.1917 11.5834 23.7 11.5834C26.2583 11.5834 28.3333 13.6667 28.3333 16.2417C28.3333 22.075 22.9333 25.5167 20.5167 26.3417Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_8260_13119" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8260_13119"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8260_13119" result="shape"/>
</filter>
</defs>
</svg></div>
        </div>
        <div className="Popular_sales_card_text_container">
          <div className="Popular_sales_card_text_row">
            <div className="span1">
              <p className="sale-in">{data.card_sale_text}</p>
            </div>
            <div className="h42">
              <div className="sunglasshut-students">
                <b>{data.card3_subway_buy}</b>
              </div>
            </div>
            <div className="Popular_sales_card__location">
              <div className="subway-grey-street"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8260_13138)">
<path d="M17.5 8.33337C17.5 14.1667 10 19.1667 10 19.1667C10 19.1667 2.5 14.1667 2.5 8.33337C2.5 6.34425 3.29018 4.4366 4.6967 3.03007C6.10322 1.62355 8.01088 0.833374 10 0.833374C11.9891 0.833374 13.8968 1.62355 15.3033 3.03007C16.7098 4.4366 17.5 6.34425 17.5 8.33337Z" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 10.8334C11.3807 10.8334 12.5 9.71408 12.5 8.33337C12.5 6.95266 11.3807 5.83337 10 5.83337C8.61929 5.83337 7.5 6.95266 7.5 8.33337C7.5 9.71408 8.61929 10.8334 10 10.8334Z" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_8260_13138">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg></div>
              <div className="p2">
                <p className="subway-grey-street">{data.card3_location}</p>
              </div>
            </div>
            <div className="Popular_sales_card__3_expire_icon">
              <div className="subway-grey-street"><svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3333 1.66663V4.99996M5.66667 1.66663V4.99996M1.5 8.33329H16.5M3.16667 3.33329H14.8333C15.7538 3.33329 16.5 4.07948 16.5 4.99996V16.6666C16.5 17.5871 15.7538 18.3333 14.8333 18.3333H3.16667C2.24619 18.3333 1.5 17.5871 1.5 16.6666V4.99996C1.5 4.07948 2.24619 3.33329 3.16667 3.33329Z" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
              <div className="Popular_sales_card_expire_date_text">
                <p className="subway-grey-street">{data.expire}</p>
                <p className="subway-grey-street">{data.card_3_expire_in_days}</p>
              </div>
            </div>
          </div>
          <form>
           <div className='Popular_sales_card_view_deal_button'>
            <button type='submit' className='view-deal4'>View Deal</button>
          </div>
          </form>
        </div>
      </div>
      <div className="Popular_sales_card__4_container">
        <div className="Popular_sales_card_image">
          <img
            className="product-1641248058-284-thumbj-icon"
            alt=""
            src={data.card4_img}
          />
          <div className="Popular_sales_card__4_title">
            <p className="subway-grey-street">{data.card4_title}</p>
          </div>
          <div className="Popular_sales_card_like_icon"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_8260_13119)">
<rect x="2" y="1" width="36" height="36" rx="5" fill="black" fill-opacity="0.75"/>
<path d="M20.5167 26.3417C20.2333 26.4417 19.7667 26.4417 19.4833 26.3417C17.0667 25.5167 11.6667 22.075 11.6667 16.2417C11.6667 13.6667 13.7417 11.5834 16.3 11.5834C17.8167 11.5834 19.1583 12.3167 20 13.45C20.8417 12.3167 22.1917 11.5834 23.7 11.5834C26.2583 11.5834 28.3333 13.6667 28.3333 16.2417C28.3333 22.075 22.9333 25.5167 20.5167 26.3417Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_8260_13119" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8260_13119"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8260_13119" result="shape"/>
</filter>
</defs>
</svg></div>
        </div>
        <div className="Popular_sales_card_text_container">
          <div className="Popular_sales_card_text_row">
            <div className="span3">
              <p className="sale-in">{data.card_sale_text}</p>
            </div>
            <div className="h43">
              <div className="lunch-special-curry">
               <b>{data.card4_subway_buy}</b>
              </div>
            </div>
            <div className="div96">
              <div className="subway-grey-street"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.3333 1.66663H1.66665C1.44563 1.66663 1.23367 1.75442 1.07739 1.9107C0.92111 2.06698 0.833313 2.27895 0.833313 2.49996V5.83329C0.834763 6.34908 0.995712 6.85179 1.29409 7.27251C1.59248 7.69323 2.01369 8.01136 2.49998 8.18329V17.5C2.49998 17.721 2.58778 17.9329 2.74406 18.0892C2.90034 18.2455 3.1123 18.3333 3.33331 18.3333H16.6666C16.8877 18.3333 17.0996 18.2455 17.2559 18.0892C17.4122 17.9329 17.5 17.721 17.5 17.5V8.18329C17.9863 8.01136 18.4075 7.69323 18.7059 7.27251C19.0042 6.85179 19.1652 6.34908 19.1666 5.83329V2.49996C19.1666 2.27895 19.0788 2.06698 18.9226 1.9107C18.7663 1.75442 18.5543 1.66663 18.3333 1.66663ZM12.5 3.33329H14.1666V5.83329C14.1666 6.05431 14.0788 6.26627 13.9226 6.42255C13.7663 6.57883 13.5543 6.66663 13.3333 6.66663C13.1123 6.66663 12.9003 6.57883 12.7441 6.42255C12.5878 6.26627 12.5 6.05431 12.5 5.83329V3.33329ZM9.16665 3.33329H10.8333V5.83329C10.8333 6.05431 10.7455 6.26627 10.5892 6.42255C10.433 6.57883 10.221 6.66663 9.99998 6.66663C9.77896 6.66663 9.567 6.57883 9.41072 6.42255C9.25444 6.26627 9.16665 6.05431 9.16665 5.83329V3.33329ZM5.83331 3.33329H7.49998V5.83329C7.49998 6.05431 7.41218 6.26627 7.2559 6.42255C7.09962 6.57883 6.88766 6.66663 6.66665 6.66663C6.44563 6.66663 6.23367 6.57883 6.07739 6.42255C5.92111 6.26627 5.83331 6.05431 5.83331 5.83329V3.33329ZM3.33331 6.66663C3.1123 6.66663 2.90034 6.57883 2.74406 6.42255C2.58778 6.26627 2.49998 6.05431 2.49998 5.83329V3.33329H4.16665V5.83329C4.16665 6.05431 4.07885 6.26627 3.92257 6.42255C3.76629 6.57883 3.55433 6.66663 3.33331 6.66663ZM11.6666 16.6666H8.33331V13.3333C8.33331 12.8913 8.50891 12.4673 8.82147 12.1548C9.13403 11.8422 9.55795 11.6666 9.99998 11.6666C10.442 11.6666 10.8659 11.8422 11.1785 12.1548C11.4911 12.4673 11.6666 12.8913 11.6666 13.3333V16.6666ZM15.8333 16.6666H13.3333V13.3333C13.3333 12.4492 12.9821 11.6014 12.357 10.9763C11.7319 10.3511 10.884 9.99996 9.99998 9.99996C9.11592 9.99996 8.26808 10.3511 7.64296 10.9763C7.01784 11.6014 6.66665 12.4492 6.66665 13.3333V16.6666H4.16665V8.18329C4.47295 8.06959 4.75551 7.90006 4.99998 7.68329C5.45833 8.09326 6.0517 8.3199 6.66665 8.3199C7.28159 8.3199 7.87496 8.09326 8.33331 7.68329C8.79166 8.09326 9.38504 8.3199 9.99998 8.3199C10.6149 8.3199 11.2083 8.09326 11.6666 7.68329C12.125 8.09326 12.7184 8.3199 13.3333 8.3199C13.9483 8.3199 14.5416 8.09326 15 7.68329C15.2444 7.90006 15.527 8.06959 15.8333 8.18329V16.6666ZM17.5 5.83329C17.5 6.05431 17.4122 6.26627 17.2559 6.42255C17.0996 6.57883 16.8877 6.66663 16.6666 6.66663C16.4456 6.66663 16.2337 6.57883 16.0774 6.42255C15.9211 6.26627 15.8333 6.05431 15.8333 5.83329V3.33329H17.5V5.83329Z" fill="black"/>
</svg></div>
              <div className="p4">
                <div className="royale-indian-restaurant">
                  <b>{data.card4_address}</b>
                </div>
              </div>
            </div>
            <div className="div98">
              <div className="subway-grey-street"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8260_13138)">
<path d="M17.5 8.33337C17.5 14.1667 10 19.1667 10 19.1667C10 19.1667 2.5 14.1667 2.5 8.33337C2.5 6.34425 3.29018 4.4366 4.6967 3.03007C6.10322 1.62355 8.01088 0.833374 10 0.833374C11.9891 0.833374 13.8968 1.62355 15.3033 3.03007C16.7098 4.4366 17.5 6.34425 17.5 8.33337Z" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 10.8334C11.3807 10.8334 12.5 9.71408 12.5 8.33337C12.5 6.95266 11.3807 5.83337 10 5.83337C8.61929 5.83337 7.5 6.95266 7.5 8.33337C7.5 9.71408 8.61929 10.8334 10 10.8334Z" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_8260_13138">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg></div>
              <div className="p1">
                <p className="subway-grey-street">{data.card4_location}</p>
              </div>
            </div>
            <div className="div100">
              <div className="subway-grey-street"><svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3333 1.66663V4.99996M5.66667 1.66663V4.99996M1.5 8.33329H16.5M3.16667 3.33329H14.8333C15.7538 3.33329 16.5 4.07948 16.5 4.99996V16.6666C16.5 17.5871 15.7538 18.3333 14.8333 18.3333H3.16667C2.24619 18.3333 1.5 17.5871 1.5 16.6666V4.99996C1.5 4.07948 2.24619 3.33329 3.16667 3.33329Z" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
              <div className="Popular_sales_card__expire_text">
                <p className="subway-grey-street">{data.expire}</p>
                <p className="subway-grey-street">{data.card_4_expire_in_days}</p>
              </div>
            </div>
          </div>
          <form>
           <div className='Popular_sales_card_view_deal_button'>
            <button type='submit' className='view-deal4'>View Deal</button>
          </div>
          </form>
        </div>
      </div>
      <div className="div103">
        <div className="Popular_sales_card_image">
          <img
            className="product-1641248058-284-thumbj-icon"
            alt=""
            src={data.card5_img}
          />
          <div className="div105">
            <div className="subway-grey-street">{data.card5_title}</div>
          </div>
          <div className="Popular_sales_card_like_icon"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_8260_13119)">
<rect x="2" y="1" width="36" height="36" rx="5" fill="black" fill-opacity="0.75"/>
<path d="M20.5167 26.3417C20.2333 26.4417 19.7667 26.4417 19.4833 26.3417C17.0667 25.5167 11.6667 22.075 11.6667 16.2417C11.6667 13.6667 13.7417 11.5834 16.3 11.5834C17.8167 11.5834 19.1583 12.3167 20 13.45C20.8417 12.3167 22.1917 11.5834 23.7 11.5834C26.2583 11.5834 28.3333 13.6667 28.3333 16.2417C28.3333 22.075 22.9333 25.5167 20.5167 26.3417Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_8260_13119" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8260_13119"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8260_13119" result="shape"/>
</filter>
</defs>
</svg></div>
        </div>
        <div className="Popular_sales_card_text_container">
          <div className="Popular_sales_card_text_row">
            <div className="span3">
              <p className="sale-in">{data.card_sale_text}</p>
            </div>
            <div className="h44">
              <p className="subway-buy">{data.card5_subway_buy}</p>
            </div>
            <div className="div109">
              <div className="subway-grey-street"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.3333 1.66663H1.66665C1.44563 1.66663 1.23367 1.75442 1.07739 1.9107C0.92111 2.06698 0.833313 2.27895 0.833313 2.49996V5.83329C0.834763 6.34908 0.995712 6.85179 1.29409 7.27251C1.59248 7.69323 2.01369 8.01136 2.49998 8.18329V17.5C2.49998 17.721 2.58778 17.9329 2.74406 18.0892C2.90034 18.2455 3.1123 18.3333 3.33331 18.3333H16.6666C16.8877 18.3333 17.0996 18.2455 17.2559 18.0892C17.4122 17.9329 17.5 17.721 17.5 17.5V8.18329C17.9863 8.01136 18.4075 7.69323 18.7059 7.27251C19.0042 6.85179 19.1652 6.34908 19.1666 5.83329V2.49996C19.1666 2.27895 19.0788 2.06698 18.9226 1.9107C18.7663 1.75442 18.5543 1.66663 18.3333 1.66663ZM12.5 3.33329H14.1666V5.83329C14.1666 6.05431 14.0788 6.26627 13.9226 6.42255C13.7663 6.57883 13.5543 6.66663 13.3333 6.66663C13.1123 6.66663 12.9003 6.57883 12.7441 6.42255C12.5878 6.26627 12.5 6.05431 12.5 5.83329V3.33329ZM9.16665 3.33329H10.8333V5.83329C10.8333 6.05431 10.7455 6.26627 10.5892 6.42255C10.433 6.57883 10.221 6.66663 9.99998 6.66663C9.77896 6.66663 9.567 6.57883 9.41072 6.42255C9.25444 6.26627 9.16665 6.05431 9.16665 5.83329V3.33329ZM5.83331 3.33329H7.49998V5.83329C7.49998 6.05431 7.41218 6.26627 7.2559 6.42255C7.09962 6.57883 6.88766 6.66663 6.66665 6.66663C6.44563 6.66663 6.23367 6.57883 6.07739 6.42255C5.92111 6.26627 5.83331 6.05431 5.83331 5.83329V3.33329ZM3.33331 6.66663C3.1123 6.66663 2.90034 6.57883 2.74406 6.42255C2.58778 6.26627 2.49998 6.05431 2.49998 5.83329V3.33329H4.16665V5.83329C4.16665 6.05431 4.07885 6.26627 3.92257 6.42255C3.76629 6.57883 3.55433 6.66663 3.33331 6.66663ZM11.6666 16.6666H8.33331V13.3333C8.33331 12.8913 8.50891 12.4673 8.82147 12.1548C9.13403 11.8422 9.55795 11.6666 9.99998 11.6666C10.442 11.6666 10.8659 11.8422 11.1785 12.1548C11.4911 12.4673 11.6666 12.8913 11.6666 13.3333V16.6666ZM15.8333 16.6666H13.3333V13.3333C13.3333 12.4492 12.9821 11.6014 12.357 10.9763C11.7319 10.3511 10.884 9.99996 9.99998 9.99996C9.11592 9.99996 8.26808 10.3511 7.64296 10.9763C7.01784 11.6014 6.66665 12.4492 6.66665 13.3333V16.6666H4.16665V8.18329C4.47295 8.06959 4.75551 7.90006 4.99998 7.68329C5.45833 8.09326 6.0517 8.3199 6.66665 8.3199C7.28159 8.3199 7.87496 8.09326 8.33331 7.68329C8.79166 8.09326 9.38504 8.3199 9.99998 8.3199C10.6149 8.3199 11.2083 8.09326 11.6666 7.68329C12.125 8.09326 12.7184 8.3199 13.3333 8.3199C13.9483 8.3199 14.5416 8.09326 15 7.68329C15.2444 7.90006 15.527 8.06959 15.8333 8.18329V16.6666ZM17.5 5.83329C17.5 6.05431 17.4122 6.26627 17.2559 6.42255C17.0996 6.57883 16.8877 6.66663 16.6666 6.66663C16.4456 6.66663 16.2337 6.57883 16.0774 6.42255C15.9211 6.26627 15.8333 6.05431 15.8333 5.83329V3.33329H17.5V5.83329Z" fill="black"/>
</svg></div>
              <div className="p">
                <p className="subway-grey-street">
                 {data.card5_address}
                </p>
              </div>
            </div>
            <div className="Popular_sales_card_location">
              <div className="subway-grey-street"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8260_13138)">
<path d="M17.5 8.33337C17.5 14.1667 10 19.1667 10 19.1667C10 19.1667 2.5 14.1667 2.5 8.33337C2.5 6.34425 3.29018 4.4366 4.6967 3.03007C6.10322 1.62355 8.01088 0.833374 10 0.833374C11.9891 0.833374 13.8968 1.62355 15.3033 3.03007C16.7098 4.4366 17.5 6.34425 17.5 8.33337Z" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 10.8334C11.3807 10.8334 12.5 9.71408 12.5 8.33337C12.5 6.95266 11.3807 5.83337 10 5.83337C8.61929 5.83337 7.5 6.95266 7.5 8.33337C7.5 9.71408 8.61929 10.8334 10 10.8334Z" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_8260_13138">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg></div>
              <div className="p2">
                <p className="subway-grey-street">{data.card5_location}</p>
              </div>
            </div>
            <div className="div113">
              <div className="subway-grey-street"><svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3333 1.66663V4.99996M5.66667 1.66663V4.99996M1.5 8.33329H16.5M3.16667 3.33329H14.8333C15.7538 3.33329 16.5 4.07948 16.5 4.99996V16.6666C16.5 17.5871 15.7538 18.3333 14.8333 18.3333H3.16667C2.24619 18.3333 1.5 17.5871 1.5 16.6666V4.99996C1.5 4.07948 2.24619 3.33329 3.16667 3.33329Z" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
              <div className="Popular_sales_card_expire_date_text">
                <p className="subway-grey-street">{data.card5_location}</p>
                <p className="subway-grey-street">{data.card_5_expire_in_days}</p>
              </div>
            </div>
          </div>
          <form>
          <div className="Popular_sales_card_view_deal_button">
            <button type='submit' className="view-deal4">{data.View_Deal}</button>
          </div>
          </form>
        </div>
      </div>
      <div className="div116">
        <div className="Popular_sales_card_image">
          <img
            className="product-1641248058-284-thumbj-icon"
            alt=""
            src={data.card6_img}
          /><button className="div118">
            <div className="fashion2">{data.card6_title}</div>
          </button>
          <div className="div119"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_8260_13119)">
<rect x="2" y="1" width="36" height="36" rx="5" fill="black" fill-opacity="0.75"/>
<path d="M20.5167 26.3417C20.2333 26.4417 19.7667 26.4417 19.4833 26.3417C17.0667 25.5167 11.6667 22.075 11.6667 16.2417C11.6667 13.6667 13.7417 11.5834 16.3 11.5834C17.8167 11.5834 19.1583 12.3167 20 13.45C20.8417 12.3167 22.1917 11.5834 23.7 11.5834C26.2583 11.5834 28.3333 13.6667 28.3333 16.2417C28.3333 22.075 22.9333 25.5167 20.5167 26.3417Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_8260_13119" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8260_13119"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8260_13119" result="shape"/>
</filter>
</defs>
</svg>

</div>
        </div>
        <div className="div120">
          <div className="Popular_sales_card_text_row">
            <div className="span1">
              <div className="sale-in">{data.card_sale_text}</div>
            </div>
            <div className="h45">
              <div className="dotti-signup">
               <b>{data.card6_subway_buy}</b>
              </div>
            </div>
            <div className="Popular_sales_card__location">
              <div className="subway-grey-street"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8260_13138)">
<path d="M17.5 8.33337C17.5 14.1667 10 19.1667 10 19.1667C10 19.1667 2.5 14.1667 2.5 8.33337C2.5 6.34425 3.29018 4.4366 4.6967 3.03007C6.10322 1.62355 8.01088 0.833374 10 0.833374C11.9891 0.833374 13.8968 1.62355 15.3033 3.03007C16.7098 4.4366 17.5 6.34425 17.5 8.33337Z" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 10.8334C11.3807 10.8334 12.5 9.71408 12.5 8.33337C12.5 6.95266 11.3807 5.83337 10 5.83337C8.61929 5.83337 7.5 6.95266 7.5 8.33337C7.5 9.71408 8.61929 10.8334 10 10.8334Z" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_8260_13138">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
</div>
              <div className="p2">
                <div className="subway-grey-street">{data.card6_location}</div>
              </div>
            </div>
            <div className="Popular_sales_card__expire">
              <div className="subway-grey-street"><svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3333 1.66663V4.99996M5.66667 1.66663V4.99996M1.5 8.33329H16.5M3.16667 3.33329H14.8333C15.7538 3.33329 16.5 4.07948 16.5 4.99996V16.6666C16.5 17.5871 15.7538 18.3333 14.8333 18.3333H3.16667C2.24619 18.3333 1.5 17.5871 1.5 16.6666V4.99996C1.5 4.07948 2.24619 3.33329 3.16667 3.33329Z" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</div>
              <div className="Popular_sales_card__expire_text">
                <div className="subway-grey-street">{data.expire}</div>
                <div className="subway-grey-street">{data.card_6_expire_in_days}</div>
              </div>
            </div>
          </div>
          {/* <div className="button4">
            <div className="subscribe">{data.View_Deal}</div>
          </div> */}
          <form>
           <div className='Popular_sales_card_view_deal_button'>
            <button type='submit' className='view-deal4'>View Deal</button>
          </div>
          </form>
        </div>
      </div>
      <div className="div127">
        <div className="Popular_sales_card_image">
          <img
            className="product-1641248058-284-thumbj-icon"
            alt=""
            src={data.card7_img}
          /><button className="div129">
            <div className="fashion2">{data.card7_title}</div>
          </button>
          <div className="div119"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_8260_13119)">
<rect x="2" y="1" width="36" height="36" rx="5" fill="black" fill-opacity="0.75"/>
<path d="M20.5167 26.3417C20.2333 26.4417 19.7667 26.4417 19.4833 26.3417C17.0667 25.5167 11.6667 22.075 11.6667 16.2417C11.6667 13.6667 13.7417 11.5834 16.3 11.5834C17.8167 11.5834 19.1583 12.3167 20 13.45C20.8417 12.3167 22.1917 11.5834 23.7 11.5834C26.2583 11.5834 28.3333 13.6667 28.3333 16.2417C28.3333 22.075 22.9333 25.5167 20.5167 26.3417Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_8260_13119" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8260_13119"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8260_13119" result="shape"/>
</filter>
</defs>
</svg></div>
        </div>
        <div className="div120">
          <div className="Popular_sales_card_text_row">
            <div className="span1">
              <div className="sale-in">{data.card_sale_text}</div>
            </div>
            <div className="h46">
              <div className="countdown-get">
               <b>{data.card7_subway_buy}</b>
              </div>
            </div>
            <div className="Popular_sales_card__location">
              <div className="subway-grey-street"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8260_13138)">
<path d="M17.5 8.33337C17.5 14.1667 10 19.1667 10 19.1667C10 19.1667 2.5 14.1667 2.5 8.33337C2.5 6.34425 3.29018 4.4366 4.6967 3.03007C6.10322 1.62355 8.01088 0.833374 10 0.833374C11.9891 0.833374 13.8968 1.62355 15.3033 3.03007C16.7098 4.4366 17.5 6.34425 17.5 8.33337Z" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 10.8334C11.3807 10.8334 12.5 9.71408 12.5 8.33337C12.5 6.95266 11.3807 5.83337 10 5.83337C8.61929 5.83337 7.5 6.95266 7.5 8.33337C7.5 9.71408 8.61929 10.8334 10 10.8334Z" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_8260_13138">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
</div>
              <div className="p2">
                <div className="subway-grey-street">{data.card7_location}</div>
              </div>
            </div>
            <div className="div135">
              <div className="subway-grey-street"><svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3333 1.66663V4.99996M5.66667 1.66663V4.99996M1.5 8.33329H16.5M3.16667 3.33329H14.8333C15.7538 3.33329 16.5 4.07948 16.5 4.99996V16.6666C16.5 17.5871 15.7538 18.3333 14.8333 18.3333H3.16667C2.24619 18.3333 1.5 17.5871 1.5 16.6666V4.99996C1.5 4.07948 2.24619 3.33329 3.16667 3.33329Z" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
              <div className="Popular_sales_card_expire_date_text">
                <div className="subway-grey-street">{data.expire}</div>
                <div className="subway-grey-street">{data.card_7_expire_in_days}</div>
              </div>
            </div>
          </div>
          {/* <div className="button4">
            <div className="subscribe">{data.View_Deal}</div>
          </div> */}
          <form>
           <div className='Popular_sales_card_view_deal_button'>
            <button type='submit' className='view-deal4'>View Deal</button>
          </div>
          </form>
        </div>
      </div>
      <div className="div138">
        <div className="Popular_sales_card_image">
          <img
            className="product-1641248058-284-thumbj-icon"
            alt=""
            src={data.card8_img}
          />
          <div className="Popular_sales_card__4_title">
            <div className="subway-grey-street">{data.card8_title}</div>
          </div>
          <div className="Popular_sales_card_like_icon"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_8260_13119)">
<rect x="2" y="1" width="36" height="36" rx="5" fill="black" fill-opacity="0.75"/>
<path d="M20.5167 26.3417C20.2333 26.4417 19.7667 26.4417 19.4833 26.3417C17.0667 25.5167 11.6667 22.075 11.6667 16.2417C11.6667 13.6667 13.7417 11.5834 16.3 11.5834C17.8167 11.5834 19.1583 12.3167 20 13.45C20.8417 12.3167 22.1917 11.5834 23.7 11.5834C26.2583 11.5834 28.3333 13.6667 28.3333 16.2417C28.3333 22.075 22.9333 25.5167 20.5167 26.3417Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_8260_13119" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8260_13119"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8260_13119" result="shape"/>
</filter>
</defs>
</svg>
</div>

        </div>
        <div className="Popular_sales_card_text_container">
          <div className="Popular_sales_card_text_row">
            <div className="span3">
              <div className="sale-in">{data.card_sale_text}</div>
            </div>
            <div className="h47">
              <div className="subway-buy"><b>{data.card8_subway_buy}</b></div>
            </div>
            <div className="Popular_sales_card__4_address">
              <div className="subway-grey-street"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.3333 1.66663H1.66665C1.44563 1.66663 1.23367 1.75442 1.07739 1.9107C0.92111 2.06698 0.833313 2.27895 0.833313 2.49996V5.83329C0.834763 6.34908 0.995712 6.85179 1.29409 7.27251C1.59248 7.69323 2.01369 8.01136 2.49998 8.18329V17.5C2.49998 17.721 2.58778 17.9329 2.74406 18.0892C2.90034 18.2455 3.1123 18.3333 3.33331 18.3333H16.6666C16.8877 18.3333 17.0996 18.2455 17.2559 18.0892C17.4122 17.9329 17.5 17.721 17.5 17.5V8.18329C17.9863 8.01136 18.4075 7.69323 18.7059 7.27251C19.0042 6.85179 19.1652 6.34908 19.1666 5.83329V2.49996C19.1666 2.27895 19.0788 2.06698 18.9226 1.9107C18.7663 1.75442 18.5543 1.66663 18.3333 1.66663ZM12.5 3.33329H14.1666V5.83329C14.1666 6.05431 14.0788 6.26627 13.9226 6.42255C13.7663 6.57883 13.5543 6.66663 13.3333 6.66663C13.1123 6.66663 12.9003 6.57883 12.7441 6.42255C12.5878 6.26627 12.5 6.05431 12.5 5.83329V3.33329ZM9.16665 3.33329H10.8333V5.83329C10.8333 6.05431 10.7455 6.26627 10.5892 6.42255C10.433 6.57883 10.221 6.66663 9.99998 6.66663C9.77896 6.66663 9.567 6.57883 9.41072 6.42255C9.25444 6.26627 9.16665 6.05431 9.16665 5.83329V3.33329ZM5.83331 3.33329H7.49998V5.83329C7.49998 6.05431 7.41218 6.26627 7.2559 6.42255C7.09962 6.57883 6.88766 6.66663 6.66665 6.66663C6.44563 6.66663 6.23367 6.57883 6.07739 6.42255C5.92111 6.26627 5.83331 6.05431 5.83331 5.83329V3.33329ZM3.33331 6.66663C3.1123 6.66663 2.90034 6.57883 2.74406 6.42255C2.58778 6.26627 2.49998 6.05431 2.49998 5.83329V3.33329H4.16665V5.83329C4.16665 6.05431 4.07885 6.26627 3.92257 6.42255C3.76629 6.57883 3.55433 6.66663 3.33331 6.66663ZM11.6666 16.6666H8.33331V13.3333C8.33331 12.8913 8.50891 12.4673 8.82147 12.1548C9.13403 11.8422 9.55795 11.6666 9.99998 11.6666C10.442 11.6666 10.8659 11.8422 11.1785 12.1548C11.4911 12.4673 11.6666 12.8913 11.6666 13.3333V16.6666ZM15.8333 16.6666H13.3333V13.3333C13.3333 12.4492 12.9821 11.6014 12.357 10.9763C11.7319 10.3511 10.884 9.99996 9.99998 9.99996C9.11592 9.99996 8.26808 10.3511 7.64296 10.9763C7.01784 11.6014 6.66665 12.4492 6.66665 13.3333V16.6666H4.16665V8.18329C4.47295 8.06959 4.75551 7.90006 4.99998 7.68329C5.45833 8.09326 6.0517 8.3199 6.66665 8.3199C7.28159 8.3199 7.87496 8.09326 8.33331 7.68329C8.79166 8.09326 9.38504 8.3199 9.99998 8.3199C10.6149 8.3199 11.2083 8.09326 11.6666 7.68329C12.125 8.09326 12.7184 8.3199 13.3333 8.3199C13.9483 8.3199 14.5416 8.09326 15 7.68329C15.2444 7.90006 15.527 8.06959 15.8333 8.18329V16.6666ZM17.5 5.83329C17.5 6.05431 17.4122 6.26627 17.2559 6.42255C17.0996 6.57883 16.8877 6.66663 16.6666 6.66663C16.4456 6.66663 16.2337 6.57883 16.0774 6.42255C15.9211 6.26627 15.8333 6.05431 15.8333 5.83329V3.33329H17.5V5.83329Z" fill="black"/>
</svg>
</div>
              <div className="p">
                <div className="subway-grey-street">
                {data.card8_address}
                </div>
              </div>
            </div>
            <div className="Popular_sales_card_location">
              <div className="subway-grey-street"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8260_13138)">
<path d="M17.5 8.33337C17.5 14.1667 10 19.1667 10 19.1667C10 19.1667 2.5 14.1667 2.5 8.33337C2.5 6.34425 3.29018 4.4366 4.6967 3.03007C6.10322 1.62355 8.01088 0.833374 10 0.833374C11.9891 0.833374 13.8968 1.62355 15.3033 3.03007C16.7098 4.4366 17.5 6.34425 17.5 8.33337Z" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 10.8334C11.3807 10.8334 12.5 9.71408 12.5 8.33337C12.5 6.95266 11.3807 5.83337 10 5.83337C8.61929 5.83337 7.5 6.95266 7.5 8.33337C7.5 9.71408 8.61929 10.8334 10 10.8334Z" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_8260_13138">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg></div>
              <div className="p1">
                <div className="subway-grey-street">{data.card8_location}</div>
              </div>
            </div>
            <div className="Popular_sales_card_expire_date">
              <div className="subway-grey-street"><svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3333 1.66663V4.99996M5.66667 1.66663V4.99996M1.5 8.33329H16.5M3.16667 3.33329H14.8333C15.7538 3.33329 16.5 4.07948 16.5 4.99996V16.6666C16.5 17.5871 15.7538 18.3333 14.8333 18.3333H3.16667C2.24619 18.3333 1.5 17.5871 1.5 16.6666V4.99996C1.5 4.07948 2.24619 3.33329 3.16667 3.33329Z" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
              <div className="Popular_sales_card_expire_date_text">
                <div className="subway-grey-street">{data.expire}</div>
                <div className="subway-grey-street">{data.card_8_expire_in_days}</div>
              </div>
            </div>
          </div>
          {/* <div className="button3">
            <div className="subscribe">{data.View_Deal}</div>
          </div> */}
          <form>
           <div className='Popular_sales_card_view_deal_button'>
            <button type='submit' className='view-deal4'>View Deal</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
})}
</>
  
  )
}

export default Popular_Sale