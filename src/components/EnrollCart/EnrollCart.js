import React from 'react';

const EnrollCart = (props) => {
    const enrollCart = props.enrollCart;
    let total = 0;
    for (let i = 0; i < enrollCart.length; i++) {
        const course = enrollCart[i];
        total = total + course.price;
        
    }
    let totalPrice = Number(total).toFixed(2);
    return (
        <div>
            <h3>Order Summary</h3>
            <h4>Enrolled Course: {enrollCart.length}</h4>
            <h5>Total Price: {totalPrice}$</h5>

        </div>
    );
};

export default EnrollCart;