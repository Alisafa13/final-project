import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import "./Basket.css";

const Basket = ({ library, userProfile, setUserProfile, signOut }) => {
  return (
    <div className='basketAll'>
      <Header userProfile={userProfile} setUserProfile={setUserProfile} signOut={signOut} />
      <div className='basketContainer'>
        <h1 className='libraryName'>Library</h1>
        {library.length === 0 ? (
          <p className='emptyLibrary'>Your library is empty.</p>
        ) : (
          <div>
            {library && library.map((game, index) => (
              (game.background_image && game.name) && (
                <div key={index} className='basketItem'>
                  <img className="basketImage" src={game.background_image} alt="" />
                  <h3 className='basketGameName'>{game.name}</h3>
                  <button className='playButton'>Play</button>
                </div>
              )
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Basket;
