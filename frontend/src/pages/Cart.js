import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CheckoutForm, Wrapper } from './CheckoutForm';
// import {REACT_APP_PUBLISHABLE_KEY} from '../../.env'

const stripePromise = loadStripe("pk_test_51K3gRwB9NwtY2gLjBpnSruJs15ObuDDNbWTpc8NY9LQk9TUpcQJRIckpgIzzCMvNyhFDnuJQUenip1PKJHOzAe1h00eYXUwmUc");

const successMessage = () => {
  return (
    <div className="success-msg">
      <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
      </svg>
      <div className="title">Payment Successful</div>
    </div>
  )
}
 
const cart = () => {
  return (
  // price_1K8lHGB9NwtY2gLjmhE9kIlD
  <h1>hello</h1>
  )
  // return (<React.Fragment>
    // <h4 className="d-flex justify-content-between align-items-center mb-3">
      // <span className="text-muted">Your cart</span>
      // <span className="badge bg-secondary badge-pill">3</span>
    // </h4>
    // <ul className="list-group mb-3">
      // <li className="list-group-item d-flex justify-content-between lh-condensed">
        // <div>
          // <h6 className="my-0">Product name</h6>
          // <small className="text-muted">Brief description</small>
        // </div>
        // <span className="text-muted">₹1200</span>
      // </li>
      // <li className="list-group-item d-flex justify-content-between lh-condensed">
        // <div>
          // <h6 className="my-0">Second product</h6>
          // <small className="text-muted">Brief description</small>
        // </div>
        // <span className="text-muted">₹800</span>
      // </li>
      // <li className="list-group-item d-flex justify-content-between lh-condensed">
        // <div>
          // <h6 className="my-0">Third item</h6>
          // <small className="text-muted">Brief description</small>
        // </div>
        // <span className="text-muted">₹500</span>
      // </li>
      // <li className="list-group-item d-flex justify-content-between bg-light">
        // <div className="text-success">
          // <h6 className="my-0">Promo code</h6>
          // <small>EXAMPLECODE</small>
        // </div>
        // <span className="text-success">-₹500</span>
      // </li>
      // <li className="list-group-item d-flex justify-content-between">
        // <span>Total (INR)</span>
        // <strong>₹2000</strong>
      // </li>
    // </ul>
  // </React.Fragment>)
}
 
function Cart() {
  const [paymentCompleted, setPaymentCompleted] = useState(false);
 
  return (
    <div className="container">
      <div className="py-5 text-center">
      </div>
 
      <div className="row s-box">
        {paymentCompleted ? successMessage() : <React.Fragment>
          <div className="col-md-5 order-md-2 mb-4">
            {cart()}
          </div>
          <div className="col-md-7 order-md-1">
                      {/* Checkout form */}
                      {/* <CheckoutForm /> */}
          </div>
        </React.Fragment>}
      </div>
 
    </div>
  );
}
 
export default Cart;
