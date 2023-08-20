import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="max-width header">
      <img
        className="header-logo"
        alt="zomato-logo"
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i className="ri-map-pin-line absolute-center location-icon"></i>
              <div>Bengaluru</div>
            </div>
            <i class="ri-arrow-down-s-fill absolute-center"></i>
          </div>
          <div className="location-search-separator"></div>
          <div className="header-searchBar">
            <i className="ri-search-2-line absolute-center search-icon"></i>
            <input
              placeholder="Search for restaurant, cuisine or a dish"
              className="search-input"
            />
          </div>
        </div>
        <div className="profile-wrapper">
          <img
            className="header-profile-image"
            alt="Proflie"
            src="https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3B%2A%2C%2A"
          />
          <span className="header-username">Nischit D S</span>
          <i className="ri-arrow-down-s-fill absolute-center profile-options-icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
