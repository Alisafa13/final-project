import React from 'react';
import Header from '../Components/Header';
import "./WishList.css";
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
const WishList = ({ wishlist, removeFromWishlist, userProfile, setUserProfile, signOut }) => {
    const handleRemoveFromWishlist = (game) => {
        removeFromWishlist(game);
    };

    return (
        <div className='wishListAll'>
        <div className='wishListContainer'>
            <Header userProfile={userProfile} setUserProfile={setUserProfile} signOut={signOut}/>
            <div className="wishlist-container">
                <h1 className='wishListName'>Wishlist</h1>
                {wishlist.length === 0 ? (
                    <p className='emptyWishlist'>Your wishlist is empty.</p>
                ) : (
                    <div className="wishListItems">
                        <div className='listItems'>
                            {wishlist.map((game, index) => (
                                <div key={index} className='listItem'>
                                    <div>
                                    <Link to={`/product/${game.id}`}><img className="wishListImage" src={game.background_image} alt={game.name} /></Link>
                                    </div>
                                    <div className='wishListGameNameButtonContainer'>
                                        <div className='wishListGameNameButtonContainer2'>
                                        <Link className='wishListGameName' to={`/product/${game.id}`}><div><h4 >{game.name}</h4></div></Link>
                                           <div className='wishListGameButton'><button className="wishListRemoveButton" onClick={() => handleRemoveFromWishlist(game)}>
                                                Remove
                                            </button>
                                            </div>
                                        </div>
                                        <div className='wishListPrice'>
                                        <h3>$29.99</h3>
                                    </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default WishList;
