import React, { useState, useEffect } from 'react';
import Commerce from '@chec/commerce.js'
import { Image, Grid, Divider } from 'semantic-ui-react';
import prod1 from '../assets/prod1.png';
import prod2 from '../assets/prod2.png';
import prod3 from '../assets/prod3.png';
import prod4 from '../assets/prod4.png';
import prod5 from '../assets/prod5.png';
import prod6 from '../assets/prod6.png';
import ProductCard from './ProductCard.js'

const ProductContainer = () => {


    // const commerce = new Commerce('pk_test_367837d29c7614801c005aa6ba4454c3e1215275211a9', true);   //the "true" is for debug mode in commerce.js; this API key is the sandbox key, it's not possible to debug with a live key

    // const commerce = new Commerce(process.env.commerceKey)
    const [products, setProducts] = useState([])

    // useEffect(() => {
    //     commerce.products.list()
    //       .then(res => {
    //         setProducts(res.data)
    //       })
    //       .catch(err => console.log(err))
    // },[])



    return (
        <>
            <Divider horizontal>Shop All Products</Divider>
            <Grid stackable columns='equal' centered>
                {products.map(product => <Grid.Column width={5} key={product.id}><ProductCard product={product} /></Grid.Column>)}
            </Grid>
        </>
    );
};




export default ProductContainer;