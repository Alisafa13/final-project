import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import "./Product.css";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ratings from "./Img/stars.png";

const Product = ({ library }) => {
  const { id } = useParams();
  const [gameDetails, setGameDetails] = useState(null);

  useEffect(() => {
    const apiKey = '95336678600c435bb7608ce8dffbf3c2';
    const apiUrl = `https://api.rawg.io/api/games/${id}?key=${apiKey}`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setGameDetails(data);
      })
      .catch((error) => {
        console.error('Error fetching game details:', error);
      });
  }, [id]);

  const handleShareButtonClick = () => {
    if (gameDetails) {
      localStorage.setItem('sharedGame', JSON.stringify(gameDetails));
    }
  };

  if (!gameDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className='productWrapper'>
      <div className='productContainer'>
        <Header id={id} />
        <div className='productElements'>
          <div className='ratingAndName'>
            <h1 className='productName'>{gameDetails.name}</h1>
            <div className='ratingContainer'>
              <img className='ratingStars' src={ratings} alt="" />
              <div className='ratingAmountContainer'><h4 className='ratingAmount'>{gameDetails.rating}</h4></div>
            </div>
          </div>
          <div className='productAll'>
            <div className='productImageDevices'>
              {gameDetails.background_image &&
                <div>
                  <img className="productImage" key={id} src={gameDetails.background_image} alt="" />
                  {gameDetails.platforms && (
                    <p className='compatibleDevices'>Compatible Devices: <span className='devices'>{gameDetails.platforms.map(platform => platform.platform.name).join(', ')}</span></p>
                  )}
                  <p className='releaseDate'>Release Date: <span className='date'>{gameDetails.released}</span></p>
                  {!library.some((item) => item.id === gameDetails.id) ? (
                    <Link to="/pay">
                      <button className='buttonBuy' onClick={handleShareButtonClick}>
                        Buy
                      </button>
                    </Link>
                  ) : (<Link to='/basket'><button className='buttonBuy'>Purchased</button></Link>)}

                </div>
              }
            </div>
            <div className='productDescribeContainer'>
              {gameDetails.description_raw && (
                <p>{gameDetails.description_raw}</p>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Product;