import React from "react"



export default function Products (props) {
  
    const {productList, addToCart} = props

    

  return (
   
    <div className="products-content">
      <h2 className="product-title">Scuba Supplies: </h2>
      <ul>
        {productList.map((p) => (
          <li key={p.id} className="products-list">
            <h4>{p.item}</h4>
            <section>
              <img src={p.imageSrc} alt="mask, fins, snorkel, dive computer, or underwater tablet" className={p.item.includes('Fins') ? "fins-img" : "product-img"} />
              <button className="product-btn" onClick={() => addToCart(p)}>Add to cart</button>
            </section>
            <p className="price-text">{'$' + p.price}</p>
            <p className="desc-text">{p.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  
  )
}