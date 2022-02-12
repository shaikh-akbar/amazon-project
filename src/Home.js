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
            
            <div className = 'home--row1'>
            <Product 
            id = "06"
            title="womens wear"
            price={3999}
            image="https://rukminim1.flixcart.com/flap/150/150/image/d922807ba00a5cff.jpg?q=70"
            />
            </div>
            <div className = 'home--row2'>
            <Product 
               id="02"
               title="Noise ColorFit Pro 2 Full Touch Control Smart Watch"
               price={2799}
               image="https://m.media-amazon.com/images/I/61xzuXWWozS._SL1200_.jpg"
            />
            </div>
            <div className='home--row3'>
            <Product 
               id="03"
               title="Apple iPhone 13 Mini (256GB) - Blue"
               price={95000}
               image="https://m.media-amazon.com/images/I/71X6mnUDSzL._SL1500_.jpg"
            />
            </div>
            <div className='home--row4'>
             <Product 
               id="02"
               title="Noise ColorFit Pro 2 Full Touch Control Smart Watch"
               price={2799}
               image="https://m.media-amazon.com/images/I/61xzuXWWozS._SL1200_.jpg"
            />
            </div>
            </div>
            <div className="home--row5">
            <Product 
               id="04"
               title="Shining Diva Fashion Genuine Leather..."
               price={2199}
               image="https://m.media-amazon.com/images/I/514gLEGRFHL.jpg"
            />
            <div className="home--row51">
            <Product 
            id="08"
            title="Mens wear"
            price ={2300}
            image="https://rukminim1.flixcart.com/image/150/150/kflftzk0/jacket/p/c/w/m-hljk000342-highlander-original-imafwyypzzjecdaj.jpeg?q=70"
            />
            </div>
            <div className='home--row52'>
            <Product 
               id="04"
               title="iFFALCON 139 cm (55 inches) 4K Ultra HD Smart"
               price={36000}
               image="https://m.media-amazon.com/images/I/71CR8r2rrWL._SL1500_.jpg"
            />
            </div>
            <div className='home--row53'>
             <Product 
               id="02"
               title="Noise ColorFit Pro 2 Full Touch Control Smart Watch"
               price={2799}
               image="https://m.media-amazon.com/images/I/61xzuXWWozS._SL1200_.jpg"
            />
            </div>
            </div>
            <div className="home--row6">
            <Product 
               id="04"
               title="Lloyd  8.0 Kg Semi Automatic Top Load Washing Machine"
               price={11489}
               image="https://m.media-amazon.com/images/I/41NWhVO8BLL._SL1024_.jpg"
            />
            <div className="home--row61">
            <Product 
               id="04"
               title="Shining Diva Fashion Genuine Leather..."
               price={2199}
               image="https://m.media-amazon.com/images/I/514gLEGRFHL.jpg"
            />
            </div>
            <div className="home--row62">
            <Product 
               id="04"
               title="Shining Diva Fashion Genuine Leather..."
               price={2199}
               image="https://rukminim1.flixcart.com/image/150/150/ksc46fk0/fabric/v/m/j/no-2-35-m-unstitched-shankar01-trijal-fab-original-imag5xd6gfptxtqp.jpeg?q=70"
            />
            </div>
            </div>
          </div>  
        </div>
    )
}

export default Home