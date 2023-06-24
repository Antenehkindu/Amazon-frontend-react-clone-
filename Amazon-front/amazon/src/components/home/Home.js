import React from 'react';
import "./Home.css"
import Product from '../products/Product';

function Home() {
  return (
  <div>
    <div className ="home__container">
      <img
      className ="home__image"
      src ="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_jpgl"/>
      
      <div className ="home__row">
        <Product 
        id ="1234"
        title ="Razer Kraken Gaming Headset: Lightweight Aluminum Frame - Retractable Noise Isolating Microphone - For PC, PS4, PS5, Switch, Xbox One, Xbox Series X & S, Mobile - 3.5 mm Headphone Jack - Classic Black"
        price ={18.99}
        rating ={5}
        image = "https://m.media-amazon.com/images/I/71APetaWkpL._AC_SX679_.jpg"
        />
        <Product 
        id ="234"
        title = "Marcy Dual Action Cross Training Recumbent Exercise Bike with Arm Exercisers, Gym Equipment for Work from Home Fitness, Black JX-7301"
        price ={279.99}
        rating={4}
        image="https://m.media-amazon.com/images/I/71E+oh38ZqL._AC_SX679_.jpg"
        />
      </div>

      <div className ="home__row">
        <Product 
        id ="34"
        title="Marcy Smith Cage Machine with Workout Bench and Weight Bar Home Gym Equipment SM-4008"
        price={589.00}
        rating={4}
        image="https://m.media-amazon.com/images/I/71Rk7mf3scL._AC_SX679_.jpg"
        />
        <Product 
        id ="45"
        title="Samsung Galaxy Tab E 8 16GB 4G (Verizon) (Renewed)"
        price={14.98}
        rating={4}
        image ="https://m.media-amazon.com/images/I/51HFEqLPcSL._AC_SX679_.jpg"
        />
        <Product 
        id ="56"
        title="Fitbit Inspire 2 Health & Fitness Tracker with a Free 1-Year Fitbit Premium Trial, 24/7 Heart Rate, Black/Rose, One Size (S & L Bands Included)"
        price={47.99}
        rating={4}
        image ="https://m.media-amazon.com/images/I/61vU0j6IJ2L._AC_SX679_.jpg"
        />
      </div>

      <div className ="home__row">
        <Product 
        id ="67"
        title="LightingWill DC12V 5Meter/16.4ft 48W SMD3528 600LEDs Infrared 940nm High Intensity 8mm Wide White PCB Flexible IR 940nm LED Strips 120LEDs 9.6W Per Meter, Non-Waterproof"
        price={29.99}
        rating={5}
        image ="https://m.media-amazon.com/images/I/61mH38FKS0L._AC_SX679_.jpg"
        />
        <Product
        id ="78"
        title="Moen 3942SRS Deck Mounted Kitchen Soap Dispenser with Above the Sink Refillable Bottle, Spot Resist Stainless"
        price={52.68}
        rating={5}
        image="https://m.media-amazon.com/images/I/61Qs3m+psdL._AC_SX679_.jpg"
        />
        <Product
        id="89"
        title="Franklin Brass MAX46-FB Maxted Towel Ring in Matte Black"
        price={15.00}
        rating={5}
        image="https://m.media-amazon.com/images/I/61qMuYQpbEL._AC_SX679_.jpg"
        />
      </div>
    </div>
  </div>
  )
}

export default Home
