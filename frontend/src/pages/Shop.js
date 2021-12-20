// import patch1 from '../assets/6.jpeg'
import React, {Component} from 'react';
// import Commerce from '@chec/commerce.js';
import ProductRow from '../components/ProductRow.js';
import ProductContainer from '../components/ProductContainer.js';
import { Image, Grid, Divider } from 'semantic-ui-react';



function Shop(props) {
    // const commerce = new Commerce('{pk_test_367837d29c7614801c005aa6ba4454c3e1215275211a9}', true);   //the "true" is for debug mode in commerce.js; this API key is the sandbox key, it's not possible to debug with a live key

    {/* lists the products */}
    {<script type="text/javascript" src="https://assets.chec-cdn.com/v2/commerce.js"></script>}
    console.log("product: ")
    return (
        <div style={{ display: 'flex', flexDirection:'row', justifyContent: 'space-around', width: '1800px', height: '400px'}}>
            <div>
                <ProductRow/>
            The Shop
            </div>



            <div className="App">
      <Grid centered stackable padded relaxed>
        <Grid.Column className='left-column' width={5}>
        </Grid.Column>
        <Grid.Column width={9}>
          <ProductContainer />
        </Grid.Column>
      </Grid>
    </div>


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

        </div>
    )
}

export default Shop;
