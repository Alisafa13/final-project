import React, { useState, useEffect } from 'react';
import payImage from './Img/pay.png';
import './Pay.css';
import { Link, useNavigate } from 'react-router-dom';

const Pay = ({ addLibrary }) => {
  const [expiryDate, setExpiryDate] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvc, setCvc] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const sharedGame = JSON.parse(localStorage.getItem('sharedGame'));
    console.log('Shared Game Details:', sharedGame);
  }, []);

  const handleExpiryChange = (e) => {
    let value = e.target.value;
    value = value.replace(/[^0-9/]/g, '');
    if (value.length === 2 && expiryDate.length === 1 && value.charAt(2) !== '/') {
      value += '/';
    }
    setExpiryDate(value);
  };

  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setCardNumber(value);
  };

  const handleCvcChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 3);
    setCvc(value);
  };

  const handlePayButtonClick = () => {
    if (expiryDate.length === 5 && cardNumber.length === 16 && cvc.length === 3) {
      const sharedGame = JSON.parse(localStorage.getItem('sharedGame'));
      addLibrary(sharedGame);
      alert('Payment processed!');
      navigate("/library");
    } else {
      alert('Wrong card number, cvc, or MM/YY value!');
    }
  };

  const handleRefuseButtonClick = () => {
    alert('Payment refused!');
  };

  return (
    <div className='payContainer'>
      <div className='payLeftContainer'>
        <h2 className='enterCardInformation'>Enter card information</h2>
        <input
          className="payInput cardNumber"
          type='text'
          placeholder='Card number'
          minLength={16}
          maxLength={16}
          value={cardNumber}
          onChange={handleCardNumberChange}
          required
        />
        <div className='cardDetailsContainer'>
          <div>
            <input
              className="payInput mY"
              type='text'
              placeholder='MM/YY'
              minLength={5}
              maxLength={5}
              pattern="\d\d/\d\d"
              onChange={handleExpiryChange}
              value={expiryDate}
              required
            />
          </div>
          <div>
            <input
              className="payInput cvc"
              type='text'
              placeholder='CVC'
              minLength={3}
              maxLength={3}
              onChange={handleCvcChange}
              value={cvc}
              required
            />
          </div>
        </div>
        <br />
        <br />
        <br />
        <h3>Payment information</h3>
        <br />
        <p className='orderAmount'>Order amount</p>
        <b><p className='payPrice'>$29.99</p></b>
        <div className='payOrRefuse'>
          <div>
              <button className='payButton' onClick={handlePayButtonClick}>
                Pay
              </button>
          </div>
          <div>
            <Link to="*"><button className='refuseButton' onClick={handleRefuseButtonClick}>
              Refuse
            </button></Link>
          </div>
        </div>
      </div>
      <div className='imageContainer'>
        <img className='payImage' src={payImage} alt='' />
      </div>
    </div>
  );
};

export default Pay;
