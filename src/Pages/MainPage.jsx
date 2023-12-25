import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
import { Autoplay, Pagination, EffectCards } from 'swiper/modules';
import "./MainPage.css";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import wishListButton from "./Img/e-commerce.png"
import basketButton from "./Img/shopping-bag.png"
import photo1 from "./Img/18f99765f9d1eb319b904dafadba273d.jpeg"
import photo2 from "./Img/1333016.jpeg"
import photo3 from "./Img/4749-1589910988-1340190085.webp"
import photo4 from "./Img/GOW.jpg"
import photo5 from "./Img/redDeadRedemption.jpg"
import photo6 from "./Img/rocketLeague.jpg";

const MainPage = ({ addToWishlist, wishlist, userProfile, setUserProfile, signOut }) => {
  const [searchMyData, setSearchMyData] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [resultData, setResultData] = useState([]);
  const [swiperShooter, setSwiperShooter] = useState([]);
  const [swiperAdventure, setSwiperAdventure] = useState([]);

  useEffect(() => {
    const apiKey = '95336678600c435bb7608ce8dffbf3c2';
    const apiUrl = 'https://api.rawg.io/api/games';

    let url = `${apiUrl}?key=${apiKey}`;

    if (selectedCategory && selectedCategory !== "movies" && searchMyData.trim() === "") {
      url += `&genres=${selectedCategory}`;
    }

    if (searchMyData) {
      url += `&search=${encodeURIComponent(searchMyData)}`;
    }

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setResultData(data.results);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [searchMyData, selectedCategory]);

  useEffect(() => {
    const apiKey = '95336678600c435bb7608ce8dffbf3c2';
    const apiUrl = 'https://api.rawg.io/api/games';
    let url = `${apiUrl}?key=${apiKey}&genres=shooter`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setSwiperShooter(data.results);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    const apiKey = '95336678600c435bb7608ce8dffbf3c2';
    const apiUrl = 'https://api.rawg.io/api/games';
    let url = `${apiUrl}?key=${apiKey}&genres=adventure`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setSwiperAdventure(data.results);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const addToSelectedGames = (game) => {
    if(userProfile == null){
      alert("Sign into your account!")
    }
    else{
      addToWishlist(game);
    }
  };

  return (
    <div className='mainAll'>
      <Header setSearchMyData={setSearchMyData} setCategory={setSelectedCategory} userProfile={userProfile} setUserProfile={setUserProfile} signOut={signOut}/>
      <div className='swiperContainer'>
        {searchMyData.trim() === "" && (
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide><img src={photo1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={photo2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={photo3} alt="" /></SwiperSlide>
            <SwiperSlide><img src={photo4} alt="" /></SwiperSlide>
            <SwiperSlide><img src={photo5} alt="" /></SwiperSlide>
            <SwiperSlide><img src={photo6} alt="" /></SwiperSlide>
          </Swiper>
        )}
      </div>
      <div className='gamesWrapper'>
        <div className='all'>
          {resultData.map((game, index) => (
            <div className='gameContainer' key={index}>
              <Link to={`/product/${game.id}`}>
                <img className="img" src={game.background_image} alt={game.name} />
              </Link>
              <p className='gameName'>{game.name}</p>
              <h5 className='genre'>{game.genres.map(genre => genre.name).join(', ')}</h5>
              {game.role && <h5>{game.role}</h5>}
              <p className='price'>$29.99</p>
              <div className='wishListAndBasketcontainer'>
                {!wishlist.some((item) => item.id === game.id) && (
                  <div onClick={() => addToSelectedGames(game)}>
                    <img className="wishlistButton" src={wishListButton} alt="Add to Wishlist" />
                  </div>
                )}
                <Link to={`/product/${game.id}`}>
                  <div><img className="basketButton" src={basketButton} alt="Go to Product" /></div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='swiperShooterContainer'>
        <h2 className='shooterGames'>Shooter Games</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            '@1.50': {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiperShooter"
        >
          {swiperShooter.map((game, index) => (
            <SwiperSlide key={index}>
              <Link to={`/product/${game.id}`}><img className="swiperShooterImage" src={game.background_image} alt="" /></Link>
              <p>{game.name}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='swiperAdventureContainer'>
        <div className='swiperAdventureAbout'>
          <p>Games provide an immersive escape into virtual worlds, where players can embark on thrilling adventures, solve challenging puzzles, and engage in strategic battles to achieve victory.</p>
          <p>From the excitement of multiplayer competitions to the solitary exploration of rich storylines, games offer a diverse spectrum of experiences, catering to players of all preferences and skill levels.</p>
          <p>In the realm of gaming, skill meets entertainment, and players find themselves at the intersection of strategy, creativity, and pure enjoyment, making each gaming session a unique and captivating experience.</p>
          <p>Whether you're a casual gamer seeking relaxation or a competitive player hungry for challenges, games offer a dynamic playground where imagination and skill collide, creating memorable moments and forging lasting connections.</p>
        </div>
        <div>
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiperAdventure"
      >
        {swiperAdventure.map((game, index) => (
          <SwiperSlide key={index}><Link to={`/product/${game.id}`}><img className="swiperAdventureImage" src={game.background_image} alt="" /></Link></SwiperSlide>
        ))}
      </Swiper>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;