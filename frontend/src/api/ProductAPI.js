
const BASE_URL = "http://localhost:8000/"
const tryCatchFetch = async (url, paramsObj = null) => {
  try {
    const response = await fetch(url, paramsObj)
    /* console.log(response.status) */
    if (response.ok) { // boolean, TRUE = 200-299, FALSE = 1XX, 3XX, 4XX, 5XX
      if (response.status !== 204)
        return await response.json()
      else
        return response
    }
    else {
      throw new Error(`bad response: ${response.status} ${response.statusText}`)
    }
  }
  catch (e) {
    console.error(e)
    return null
  }
}


/* const saveUserID = (email) => { */
/* const UserID = fetch(BASE_URL + `get_email?${email}`) */
/* return UserID */
/* } */
/* changed to use user id */
const fetchUser = async (user_id) => {
  let email = JSON.parse(localStorage.getItem('email'))
  console.log(email)
  const url = BASE_URL + `get_email?email=${email}`
  /* console.log(url) */
  /* let userID = await fetch(url, { */
  /* }) */
  /* console.log('userID: ', userID) */

let userID = await fetch(url)
        .then(async response => {
            const data = await response.json();
            console.log('userID: ', data.user_id)
            // check for error response
            if (!response.ok) {
                // get error message from body or default to response statusText
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }

            this.setState({ totalReactPackages: data.total })
        })
        .catch(error => {
            /* this.setState({ errorMessage: error.toString() }); */
            console.error('There was an error!', error);
        })
  return await tryCatchFetch(url, userID)
}

/* const fetchUserByEmail = async (user_email) => { */
  /* const url = BASE_URL + `get_email?${user_email}` */
  /* const paramsObj = { */
    /* method: "GET", */
    /* headers: { */
      /* "Content-Type": "application.json" */
    /* }, */
    /* body: JSON.stringify({user_email: user_email, user_id:user_id}) */
  /* } */
  /* return await tryCatchFetch(url) */
/* } */
/* changed to use user id */
const fetchAllCartList = async () => {
  const url = BASE_URL + `cart/`
  return await tryCatchFetch(url)
}

const fetchProductByID = async (id) => {
  const url = BASE_URL + `products/${id}`
  return await tryCatchFetch(url)
}
/*changed url to use user id and prod id  */
const addToCart = async (prod_id, user_id) => {
  const url = BASE_URL + `cart/`
  const paramsObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({product_id: prod_id, user_id: user_id})
  }
  return await tryCatchFetch(url, paramsObj)
}

const deleteCartItem= async (id) => {
  const url = BASE_URL + `cart/${id}/`
  console.log('trying to delete ', id)
  const paramsObj = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  }
  return await tryCatchFetch(url, paramsObj)
}

/* const updateCart= async (productObj, id) => { */
  /* const url = BASE_URL + `cart/${id}/` */
  /* const paramsObj = { */
    /* method: "PUT", */
    /* headers: { */
      /* "Content-Type": "application/json" */
    /* }, */
    /* body: JSON.stringify(productObj) */
  /* } */
  /* return await tryCatchFetch(url, paramsObj) */
/* } */

/* const fetchCartList = async (id) => { */
/* const url = BASE_URL + `cart/${id}` */
/* return await tryCatchFetch(url) */
/* } */

/* const fetchProduct = async (id) => { */
/* const url = BASE_URL + `products/${id}` */
/* return await tryCatchFetch(url) */
/* } */


const exportStuff = {
  fetchAllCartList,
  /* fetchCartList, */
  /* fetchProduct, */
  fetchProductByID,
  addToCart,
  /* updateCart, */
  fetchUser,
  deleteCartItem
}

export default exportStuff;
