import prod1 from '../assets/prod1.png'
import prod2 from '../assets/prod2.png'
import prod3 from '../assets/prod3.png'
import React, {useState, useEffect} from 'react';
import ProductRow from '../components/ProductRow.js';
import ProductContainer from '../components/ProductContainer.js';
import { Grid } from 'semantic-ui-react';
import ProductAPI from '../api/ProductAPI.js'
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements, useStripe, useElements } from '@stripe/react-stripe-js';
import {Link} from 'react-router-dom'
/* import user_id from '' */
// const stripe = loadStripe('pk_test_51K3gRwB9NwtY2gLjBpnSruJs15ObuDDNbWTpc8NY9LQk9TUpcQJRIckpgIzzCMvNyhFDnuJQUenip1PKJHOzAe1h00eYXUwmUc')



function Shop(props) {
  const [selectedList, setSelectedList] = useState([])
  /* if () */
// const [clientSecret, setClientSecret] = useState("");
// const [email, setEmail] = useState("");
// const [password1, setPassword1] = useState("");
// const [password2, setPassword2] = useState("");
// const [errors, setErrors] = useState("");
/* const stripe = useStripe(); */
/* const elements = useElements(); */
/* const patch1 = {'name': 'Afghanistan flag patch', 'price': 40, 'description': 'patch of Afghanistan flag'} */
/* const patch2 = {'name': 'Afghanistan peace patch', 'price': 40, 'description': 'Peace patch of Afghanistan flag'} */
/* const patch3 = {'name': 'Commando patch', 'price': 40, 'description': 'This is the commando patch'} */
/* const addedPatch = '' */
const [id, setID] = useState(1)
useEffect(()=>{

  const getProducts = async () => {

  }
  getProducts()
}, [])

const handleSubmit = async (id) => {
  /* console.log('product id: ', id) */
  /* console.log("Patch Info: ", patch) */
  /* if (id==1){ */
    /* addedPatch = patch1 */
    /* console.log(addedPatch.name, addedPatch.price) */
  /* } */
  const getProdInfo = await ProductAPI.fetchProductByID(id)
console.log('ProdInfo: ', getProdInfo)
const getUserID = await ProductAPI.fetchUser()
console.log('shop user ID: ', getUserID.user_id)
/* if (getUserID.id==null){ */
/* alert("You must be signed in to add products to your cart") */
/* } */
/* else { */
    const addProd = await ProductAPI.addToCart(getProdInfo.id, getUserID.user_id )
  console.log('addProd: ', addProd)
/* } */
}


  /* const response = fetch('localhost:8000/products').then((res) => res.json()) */
            /* .then((json) => { */
                /* this.setSelectedList({ */
                    /* items: json */
                /* }); */
            /* }) */
/*    */
  /* console.log(response) */
  /* setSelectedList([...selectedList, prod]) */
  /* console.log(selectedList) */

// const response = fetch('localhost:8000/cart', {
  // method: 'POST',
  // body: JSON.stringify({
    // this.state.name,
    // this.state.price,
    // this.state.description })
  // headers: {
    // 'content-type': 'application/JSON'}
// })

return (
    <div>
      <div style={{ display: 'flex', flexDirection:'row', justifyContent: 'space-around', width: '1800px', height: '400px'}}>
        <div>
          <ProductRow/>
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

        <ProductContainer />

        <div style={{flex: 1, resizeMode: 'contain', padding: '20px'}}>
          <img src={prod1} alt="" />
          <label htmlFor="patch1">Patch 1: $40 &emsp;</label>
          <button id='patch1' onClick={()=>handleSubmit(2)}>Add To Cart</button>
        </div>


        <div style={{flex: 1, resizeMode: 'contain', padding: '20px'}}>
          <img src={prod2} alt="" />
          <label htmlFor="patch2">Patch 2: $40 &emsp;</label>
          <button id='patch2' onClick={()=>handleSubmit(1)}>Add To Cart</button>
        </div>

        <div style={{flex: 1, resizeMode: 'contain', padding: '20px'}}>
          <img src={prod3} alt="" />
          <label htmlFor="patch3">Patch 3: $40 &emsp;</label>
          <button id='patch3' onClick={()=>handleSubmit(3)}>Add To Cart</button>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br />
      </div>
      <div>
        <form action='/create-checkout-session' method="POST">
          <Link to='/cart'>
            <button type='button'> Checkout </button> 
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Shop;

// const [products, setProducts] = useState(null);
  // const options = {
    // clientSecret,
  // };
  // const options = {clientSecret:'{{CLIENT_SECRET}}'}


      /* fetch('http://127.0.0.1:8000/api/v1/products', { */
          /* method: 'POST', */
          /* headers: { */
            /* 'Content-Type': 'application/json' */
          /* }, */
          /* body: JSON.stringify(user) */
        /* }) */
        /* .then(res => res.json()) */
        /* .then(data => { */
          /* if (data.key) { */
            /* console.log(data) */
            /* localStorage.clear(); */
            /* localStorage.setItem('token', data.key); */
            /* window.location.replace('http://localhost:3000/signup'); */
          /* } else { */
            /* console.log() */
            /* setEmail(''); */
            /* setPassword1(''); */
            /* setPassword2(''); */
            /* localStorage.clear(); */
            /* setErrors(true); */
          /* } */
        /* }); */
/*  */
/*  */
/*  */
/* return ( */
      /* <div className="App"> */
/*  */
      /* {clientSecret && ( */
/*  */
            /* <Elements stripe={stripe}> */
/* console.log(stripe.products.list()) */
 /* console.log('elements should be here') */
/*  */
        /* </Elements> */
/*  */
      /* )} */
/*  */
    /* </div> */
/* ) */
/*  */



    {/* lists the products */}
    // {<script type="text/javascript" src="https://assets.chec-cdn.com/v2/commerce.js"></script>}
    // console.log("product: ")
