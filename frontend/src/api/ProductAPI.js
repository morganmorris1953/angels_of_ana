
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


const fetchAllCartList = async () => {
  const url = BASE_URL + "cart/"
  return await tryCatchFetch(url)
}

const fetchProductByID = async (id) => {
  const url = BASE_URL + `products/${id}`
  return await tryCatchFetch(url)
}

const addToCart = async (prod_id, user_id) => {
  const url = BASE_URL + `cart/`
  const paramsObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({product_id: prod_id, user_id:user_id})
  }
  return await tryCatchFetch(url, paramsObj)
}

const deleteCartItem= async (id) => {
  const url = BASE_URL + `cart/${id}/`
  console.log(url)
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
  deleteCartItem
}

export default exportStuff;
