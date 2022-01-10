import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {Link} from'react-router-dom';
import { useStateValue } from './StateProvider';
import {auth} from "./firebase";

function Header() {
  const[{cart,user},dispatch] = useStateValue();
   
  const handleAuthentication = () =>{
    if(user){
      auth.signOut();
    }
  }


    return (
        <div className="header">
          <Link to ="/">
          <img className="header--logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM7TXO_g3fRLqv6PepNx76fVrsrTrcYMDv8g&usqp=CAU" alt="amazon"/>
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
            <Link to = {!user &&'/login'}>
            <div onClick={handleAuthentication}className="header--option">
            <span className="header--optionLineOne">Hello {!user?'Guest':user.email}</span>
            <span className="header--optionLineTwo">{user ?'Sign Out':'Sign In'}</span>
            </div>
            </Link>

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
          <span className="header--optionLineTwo header--basketcount">{cart.length}</span> 
            </div>
            </Link>
            </div>
          


        </div>
    )
}

export default Header; 
