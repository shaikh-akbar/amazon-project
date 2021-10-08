import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {Link} from'react-router-dom';

function Header() {
    return (
        <div className="header">
          <Link to ="/">
          <img className="header--logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon"/>
          </Link>
          <div className="header--nav">
<div className="location">
  < LocationOnIcon/>
  </div>   
    <div className="header--option">
        <span className="header--optionLineOne"> Hello </span>
        <span className="header--optionLineTwo"> Select Your Address </span>
    </div>
  </div>
  <div className="list">
    <label>
      <select className="listItem">
        <option>All Product</option>
        <option>Deals</option>
        <option>Alexa Skills</option>
        <option>amazon appliances</option>
        <option>car and motorbike</option>
        <option>app and games</option>
        <option>baby</option>
        <option>beauty</option>
        <option>clothing and furniture</option>
        <option>electronic</option>
        <option>gardens and outdoor</option>
        <option>software</option>
        <option>video games </option>
        <option>watches</option>
        <option>books and stationery</option>
        <option>laptop and computer</option>
        <option>all products available</option>
      </select>
      </label>
      </div> 
          
          <div className="header--search">
          <input className="header--searchInput" type="text" />
          {/* {material ui} */}
          <SearchIcon className="header--SearchIcon"/>
          </div>  

          <div className="header--nav">
            <div className="header--option">
            <span className="header--optionLineOne">Hello Guest</span>
            <span className="header--optionLineTwo">Sign In</span>
            </div>

            <div className="header--option">
                <span className="header--optionLineOne">Return</span>
            <span className="header--optionLineTwo">& Order</span>
            </div>

            <div className="header--option">
                <span className="header--optionLineOne">Your</span>
            <span className="header--optionLineTwo">Prime</span>
            </div>
            <Link to ="/Checkout">
          <div 
          className="header--optionBasket">  
          <ShoppingCartIcon />
          <span className="header--optionLineTwo header--basketcount">0</span> 
            </div>
            </Link>
            </div>
          


        </div>
    )
}

export default Header; 
