import React from 'react'
import './Checkout.css';
import Subtotal from "./Subtotal";



function Checkout() {
    return (
        <div className="Checkout">
            <div className="Checkout--left">
                <img className="Checkout--adv" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Jupiter21P1/pay_stripe_desk.png" alt="adv" />
                <div>
                    <h3 className="Checkout--title">Your Shopping Details</h3>
                </div>

            </div>

            <div className="Checkout--right">
                <Subtotal />


            </div>

        </div>
    )
}

export default Checkout
