import React from 'react'
import './modal.css';
const Modal = () => {
  return (
    <div className="modal" id="myModal" role="dialog">
    <div className="modal-dialog">
    
     
     
      <div className="modal-content">
   <div className="header">
   	<h5>Select City/Town</h5>
       <button type="button" class="close" data-dismiss="modal">&times;</button>
   </div>
    
    <div className="content">
    	<form className="search-box">
        	<input type="text" placeholder="Select City/Town" className="input-search"/>
            <span className="search-btn12">
            	<i className="icon-search">
                	<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.33334 13.8333C10.6471 13.8333 13.3333 11.147 13.3333 7.83325C13.3333 4.51954 10.6471 1.83325 7.33334 1.83325C4.01963 1.83325 1.33334 4.51954 1.33334 7.83325C1.33334 11.147 4.01963 13.8333 7.33334 13.8333Z" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.62 14.2931C12.9733 15.3598 13.78 15.4665 14.4 14.5331C14.9666 13.6798 14.5933 12.9798 13.5666 12.9798C12.8066 12.9731 12.38 13.5665 12.62 14.2931Z" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </i>
            </span>
        </form>
    </div>
    <a className="current-location">
    	<span className="icon-navigation">
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 10L20 1L11 20L9 12L1 10Z" stroke="#a9a9a9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </span>
        <span>Current Location</span>
    </a>
    <div className="options">
    	<h6 className="option-header">Quick Options</h6>
        <div className="option-list">
        	<a className="nz-wide-title">NZ Wide</a>
            <a className="nz-wide-title">Hamilton</a>
            <a className="nz-wide-title">Rotorua</a>
            <a className="nz-wide-title">Tauranga</a>
        </div>
    </div>
  </div>

    </div>
  </div>
  )
}

export default Modal