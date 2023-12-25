import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import MainPage from './Pages/MainPage';
import Product from './Pages/Product';
import WishList from './Pages/WishList';
import Pay from './Pages/Pay';
import Library from './Pages/Library';
import Connection from './Pages/Connection';

const App = () => {
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [library, setLibrary] = useState([]);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    setRegisteredUsers(savedUsers);
  }, []);

  const handleRegister = (userData) => {
    const updatedUsers = [...registeredUsers, userData];
    setRegisteredUsers(updatedUsers);
    localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));
  };

  const handleLogin = (userData) => {
    return registeredUsers.some(
      (user) => user.email === userData.email && user.password === userData.password
    );
  };

  const addToWishlist = (game) => {
    if (!wishlist.some((item) => item.id === game.id)) {
      setWishlist((prevWishlist) => [...prevWishlist, game]);
    }
  };
  const removeFromWishlist = (game) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item !== game));
  };
  const addLibrary = (payGame) => {
    setLibrary((prevBasket) => [...prevBasket, payGame]);
    console.log('Payment processed!');
  };
  const signOut = () => {
    setUserProfile(null); 
  
  }
  
  return (
    <div>
      <Routes>
        <Route
          path="/register"
          element={<Registration onRegister={handleRegister} />}
        />
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} registeredUsers={registeredUsers} />}
        />
        <Route
          path="/wishlist"
          element={<WishList wishlist={wishlist} removeFromWishlist={removeFromWishlist} userProfile={userProfile} setUserProfile={setUserProfile} signOut={signOut}/>}
        />
        <Route
          path="/product/:id"
          element={<Product addToWishlist={addToWishlist} addLibrary={addLibrary} library={library} userProfile={userProfile} setUserProfile={setUserProfile} signOut={signOut}/>}
        />
        <Route
          path="*"
          element={<MainPage addToWishlist={addToWishlist} wishlist={wishlist} userProfile={userProfile} setUserProfile={setUserProfile} signOut={signOut}/>}
        />
        <Route path="/pay" element={<Pay library={library} addLibrary={addLibrary} />} />
        <Route path='/library' element={<Library library={library} userProfile={userProfile} setUserProfile={setUserProfile} signOut={signOut}/>} />
        <Route path="/contact" element={<Connection userProfile={userProfile} setUserProfile={setUserProfile} signOut={signOut}/>}/>
      </Routes>
    </div>
  );
};

export default App;