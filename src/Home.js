import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>

     <div className='home_container'>
        <img  className="home_image" src="https://m.media-amazon.com/images/G/01/primevideo/seo/primevideo-seo-logo.png"  alt=""/>
     </div>

     <div className='home_row'>
        <Product id={1243} title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful" price={29.99} image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UF1000,1000_QL80_.jpg" rating={3}/>
        <Product  id={1293} title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5L Glass Bowl, Removable Splash Guard, 1000 W, Black" price={59.99} image="https://m.media-amazon.com/images/I/81rgIlDm6wL._AC_SY355_.jpg" rating={4}/>
        
        
     </div>

     <div className='home_row'>
     <Product id={1283} title="Apple 2022 11-inch iPad Pro (Wi-Fi, 256GB) - Space Grey (4th Generation)" price={159.99} image="https://m.media-amazon.com/images/I/81gC7frRJyL._SL1500_.jpg" rating={5}/>
     <Product id={1243} title="All-New Echo Dot (5th Gen, 2023 release) | Smart speaker with Bigger sound, Motion Detection" price={49.99} image="https://m.media-amazon.com/images/I/81bVIjpGEZL._SX425_.jpg" rating={4}/>
     <Product id={1237} title="Apple 2022 11-inch iPad Pro (Wi-Fi, 256GB) - Space Grey (4th Generation)" price={159.99} image="https://m.media-amazon.com/images/I/81gC7frRJyL._SL1500_.jpg" rating={5}/>
     </div>

     <div className='home_row'>
     <Product id={1293} title="Samsung 27-inch(68.4cm) 2K QHD Odyssey G7 Gaming, 240 Hz, 1ms Curved Monitor," price={29.99} image="https://m.media-amazon.com/images/I/81aWxlUqU4L._SX355_.jpg" rating={3}/>
          
     </div>
        
    </div>
  )
}

export default Home
