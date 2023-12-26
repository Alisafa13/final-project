import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import "./Library.css";

const Library = ({ library, userProfile, setUserProfile, signOut }) => {
  return (
    <div className='libraryAll'>
      <Header userProfile={userProfile} setUserProfile={setUserProfile} signOut={signOut} />
      <div className='libraryContainer'>
        <h1 className='libraryName'>Library</h1>
        {library.length === 0 ? (
          <p className='emptyLibrary'>Your library is empty.</p>
        ) : (
          <div>
            {library && library.map((game, index) => (
              (game.background_image && game.name) && (
                <div key={index} className='libraryItem'>
                  <img className="libraryImage" src={game.background_image} alt="" />
                  <h3 className='libraryGameName'>{game.name}</h3>
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

export default Library;
