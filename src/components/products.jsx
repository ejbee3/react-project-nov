import React from "react"



export default function Products (props) {
  
    const {products, resetProducts, updateSearchQuery, searchQuery, addToCart} = props

 

  return (
   
    <div>
      <section className="title-search">
      <h2 className="product-title">Scuba Supplies: </h2>
      <input type="text" placeholder="scuba search!" value={searchQuery} onChange={e => updateSearchQuery(e.target.value)} />
      <button onClick={() => resetProducts() }>reset</button>
      </section>
      <div>
      <ul className="products-content">
        {products.map((p) => (
          <li key={p.id} className="products-list">
            <h4 className="item-desc">{p.item}</h4>
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
      <div className="separator"></div>
    </div>
  
  )
}