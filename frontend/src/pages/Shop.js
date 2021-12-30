// import patch1 from '../assets/6.jpeg'
import React, {Component} from 'react';
// import Commerce from '@chec/commerce.js';
import ProductRow from '../components/ProductRow.js';
import ProductContainer from '../components/ProductContainer.js';
import { Image, Grid, Divider } from 'semantic-ui-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
// import { CheckoutForm, Wrapper } from './CheckoutForm';

const stripePromise = loadStripe("pk_test_51K3gRwB9NwtY2gLjBpnSruJs15ObuDDNbWTpc8NY9LQk9TUpcQJRIckpgIzzCMvNyhFDnuJQUenip1PKJHOzAe1h00eYXUwmUc");

function Shop(props) {

  // const options = {clientSecret:'{{CLIENT_SECRET}}'}
  const options = ''
return (
  <div>
  <h1>Shop</h1>
<Elements stripe={stripePromise} options={options}>
  {curl https://api.stripe.com/v1/products \
  -u sk_test_51K3gRwB9NwtY2gLjmNEvwrWCxjBHIi3C74kktSSyudX8x0Q0uGFwlKgIWRLTlgdBzX5s4l0uI1irP28B7uKsvvbI00ZfF4wEQj: \
  -d limit=3 \
  -G}
  </Elements>
  </div>
)



    {/* lists the products */}
    // {<script type="text/javascript" src="https://assets.chec-cdn.com/v2/commerce.js"></script>}
    // console.log("product: ")
    // return (
        // <div style={{ display: 'flex', flexDirection:'row', justifyContent: 'space-around', width: '1800px', height: '400px'}}>
            // <div>
                // <ProductRow/>
            // The Shop
            // </div>
//
//
//
            // <div className="App">
      // <Grid centered stackable padded relaxed>
        // <Grid.Column className='left-column' width={5}>
        // </Grid.Column>
        // <Grid.Column width={9}>
          // <ProductContainer />
        // </Grid.Column>
      // </Grid>
    // </div>
//

            {/* <ProductContainer /> */}
            {/* // commerce.products.list().then((product) => console.log(product)) */}


            {/* <div style={{flex: 1, resizeMode: 'contain', padding: '20px'}}>
                <img src={patch1} alt="" />
                <label htmlFor="patch1">Patch 1: $19.99 &emsp;</label>
                <button id='patch1'>Add To Cart</button>
            </div>

            <div style={{flex: 1, resizeMode: 'contain', padding: '20px'}}>
                <img src={patch1} alt="" />
                <label htmlFor="patch2">Patch 2: $19.99 &emsp;</label>
                <button id='patch2'>Add To Cart</button>
            </div>

            <div style={{flex: 1, resizeMode: 'contain', padding: '20px'}}>
                <img src={patch1} alt="" />
                <label htmlFor="patch3">Patch 3: $19.99 &emsp;</label>
                <button id='patch3'>Add To Cart</button>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /> */}

        // </div>
    // )
}

export default Shop;
