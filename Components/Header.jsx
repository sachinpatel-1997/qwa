import React from "react";
import dropdown from "./dropdown.jpg";
// import location from './location.jpg';
import input from "./search-normal.jpg";
import category1 from "./category.png";
import Store from "./Store.png";
import Deals from "./saless.png";
import location from "./locationn.jpg";
import logo from "../Components/dealbuddy_green and yellow_text_500 1.png";
import bag from "./bag.png";
import "./header.css";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="TopHeader">
          <div className="container">
            <div className="logo">
              <img src={logo} className="TransparentLogo" />
            </div>
            <div className="location">
              <form>
                <div>
                  <svg
                    className="Icon"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_8150_1541)">
                      <path
                        d="M17.5 8.83325C17.5 14.6666 10 19.6666 10 19.6666C10 19.6666 2.5 14.6666 2.5 8.83325C2.5 6.84413 3.29018 4.93647 4.6967 3.52995C6.10322 2.12343 8.01088 1.33325 10 1.33325C11.9891 1.33325 13.8968 2.12343 15.3033 3.52995C16.7098 4.93647 17.5 6.84413 17.5 8.83325Z"
                        stroke="#43DF9A"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10 11.3333C11.3807 11.3333 12.5 10.214 12.5 8.83325C12.5 7.45254 11.3807 6.33325 10 6.33325C8.61929 6.33325 7.5 7.45254 7.5 8.83325C7.5 10.214 8.61929 11.3333 10 11.3333Z"
                        stroke="#43DF9A"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_8150_1541">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="dropdown">
                  <p className="hamilton_text">Hamilton</p>
                  <i className="arrow down">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6.5L8 10.5L12 6.5"
                        stroke="#0F0F0F"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <option>1</option>
                    </svg>
                  </i>
                </div>
              </form>

              <form>
                <input
                  className="search__input1"
                  type="text"
                  placeholder="Find Your Perfect Sale"
                />
                <button type="submit" className="header-search-button">
                  <i class="fa fa-search"></i>
                </button>
              </form>
            </div>
          </div>

          <div className="header-title">
            <span className="header-title-name">Kia Ora, Aotearoa!</span>
            <span className="header-date">22 Jan, 2022</span>
          </div>
        </div>
      </div>

      <div className="category-header">
        <div className="category_bottom">
          <button className="ul" autofocus>
            <div className="a1">
              <div className="logo_bottom">
                <img src={category1} className="category_logo" />
              </div>
              <div className="bottom_text">Categories</div>
            </div>
            <div className="a1">
              <div className="logo_bottom">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 2H2C1.73478 2 1.48043 2.10536 1.29289 2.29289C1.10536 2.48043 1 2.73478 1 3V7C1.00174 7.61894 1.19488 8.2222 1.55294 8.72707C1.911 9.23193 2.41645 9.61369 3 9.82V21C3 21.2652 3.10536 21.5196 3.29289 21.7071C3.48043 21.8946 3.73478 22 4 22H20C20.2652 22 20.5196 21.8946 20.7071 21.7071C20.8946 21.5196 21 21.2652 21 21V9.82C21.5835 9.61369 22.089 9.23193 22.4471 8.72707C22.8051 8.2222 22.9983 7.61894 23 7V3C23 2.73478 22.8946 2.48043 22.7071 2.29289C22.5196 2.10536 22.2652 2 22 2ZM15 4H17V7C17 7.26522 16.8946 7.51957 16.7071 7.70711C16.5196 7.89464 16.2652 8 16 8C15.7348 8 15.4804 7.89464 15.2929 7.70711C15.1054 7.51957 15 7.26522 15 7V4ZM11 4H13V7C13 7.26522 12.8946 7.51957 12.7071 7.70711C12.5196 7.89464 12.2652 8 12 8C11.7348 8 11.4804 7.89464 11.2929 7.70711C11.1054 7.51957 11 7.26522 11 7V4ZM7 4H9V7C9 7.26522 8.89464 7.51957 8.70711 7.70711C8.51957 7.89464 8.26522 8 8 8C7.73478 8 7.48043 7.89464 7.29289 7.70711C7.10536 7.51957 7 7.26522 7 7V4ZM4 8C3.73478 8 3.48043 7.89464 3.29289 7.70711C3.10536 7.51957 3 7.26522 3 7V4H5V7C5 7.26522 4.89464 7.51957 4.70711 7.70711C4.51957 7.89464 4.26522 8 4 8ZM14 20H10V16C10 15.4696 10.2107 14.9609 10.5858 14.5858C10.9609 14.2107 11.4696 14 12 14C12.5304 14 13.0391 14.2107 13.4142 14.5858C13.7893 14.9609 14 15.4696 14 16V20ZM19 20H16V16C16 14.9391 15.5786 13.9217 14.8284 13.1716C14.0783 12.4214 13.0609 12 12 12C10.9391 12 9.92172 12.4214 9.17157 13.1716C8.42143 13.9217 8 14.9391 8 16V20H5V9.82C5.36757 9.68356 5.70664 9.48012 6 9.22C6.55002 9.71196 7.26207 9.98393 8 9.98393C8.73793 9.98393 9.44998 9.71196 10 9.22C10.55 9.71196 11.2621 9.98393 12 9.98393C12.7379 9.98393 13.45 9.71196 14 9.22C14.55 9.71196 15.2621 9.98393 16 9.98393C16.7379 9.98393 17.45 9.71196 18 9.22C18.2934 9.48012 18.6324 9.68356 19 9.82V20ZM21 7C21 7.26522 20.8946 7.51957 20.7071 7.70711C20.5196 7.89464 20.2652 8 20 8C19.7348 8 19.4804 7.89464 19.2929 7.70711C19.1054 7.51957 19 7.26522 19 7V4H21V7Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="bottom_text">Stores</div>
            </div>
            <div className="a1">
              <div className="logo_bottom">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 2H2C1.73478 2 1.48043 2.10536 1.29289 2.29289C1.10536 2.48043 1 2.73478 1 3V7C1.00174 7.61894 1.19488 8.2222 1.55294 8.72707C1.911 9.23193 2.41645 9.61369 3 9.82V21C3 21.2652 3.10536 21.5196 3.29289 21.7071C3.48043 21.8946 3.73478 22 4 22H20C20.2652 22 20.5196 21.8946 20.7071 21.7071C20.8946 21.5196 21 21.2652 21 21V9.82C21.5835 9.61369 22.089 9.23193 22.4471 8.72707C22.8051 8.2222 22.9983 7.61894 23 7V3C23 2.73478 22.8946 2.48043 22.7071 2.29289C22.5196 2.10536 22.2652 2 22 2ZM15 4H17V7C17 7.26522 16.8946 7.51957 16.7071 7.70711C16.5196 7.89464 16.2652 8 16 8C15.7348 8 15.4804 7.89464 15.2929 7.70711C15.1054 7.51957 15 7.26522 15 7V4ZM11 4H13V7C13 7.26522 12.8946 7.51957 12.7071 7.70711C12.5196 7.89464 12.2652 8 12 8C11.7348 8 11.4804 7.89464 11.2929 7.70711C11.1054 7.51957 11 7.26522 11 7V4ZM7 4H9V7C9 7.26522 8.89464 7.51957 8.70711 7.70711C8.51957 7.89464 8.26522 8 8 8C7.73478 8 7.48043 7.89464 7.29289 7.70711C7.10536 7.51957 7 7.26522 7 7V4ZM4 8C3.73478 8 3.48043 7.89464 3.29289 7.70711C3.10536 7.51957 3 7.26522 3 7V4H5V7C5 7.26522 4.89464 7.51957 4.70711 7.70711C4.51957 7.89464 4.26522 8 4 8ZM14 20H10V16C10 15.4696 10.2107 14.9609 10.5858 14.5858C10.9609 14.2107 11.4696 14 12 14C12.5304 14 13.0391 14.2107 13.4142 14.5858C13.7893 14.9609 14 15.4696 14 16V20ZM19 20H16V16C16 14.9391 15.5786 13.9217 14.8284 13.1716C14.0783 12.4214 13.0609 12 12 12C10.9391 12 9.92172 12.4214 9.17157 13.1716C8.42143 13.9217 8 14.9391 8 16V20H5V9.82C5.36757 9.68356 5.70664 9.48012 6 9.22C6.55002 9.71196 7.26207 9.98393 8 9.98393C8.73793 9.98393 9.44998 9.71196 10 9.22C10.55 9.71196 11.2621 9.98393 12 9.98393C12.7379 9.98393 13.45 9.71196 14 9.22C14.55 9.71196 15.2621 9.98393 16 9.98393C16.7379 9.98393 17.45 9.71196 18 9.22C18.2934 9.48012 18.6324 9.68356 19 9.82V20ZM21 7C21 7.26522 20.8946 7.51957 20.7071 7.70711C20.5196 7.89464 20.2652 8 20 8C19.7348 8 19.4804 7.89464 19.2929 7.70711C19.1054 7.51957 19 7.26522 19 7V4H21V7Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="bottom_text">Deals</div>
            </div>
            <div className="a1">
              <div className="logo_bottom">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_8203_886)">
                    <path
                      d="M17.5 8.33333C17.5 14.1667 10 19.1667 10 19.1667C10 19.1667 2.5 14.1667 2.5 8.33333C2.5 6.34421 3.29018 4.43655 4.6967 3.03003C6.10322 1.62351 8.01088 0.833333 10 0.833333C11.9891 0.833333 13.8968 1.62351 15.3033 3.03003C16.7098 4.43655 17.5 6.34421 17.5 8.33333Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 10.8333C11.3807 10.8333 12.5 9.71404 12.5 8.33333C12.5 6.95262 11.3807 5.83333 10 5.83333C8.61929 5.83333 7.5 6.95262 7.5 8.33333C7.5 9.71404 8.61929 10.8333 10 10.8333Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_8203_886">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="bottom_text">Map</div>
            </div>
          </button>
          <div className="vendor_login">
            <div className="a4">
              <div className="vendor_login_icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26 15 3.41 18.13 3.41 22"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="vendor_login_text">Vendor Login</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
