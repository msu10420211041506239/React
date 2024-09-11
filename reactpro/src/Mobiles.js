import React from 'react';
import Phone from './mobiles.json';
import './Home.css';

const Mobiles = () => {
  const Purchase = () =>{
    alert("Give your address in ContactPage")
  }
  return (
    <div id="mu">
      {Phone.map((item, index) => (
        <div id="blow">
          <img src={item.Image} alt={item.Products} id='jo' />
          <h3>{item.Products}</h3>
          <h3>{item.Rate}</h3>
          <button id="add" onClick={Purchase}>Buy Now</button>   
        </div>
      ))}
    </div>
  );
};

export default Mobiles;
