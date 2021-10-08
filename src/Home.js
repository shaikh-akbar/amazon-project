import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
          <div className="home--container">
            <img className="home--image" src="https://m.media-amazon.com/images/I/71UhgZQzskL._SX3000_.jpg" alt="" />

            <div className="home--row">
            <Product 
               id="01"
               title="See U in C by Ali Karim Sayed (Author)"
               price={4450}
               image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg"
            />
            <Product 
               id="02"
               title="Noise ColorFit Pro 2 Full Touch Control Smart Watch"
               price={2799}
               image="https://m.media-amazon.com/images/I/61xzuXWWozS._SL1200_.jpg"
            />
            <Product 
               id="03"
               title="Apple iPhone 13 Mini (256GB) - Blue"
               price={"10 patti"}
               image="https://m.media-amazon.com/images/I/71X6mnUDSzL._SL1500_.jpg"
            />
            </div>
            <div className="home--row">
            <Product 
               id="04"
               title="Shining Diva Fashion Genuine Leather..."
               price={2199}
               image="https://m.media-amazon.com/images/I/514gLEGRFHL.jpg"
            />
            <Product 
               id="04"
               title="iFFALCON 139 cm (55 inches) 4K Ultra HD Smart"
               price={36000}
               image="https://m.media-amazon.com/images/I/71CR8r2rrWL._SL1500_.jpg"
            />
            
            </div>
            <div className="home--row">
            <Product 
               id="04"
               title="Lloyd  8.0 Kg Semi Automatic Top Load Washing Machine"
               price={11489}
               image="https://m.media-amazon.com/images/I/41NWhVO8BLL._SL1024_.jpg"
            />
            </div>
          </div>  
        </div>
    )
}

export default Home