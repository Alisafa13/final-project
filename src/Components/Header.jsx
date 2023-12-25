import React, { useState, useEffect } from 'react';
import logo from "./Img/logoLemon.jpg";
import profile from "./Img/profile-user.png"
import gameFolder from "./Img/game-folder.png"
import wishList from "./Img/wishlist.png"
import "./Header.css";
import { NavLink, Link, useLocation } from "react-router-dom";

const Header = ({ setSearchMyData, setCategory, id, userProfile, setUserProfile, signOut }) => {
  const [isCategoriesVisible, setCategoriesVisible] = useState(false);
  const [isProfileVisible, setProfileVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem('userProfile')) || null;
    setUserProfile(savedProfile);
  }, []);

  useEffect(() => {
    if (location.pathname === "/wishlist" || location.pathname === "/library" || location.pathname === "/contact" || location.pathname === `/product/${id}`){
      hideElements();
    } else {
      showElements();
    }
  }, [location]);

  const genresSeem = () => {
    setCategoriesVisible(true);
  };

  const genresDontSeem = () => {
    setCategoriesVisible(false);
  };

  const profileSeem = () => {
    setProfileVisible(true);
  };

  const profileDontSeem = () => {
    setProfileVisible(false);
  };

  const handleCategorySelect = (category) => {
    setCategory(category);
    setCategoriesVisible(false);
  };

  const searchData = (e) => {
    setSearchMyData(e.target.value.toLowerCase());
  };



  const hideElements = () => {
    let search = document.querySelector(".search");
    let categories = document.querySelector(".categories2");
    search.style.display = "none";
    categories.style.display = "none";
    document.querySelector(".signIn").classList.add("signIn1");
  }

  const showElements = () => {
    let search = document.querySelector(".search");
    let categories = document.querySelector(".categories2");
    search.style.display = "block";
    categories.style.display = "block";
    document.querySelector(".home").classList.add("home1");
  }

  return (
    <div className='headerWrapper'>
      <div className='headerContainer'>
        <div><img className='logo' src={logo} alt="" /></div>
        <div>
          <NavLink to="*" className="home" activeClassName="nav-home" >Home</NavLink>
        </div>
        <div
          className={`categories`}
          onMouseOver={genresSeem}
          onMouseOut={genresDontSeem}
        >
          <NavLink className="categories2">Categories</NavLink>
        </div>
        <div className='searchInputContainer'>
          <input className='search' type="text" onChange={searchData} placeholder='Search...' />
        </div>
        <div>
          <NavLink to="/login" className='signIn'>Log in/Register</NavLink>
        </div>
        <div>
          <NavLink to="/wishlist" ><img className="wishList" src={wishList} alt="WishList" /></NavLink>
          <NavLink to="/library" ><img className="basket" src={gameFolder} alt="Basket" /></NavLink>
          <img
            className="profile"
            src={profile}
            alt="Profile"
            onMouseOver={profileSeem}
            onMouseOut={profileDontSeem} />
        </div>
      </div>
      <div
        className={`categories1 ${isCategoriesVisible ? 'visible' : 'hidden'}`}
        onMouseOver={genresSeem}
        onMouseOut={genresDontSeem}
      >
        <p onClick={() => handleCategorySelect("action")}>Action</p>
        <p onClick={() => handleCategorySelect("strategy")}>Strategy</p>
        <p onClick={() => handleCategorySelect("role-playing-games-rpg")}>RPG</p>
        <p onClick={() => handleCategorySelect("shooter")}>Shooter</p>
        <p onClick={() => handleCategorySelect("adventure")}>Adventure</p>
        <p onClick={() => handleCategorySelect("puzzle")}>Puzzle</p>
        <p onClick={() => handleCategorySelect("racing")}>Racing</p>
        <p onClick={() => handleCategorySelect("massively-multiplayer")}>Massively Multiplayer</p>
        <p onClick={() => handleCategorySelect("sports")}>Sports</p>
      </div>
      <div
        className={`profileElements ${isProfileVisible ? 'visible2' : 'hidden2'}`}
        onMouseOver={profileSeem}
        onMouseOut={profileDontSeem}
      >
        {userProfile ? (
          <>
            <p className='profileFullName'>{userProfile.firstName} {userProfile.lastName}</p>
            <p className='profileEmail'>{userProfile.email}</p>
            <div className='profileSignOutContainer'><button className='profileSignOut' onClick={signOut}>Sign out</button></div>
          </>
        ) : (<div className='profileSignContainer'><Link to="/login"><button className='profileSignIn'>Sign in</button></Link></div>)}
      </div>
    </div>
  );
};

export default Header;
