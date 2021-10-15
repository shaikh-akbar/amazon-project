import React from 'react';
import "./Subtotal.css";
function Subtotal() {
    return (
        <div className = "Subtotal">
            <p>Subtotal (0 items):<strong>0</strong></p>
            <small className = "Subtotal--gift">
                <input type = "checkbox" />This Order
                 Contain A Gift
            </small>
            <button>Proceed To Buy</button>
        </div>
    )
}

export default Subtotal
