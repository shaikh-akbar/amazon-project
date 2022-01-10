import React from 'react'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal";



function Checkout() {
const [{cart, user}, dispatch] = useStateValue();
    return (
        <div className="Checkout">
            <div className="Checkout--left">
                <img className="Checkout--adv" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Jupiter21P1/pay_stripe_desk.png" alt="adv" />
                <div>
                    <h3>Hello,{user?.email}</h3>
                    <h3 className="Checkout--title">Your Shopping Details</h3>
                    {cart.map(item=>(
                        <CheckoutProduct
                        id = {item.id}
                        title =  {item.title}
                        image = {item.image}
                        price = {item.price}
                        />
                    ))}
                    {/* {CheckoutProduct} */}
                    {/* {CheckoutProduct} */}
                </div>

            </div>

            <div className="Checkout--right">
                <Subtotal />
            </div>

        </div>
    )
}

export default Checkout
