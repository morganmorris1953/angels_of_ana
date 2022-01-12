import React, { useState, useEffect } from 'react';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import { CheckoutForm, Wrapper } from './CheckoutForm';
/* import {useParams} from 'react-router-dom'; */
import { Table } from "react-bootstrap"
import ProductAPI from '../api/ProductAPI'
import Shop from './Shop.js'

function Cart() {
const [selectedProducts, setSelectedProducts] = useState([])
console.log('selectedProducts: ', selectedProducts)
const displayedArr = []
/* const params = useParams() */
/* console.log("selectedList: ", Shop.selectedList) */
useEffect(() => {
  getProds()
}, [])
const getProds = async () => {
  const data = await ProductAPI.fetchAllCartList()
  if (data){
    setSelectedProducts(data)
    for (let i=0; i <data.length; i++) {
     const displayedProd = await ProductAPI.fetchProductByID(data[i].product_id) 
      displayedArr.push(displayedProd)
      console.log('displayedArr: ', displayedArr)
    }
    /* selectedProducts gives user_id and product_id*/
  }
}
     const removeProduct = async (id) => {
      const remove = await ProductAPI.deleteCartItem(id)
        getProds()
       console.log(remove)
}

   const renderProducts = () => {
     return(
        displayedArr.map((item, index) => {
      return(
        <div>
          <br/>
          <tr>
            <button key={item.id} type='submit' onClick={() => {removeProduct(item.id)}}>Remove</button>
            <th>{item.name}</th>
        &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; 
            <th>{item.price}</th>
          </tr>
       </div>
      )
     }
     )
     )
  }

  return(

  <div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
    { /* <th>Description</th> */}
  </tr>
</thead>
<tbody>
  { renderProducts() }
</tbody>
      </Table>
    </div>

  )
}
export default Cart;
/* if (!props.Products) */
/* return null */
/*  */
/* return props.products.map((product, index) => { */
/* return ( */
/* <tr key={index}> */
/* <td><Link to={`${product.id}/`}>{ product.name }</Link></td> */
/* <td>{ product.price }</td> */
/* <td>{ product.description }</td> */
/* </tr> */
/* ) */
/* }) */


/* const data = ProductAPI.fetchAllProductList() */
/* setProducts(products => [...products, data]) */
/* console.log("DATA: ", data) */
/* console.log("prod1: ",  */
/* Promise.all([data]).then((values) => { */
/* console.log(values[0][0]) */
/* const firstPatch = values[0] */
/* return ( */
/* <div> */
/* <h3>Product: {firstPatch.name}</h3> */
/* <p>Price: {firstPatch.price}</p> */
/* <p>Description: {firstPatch.description}</p> */
/* </div> */
/* ) */
/* }) */
/* if (data) { */
/* setProducts(data) */
/* } */

/* useEffect(() => { */
  /* const getProducts = async () => { */
    /* const data = await ProductAPI.fetchAllProductList() */
    /* setProducts(products => [...products, data]) */
    /* console.log("DATA: ", data) */
    /* if (data) { */
      /* setProducts(data) */
    /* } */
  /* } */
  /* getProducts() */
/* }, []) */

// import {REACT_APP_PUBLISHABLE_KEY} from '../../.env'

// const stripePromise = loadStripe("pk_test_51K3gRwB9NwtY2gLjBpnSruJs15ObuDDNbWTpc8NY9LQk9TUpcQJRIckpgIzzCMvNyhFDnuJQUenip1PKJHOzAe1h00eYXUwmUc");
//
// const successMessage = () => {
  // return (
    // <div className="success-msg">
      // <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        // <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
      // </svg>
      // <div className="title">Payment Successful</div>
    // </div>
  // )
// }
 
// const cart = () => {
  // return (
    // <div>
  // <h1>Cart</h1>
    // </div>
  // )}


  // return (<React.Fragment>
    // <h4 className="d-flex justify-content-between align-items-center mb-3">
      // <span className="text-muted">Your cart</span>
      // <span className="badge bg-secondary badge-pill">3</span>
    // </h4>
    // <ul className="list-group mb-3">
      // <li className="list-group-item d-flex justify-content-between lh-condensed">
        // <div>
          // <h6 className="my-0">Patch</h6>
          // <small className="text-muted">Afghan flag patch</small>
        // </div>
        // <span className="text-muted">$20</span>
      // </li>
      // <li className="list-group-item d-flex justify-content-between lh-condensed">
        // <div>
          // <h6 className="my-0">Patch</h6>
          // <small className="text-muted">Commando patch</small>
        // </div>
        // <span className="text-muted">$20</span>
      // </li>
      // <li className="list-group-item d-flex justify-content-between lh-condensed">
        // <div>
          // <h6 className="my-0">Patch</h6>
          // <small className="text-muted">Peace sign patch</small>
        // </div>
        // <span className="text-muted">$20</span>
      // </li>
      // <li className="list-group-item d-flex justify-content-between bg-light">
        // <div className="text-success">
          // <h6 className="my-0">Promo code</h6>
          // <small>EXAMPLECODE</small>
        // </div>
        // <span className="text-success">-5</span>
      // </li>
      // <li className="list-group-item d-flex justify-content-between">
        // <span>Total (USD)</span>
        // <strong>$55</strong>
      // </li>
    // </ul>
  // </React.Fragment>)
// }
// function Cart() {
  // const [paymentCompleted, setPaymentCompleted] = useState(false);
//
  // return (
    // <div className="container">
      // <div className="py-5 text-center">
      // </div>
//
      // <div className="row s-box">
        // {paymentCompleted ? successMessage() : <React.Fragment>
          // <div className="col-md-5 order-md-2 mb-4">
            // {cart()}
          // </div>
          // <div className="col-md-7 order-md-1">
                      // {[> Checkout form <]}
                      // {[> <CheckoutForm /> <]}
          // </div>
        // </React.Fragment>}
      // </div>
//
    // </div>
  // );
// }
 
