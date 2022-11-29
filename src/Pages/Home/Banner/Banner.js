import React from 'react';
import image from '../../../assets/images/sell6.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero h-screen -mb-30 -py-10" style={{ backgroundImage: `url(${image})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Sell Cell</h1>
      <p className="mb-5">The Best Place For Buy And Sell.The Best Place For Sell Used Phones.The Best Place For Sell Used Phones</p>
     
      <button className="btn bg-green-700">Get Started</button>
    </div>
  </div>
</div>


        </div>
    );
};

export default Banner;