const ProductDetailPage = ( product ) => {

    return (
      // Add head tag
      <div className="product-detail">
       // {/* <img className="product-detail__image" src={product.media.source} alt={product.name} /> */}
        <div className="product-detail__info">
          

          <div className="product-detail__details">
           <h1 className="product-detail__name">{product.name}</h1> 
            <div
              className="product-detail__description"
              dangerouslySetInnerHTML={{__html: product.description}}
            ></div>
            <div className="product-detail__price">
         {product.price.formatted_with_symbol}
            </div>
          </div>
        </div>
        <button
          name="View item"
          className="product-detail__btn"
        >
        <span>Add to cart</span>
        {/* <ArrowRight className="product__icon" width={48} height={48} /> */}
      </button>
    </div> 
    )
  }




export default ProductDetailPage;